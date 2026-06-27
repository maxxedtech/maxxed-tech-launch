import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, LockKeyhole, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Change the vault password here.
const VAULT_ACCESS_CODE = "1123";

const secureDocuments = [
  {
    title: "Passport Photograph",
    // Replace this file at public/secure/documents/passport.jpg with your passport photograph.
    imageSrc: "/secure/documents/passport.jpg",
  },
  {
    title: "Driver's License",
    // Replace this file at public/secure/documents/license.jpg with your driver's license image.
    imageSrc: "/secure/documents/license.jpg",
  },
];

const SecureVault = () => {
  const [accessCode, setAccessCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const blockContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const blockProtectedShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isProtectedShortcut =
        (event.ctrlKey || event.metaKey) && ["s", "p", "u"].includes(key);

      if (isProtectedShortcut) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockProtectedShortcuts);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockProtectedShortcuts);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (accessCode === VAULT_ACCESS_CODE) {
      setIsUnlocked(true);
      setError("");
      setAccessCode("");
      return;
    }

    setError("Incorrect access code.");
  };

  return (
    <Layout>
      <section className="relative overflow-hidden py-20 lg:py-28 select-none">
        <div className="absolute top-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[128px]" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          {!isUnlocked ? (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-md rounded-2xl border border-border/50 bg-gradient-card p-8 shadow-card lg:p-10"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary shadow-button">
                <LockKeyhole className="h-7 w-7 text-primary-foreground" />
              </div>

              <h1 className="mb-3 text-3xl font-bold text-foreground">
                Secure Vault
              </h1>
              <p className="mb-8 text-muted-foreground">
                Enter the access code to continue.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="vault-code" className="mb-2 block text-sm font-medium text-foreground">
                    Access code
                  </label>
                  <Input
                    id="vault-code"
                    type="password"
                    value={accessCode}
                    onChange={(event) => {
                      setAccessCode(event.target.value);
                      setError("");
                    }}
                    autoComplete="off"
                    inputMode="numeric"
                    className="border-border bg-secondary/50"
                    aria-invalid={!!error}
                    aria-describedby={error ? "vault-code-error" : undefined}
                  />
                  {error && (
                    <p id="vault-code-error" className="mt-2 text-sm font-medium text-destructive">
                      {error}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Continue
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-5xl"
            >
              <div className="mb-10 text-center">
                <span className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  Secure Vault
                </span>
                <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                  Protected <span className="text-gradient">Documents</span>
                </h1>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Document previews are available for this session only. Refreshing this page will lock the vault again.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {secureDocuments.map((document) => (
                  <article
                    key={document.title}
                    className="overflow-hidden rounded-2xl border border-border/50 bg-gradient-card shadow-card"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={document.imageSrc}
                        alt={document.title}
                        draggable={false}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h2 className="mb-4 text-xl font-bold text-foreground">
                        {document.title}
                      </h2>
                      <Button asChild variant="hero-outline" className="w-full">
                        <a href={document.imageSrc} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" />
                          View Full Size
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SecureVault;
