// App.tsx (Main Entry)
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from '../src/layouts/MainLayout';
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <AnimatedRoutes />
        </MainLayout>
      </Router>
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  );
}