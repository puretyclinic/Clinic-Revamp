import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, CheckCircle2, Eye, Lock, Download } from "lucide-react";
import type { ContactSubmission } from "@shared/schema";
import { useState } from "react";

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
            <p className="text-muted-foreground text-sm mt-1">Enter your admin password to view submissions.</p>
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

function AdminDashboard({ adminKey }: { adminKey: string }) {
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
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h1 className="font-serif text-4xl text-foreground" data-testid="text-admin-title">Form Submissions</h1>
                <p className="text-muted-foreground mt-2">
                  {unreadCount > 0 ? `${unreadCount} new submission${unreadCount > 1 ? "s" : ""}` : "All caught up!"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={unreadCount > 0 ? "default" : "secondary"} className="text-lg px-4 py-2" data-testid="badge-unread-count">
                  {submissions.length} total
                </Badge>
                <a
                  href={`/api/contact/export?key=${adminKey}`}
                  download
                  data-testid="link-export-csv"
                >
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
