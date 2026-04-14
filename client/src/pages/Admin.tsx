import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mail, Phone, Clock, CheckCircle2, Eye, Lock, Download,
  Star, QrCode, Send, ExternalLink, Copy, Check,
} from "lucide-react";
import type { ContactSubmission } from "@shared/schema";
import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_REVIEW_URL = "https://g.page/r/CY37yOB_b1BWEBM/review";
const YELP_URL = "https://www.yelp.com/biz/purety-family-medical-clinic-santa-barbara";

function AdminLogin({ onLogin }: { onLogin: (key: string) => void }) {
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/contact`, {
      headers: { "x-admin-key": key },
    });
    if (res.ok) {
      onLogin(key);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-sm w-full p-8 bg-white rounded-2xl shadow-lg border">
          <div className="text-center mb-6">
            <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
            <h1 className="font-serif text-2xl" data-testid="text-admin-login-title">Admin Access</h1>
            <p className="text-muted-foreground text-sm mt-1">Enter your admin password to continue.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-key">Password</Label>
              <Input
                id="admin-key"
                type="password"
                value={key}
                onChange={(e) => { setKey(e.target.value); setError(false); }}
                required
                className="h-11"
                data-testid="input-admin-key"
              />
              {error && <p className="text-destructive text-sm">Incorrect password.</p>}
            </div>
            <Button type="submit" className="w-full h-11" data-testid="button-admin-login">Sign In</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function Admin() {
  const [adminKey, setAdminKey] = useState<string | null>(
    sessionStorage.getItem("adminKey")
  );

  const handleLogin = (key: string) => {
    sessionStorage.setItem("adminKey", key);
    setAdminKey(key);
  };

  if (!adminKey) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard adminKey={adminKey} />;
}

type Tab = "submissions" | "reviews";

function AdminDashboard({ adminKey }: { adminKey: string }) {
  const [tab, setTab] = useState<Tab>("submissions");

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow">
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="font-serif text-4xl text-foreground mb-6" data-testid="text-admin-title">
              Admin Dashboard
            </h1>
            <div className="flex gap-2 border-b border-gray-200 mb-8">
              <TabButton active={tab === "submissions"} onClick={() => setTab("submissions")}>
                <Mail className="w-4 h-4" /> Form Submissions
              </TabButton>
              <TabButton active={tab === "reviews"} onClick={() => setTab("reviews")}>
                <Star className="w-4 h-4" /> Review Requests
              </TabButton>
            </div>

            {tab === "submissions" && <SubmissionsTab adminKey={adminKey} />}
            {tab === "reviews" && <ReviewsTab adminKey={adminKey} />}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
        active
          ? "border-primary text-primary"
          : "border-transparent text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function SubmissionsTab({ adminKey }: { adminKey: string }) {
  const queryClient = useQueryClient();

  const { data: submissions = [], isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
    queryFn: async () => {
      const res = await fetch("/api/contact", {
        headers: { "x-admin-key": adminKey },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });

  const markRead = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`/api/contact/${id}/read`, {
        method: "PATCH",
        headers: { "x-admin-key": adminKey },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
  });

  const unreadCount = submissions.filter((s) => !s.read).length;

  return (
    <>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <p className="text-muted-foreground">
          {unreadCount > 0 ? `${unreadCount} new submission${unreadCount > 1 ? "s" : ""}` : "All caught up!"}
        </p>
        <div className="flex items-center gap-3">
          <Badge variant={unreadCount > 0 ? "default" : "secondary"} className="text-base px-4 py-1.5" data-testid="badge-unread-count">
            {submissions.length} total
          </Badge>
          <a href={`/api/contact/export?key=${adminKey}`} download data-testid="link-export-csv">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" /> Export CSV
            </Button>
          </a>
        </div>
      </div>

      {isLoading ? (
        <p className="text-center text-muted-foreground py-12">Loading submissions...</p>
      ) : submissions.length === 0 ? (
        <div className="text-center py-20 bg-muted/30 rounded-2xl">
          <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">No submissions yet.</p>
          <p className="text-muted-foreground text-sm mt-2">When someone fills out a contact form, it will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((s) => (
            <div
              key={s.id}
              className={`p-6 rounded-xl border transition-all ${
                s.read ? "bg-white border-gray-200" : "bg-primary/5 border-primary/20 shadow-sm"
              }`}
              data-testid={`card-submission-${s.id}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-foreground" data-testid={`text-name-${s.id}`}>
                      {s.firstName} {s.lastName}
                    </h3>
                    {!s.read && (
                      <Badge variant="default" className="bg-primary text-xs">New</Badge>
                    )}
                    <Badge variant="outline" className="text-xs">{s.source}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      <a href={`mailto:${s.email}`} className="hover:text-primary" data-testid={`link-email-${s.id}`}>{s.email}</a>
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      <a href={`tel:${s.phone}`} className="hover:text-primary" data-testid={`link-phone-${s.id}`}>{s.phone}</a>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(s.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-foreground whitespace-pre-wrap" data-testid={`text-message-${s.id}`}>{s.message}</p>
                </div>
                <div className="shrink-0">
                  {!s.read ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => markRead.mutate(s.id)}
                      disabled={markRead.isPending}
                      data-testid={`button-mark-read-${s.id}`}
                    >
                      <Eye className="w-4 h-4 mr-1" /> Mark Read
                    </Button>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle2 className="w-4 h-4" /> Read
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function ReviewsTab({ adminKey }: { adminKey: string }) {
  const { toast } = useToast();
  const qrRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(GOOGLE_REVIEW_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    try {
      const res = await fetch("/api/review-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setSent(true);
      setForm({ firstName: "", lastName: "", email: "" });
      toast({ title: "Review request sent!", description: `Email sent to ${form.email}` });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Email request form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Send className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-foreground">Send Review Request</h2>
            <p className="text-sm text-muted-foreground">Email a patient a branded review invite</p>
          </div>
        </div>

        <form onSubmit={handleSend} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="rv-first">First Name *</Label>
              <Input
                id="rv-first"
                value={form.firstName}
                onChange={(e) => setForm(f => ({ ...f, firstName: e.target.value }))}
                required
                placeholder="Jane"
                className="h-10"
                data-testid="input-review-firstname"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="rv-last">Last Name</Label>
              <Input
                id="rv-last"
                value={form.lastName}
                onChange={(e) => setForm(f => ({ ...f, lastName: e.target.value }))}
                placeholder="Smith"
                className="h-10"
                data-testid="input-review-lastname"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="rv-email">Patient Email *</Label>
            <Input
              id="rv-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
              required
              placeholder="jane@example.com"
              className="h-10"
              data-testid="input-review-email"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2">{error}</p>
          )}

          <Button
            type="submit"
            className="w-full h-11 gap-2"
            disabled={sending}
            data-testid="button-send-review-request"
          >
            {sending ? "Sending…" : sent ? <><Check className="w-4 h-4" /> Sent!</> : <><Send className="w-4 h-4" /> Send Review Request</>}
          </Button>
        </form>

        <div className="mt-6 pt-5 border-t border-gray-100">
          <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">What the email includes</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Personalized greeting with patient's first name</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Direct button to your Google review page</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Direct button to your Yelp page</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Signed from Dr. Jonathan & Dr. Dena Birch</li>
          </ul>
        </div>
      </div>

      {/* QR code + links */}
      <div className="space-y-5">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-foreground">QR Code — Google Review</h2>
              <p className="text-sm text-muted-foreground">Print or display for in-person use</p>
            </div>
          </div>

          <div ref={qrRef} className="flex flex-col items-center gap-4 bg-white py-4">
            <QRCodeSVG
              value={GOOGLE_REVIEW_URL}
              size={180}
              fgColor="#1a1a2e"
              bgColor="#ffffff"
              level="H"
              data-testid="qr-google-review"
            />
            <p className="text-sm text-center text-muted-foreground font-medium">
              Scan to leave us a Google review
            </p>
          </div>

          <div className="flex gap-2 mt-2">
            <div className="flex-1 flex items-center gap-2 bg-muted rounded-lg px-3 py-2 text-xs text-muted-foreground overflow-hidden">
              <span className="truncate">{GOOGLE_REVIEW_URL}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="shrink-0 gap-1.5"
              onClick={handleCopy}
              data-testid="button-copy-google-link"
            >
              {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
            </Button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-base text-foreground mb-4">Direct Review Links</h2>
          <div className="space-y-3">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group"
              data-testid="link-google-review"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">G</div>
                <span className="font-medium text-sm">Google Reviews</span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 w-full px-4 py-3 rounded-xl bg-red-50 border border-red-200 hover:bg-red-100 transition-colors group"
              data-testid="link-yelp-review"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d32323] flex items-center justify-center text-white text-xs font-bold">Y</div>
                <span className="font-medium text-sm">Yelp Reviews</span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-[#d32323] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
