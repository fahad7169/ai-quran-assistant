// src/pages/Home.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FeatureGrid from "@/components/FeatureGrid";
import SurahCard from "@/components/SurahCard";
import { useState, useCallback } from "react";
import { searchQuran } from "@/services/quranService";
import { toast } from "sonner";

interface SearchResult {
  id: number;
  surah: string;
  verse: string;
  text: string;
  translation: string;
  tafsir?: string;
}


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [displayedResults, setDisplayedResults] = useState<number>(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setDisplayedResults(1);
    
    try {
      const results = await searchQuran(searchQuery);
      setSearchResults(results);
      setHasMore(results.length > 1);
      
      if (results.length === 0) {
        toast.info("No relevant verses found. Try rephrasing your query.");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('Rate limit exceeded')) {
          toast.error("Please wait a moment before searching again.");
        } else if (error.message.includes('Invalid API key')) {
          toast.error("API configuration error. Please check your setup.");
        } else if (error.message.includes('Invalid request')) {
          toast.error("Please try a different search query.");
        } else {
          toast.error(error.message || "Failed to search. Please try again.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  }, [searchQuery]);

  const handleLoadMore = useCallback(() => {
    const newCount = displayedResults + 2;
    setDisplayedResults(newCount);
    setHasMore(newCount < searchResults.length);
  }, [displayedResults, searchResults.length]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            AI-Powered Quran Exploration
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover Quranic insights through natural language. Ask questions, find verses by topic, 
            and understand context with AI assistance.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              placeholder="Ask anything (e.g., Show verses about patience and prayer)"
              className="h-16 text-lg rounded-2xl shadow-xl backdrop-blur-lg bg-white/5 border-gray-700 flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="flex justify-center sm:justify-start">
              <Button 
                size="lg" 
                className="h-14 w-[140px] px-8 gap-2 rounded-2xl cursor-pointer whitespace-nowrap bg-primary hover:bg-primary/90 transition-colors shadow-lg"
                onClick={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  "Search"
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <AnimatePresence mode="wait">
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between items-center"
              >
                <h2 className="text-2xl font-semibold text-primary">Search Results</h2>
                <p className="text-gray-400">Found {searchResults.length} results</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.slice(0, displayedResults).map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SurahCard
                      surah={result.surah}
                      verse={result.verse}
                      text={result.text}
                      translation={result.translation}
                      tafsir={result.tafsir}
                    />
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {hasMore && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex justify-center mt-8"
                  >
                    <Button
                      onClick={handleLoadMore}
                      variant="outline"
                      className="px-8 py-2 rounded-xl border-primary text-primary hover:bg-primary/10"
                    >
                      Load More
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Recent Findings */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary">Featured Verses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <SurahCard 
                surah="Al-Fatiha"
                verse="1"
                text="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
                translation="In the name of Allah, the Entirely Merciful, the Especially Merciful."
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <FeatureGrid />
    </div>
  );
};

export default Home;