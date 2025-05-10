// src/components/SurahCard.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SurahCard = () => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full backdrop-blur-lg bg-white/5 border-gray-800 hover:border-primary transition-colors">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">Al-Baqarah (2:255)</h3>
            <span className="text-sm text-primary">Ayat al-Kursi</span>
          </div>
          <p className="text-3xl text-right font-arabic leading-relaxed">
            ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ
          </p>
          <p className="text-gray-400">
            Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence...
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <button className="text-sm text-primary hover:underline">
                Tafsir
              </button>
              <button className="text-sm text-primary hover:underline">
                Bookmark
              </button>
            </div>
            <span className="text-xs text-gray-500">4.8k saves</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SurahCard