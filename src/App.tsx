// App.tsx (Main Entry)
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from '../src/layouts/MainLayout';
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedRoutes from "./routes/AnimatedRoutes";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <AnimatePresence mode="wait">
            <AnimatedRoutes />
          </AnimatePresence>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}