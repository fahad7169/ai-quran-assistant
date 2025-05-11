import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="relative">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}