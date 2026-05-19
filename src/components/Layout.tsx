import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Layout({ children, theme, onToggleTheme }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="site-ambient-bg" aria-hidden="true" />
      <div className="site-grid-overlay" aria-hidden="true" />
      <div className="ambient-particle ambient-particle--one" aria-hidden="true" />
      <div className="ambient-particle ambient-particle--two" aria-hidden="true" />
      <div className="ambient-particle ambient-particle--three" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  );
}
