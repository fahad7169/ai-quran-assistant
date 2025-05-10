import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#3b82f6" transparent opacity={0.2} />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}