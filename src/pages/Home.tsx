// src/pages/Home.tsx
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FeatureGrid from "@/components/FeatureGrid";
import SurahCard from "@/components/SurahCard";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            AI-Powered Quran Exploration
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover Quranic insights through natural language. Ask questions, find verses by topic, 
            and understand context with AI assistance.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <Input 
              placeholder="Ask anything (e.g., Show verses about patience and prayer)"
              className="h-16 text-lg rounded-2xl shadow-xl backdrop-blur-lg bg-white/5 border-gray-700"
            />
            <Button 
              size="lg" 
              className="absolute right-2 top-2 h-12 px-8 gap-2 rounded-xl cursor-pointer"
            >
              Search
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <FeatureGrid />

      {/* Recent Findings */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary">Featured Verses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <SurahCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;