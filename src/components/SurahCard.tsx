// src/components/SurahCard.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

interface SurahCardProps {
  surah: string;
  verse: string;
  text: string;
  translation: string;
  tafsir?: string;
}

const SurahCard = ({ surah, verse, text, translation, tafsir }: SurahCardProps) => {
  const [isTafsirOpen, setIsTafsirOpen] = useState(false);

  // Extract surah number from surah name (e.g., "Al-Baqarah" -> "2")
  const getSurahNumber = (surahName: string): string => {
    const surahMap: { [key: string]: string } = {
      "Al-Fatiha": "1",
      "Al-Baqarah": "2",
      "Al-Imran": "3",
      "An-Nisa": "4",
      "Al-Ma'idah": "5",
      "Al-An'am": "6",
      "Al-A'raf": "7",
      "Al-Anfal": "8",
      "At-Tawbah": "9",
      "Yunus": "10",
      "Hud": "11",
      "Yusuf": "12",
      "Ar-Ra'd": "13",
      "Ibrahim": "14",
      "Al-Hijr": "15",
      "An-Nahl": "16",
      "Al-Isra": "17",
      "Al-Kahf": "18",
      "Maryam": "19",
      "Ta-Ha": "20",
      "Al-Anbiya": "21",
      "Al-Hajj": "22",
      "Al-Mu'minun": "23",
      "An-Nur": "24",
      "Al-Furqan": "25",
      "Ash-Shu'ara": "26",
      "An-Naml": "27",
      "Al-Qasas": "28",
      "Al-Ankabut": "29",
      "Ar-Rum": "30",
      "Luqman": "31",
      "As-Sajdah": "32",
      "Al-Ahzab": "33",
      "Saba": "34",
      "Fatir": "35",
      "Ya-Sin": "36",
      "As-Saffat": "37",
      "Sad": "38",
      "Az-Zumar": "39",
      "Ghafir": "40",
      "Fussilat": "41",
      "Ash-Shura": "42",
      "Az-Zukhruf": "43",
      "Ad-Dukhan": "44",
      "Al-Jathiyah": "45",
      "Al-Ahqaf": "46",
      "Muhammad": "47",
      "Al-Fath": "48",
      "Al-Hujurat": "49",
      "Qaf": "50",
      "Adh-Dhariyat": "51",
      "At-Tur": "52",
      "An-Najm": "53",
      "Al-Qamar": "54",
      "Ar-Rahman": "55",
      "Al-Waqi'ah": "56",
      "Al-Hadid": "57",
      "Al-Mujadilah": "58",
      "Al-Hashr": "59",
      "Al-Mumtahanah": "60",
      "As-Saf": "61",
      "Al-Jumu'ah": "62",
      "Al-Munafiqun": "63",
      "At-Taghabun": "64",
      "At-Talaq": "65",
      "At-Tahrim": "66",
      "Al-Mulk": "67",
      "Al-Qalam": "68",
      "Al-Haqqah": "69",
      "Al-Ma'arij": "70",
      "Nuh": "71",
      "Al-Jinn": "72",
      "Al-Muzzammil": "73",
      "Al-Muddathir": "74",
      "Al-Qiyamah": "75",
      "Al-Insan": "76",
      "Al-Mursalat": "77",
      "An-Naba": "78",
      "An-Nazi'at": "79",
      "Abasa": "80",
      "At-Takwir": "81",
      "Al-Infitar": "82",
      "Al-Mutaffifin": "83",
      "Al-Inshiqaq": "84",
      "Al-Buruj": "85",
      "At-Tariq": "86",
      "Al-A'la": "87",
      "Al-Ghashiyah": "88",
      "Al-Fajr": "89",
      "Al-Balad": "90",
      "Ash-Shams": "91",
      "Al-Lail": "92",
      "Ad-Duha": "93",
      "Ash-Sharh": "94",
      "At-Tin": "95",
      "Al-Alaq": "96",
      "Al-Qadr": "97",
      "Al-Bayyinah": "98",
      "Az-Zalzalah": "99",
      "Al-Adiyat": "100",
      "Al-Qari'ah": "101",
      "At-Takathur": "102",
      "Al-Asr": "103",
      "Al-Humazah": "104",
      "Al-Fil": "105",
      "Quraysh": "106",
      "Al-Ma'un": "107",
      "Al-Kawthar": "108",
      "Al-Kafirun": "109",
      "An-Nasr": "110",
      "Al-Masad": "111",
      "Al-Ikhlas": "112",
      "Al-Falaq": "113",
      "An-Nas": "114"
    };
    return surahMap[surahName] || "1";
  };

  const surahNumber = getSurahNumber(surah);
  const verseNumber = verse.split(":")[1] || verse;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full backdrop-blur-lg bg-white/5 border-gray-800 hover:border-primary transition-colors">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">{surah} ({surahNumber}:{verseNumber})</h3>
            <span className="text-sm text-primary">Verse</span>
          </div>
          <p className="text-3xl text-right font-arabic leading-relaxed">
            {text}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {translation}
          </p>
       
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <Dialog  open={isTafsirOpen} onOpenChange={setIsTafsirOpen}>
                <DialogTrigger asChild>
                  <button className="text-sm text-primary hover:underline cursor-pointer fixed bottom-10">
                    Tafsir
                  </button>
                </DialogTrigger> 
                <DialogContent className="max-w-3xl bg-gray-900 border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-primary">
                      Tafsir of {surah} ({surahNumber}:{verseNumber})
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium">Arabic Text</h4>
                      <p className="text-2xl text-right font-arabic leading-relaxed">
                        {text}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium">Translation</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {translation}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium">Tafsir</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {tafsir}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <button className="text-sm text-primary hover:underline fixed bottom-10 left-20">
                Bookmark
              </button>
            </div>
          
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SurahCard;