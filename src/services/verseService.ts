import axios from 'axios';

interface Verse {
  id: number;
  surah: string;
  verse: string;
  text: string;
  translation: string;
  tafsir?: string;
}

// Helper function to add delay between requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Function to get verses from the API
export const getDailyVerses = async (): Promise<Verse[]> => {
  try {
    const verses: Verse[] = [];
    const seenVerses = new Set<string>(); // To track unique verses

    // Fetch 6 unique verses sequentially with delays
    for (let i = 0; i < 6; i++) {
      let attempts = 0;
      let uniqueVerse = false;

      while (!uniqueVerse && attempts < 5) {
        const response = await axios.get('https://api.alquran.cloud/v1/ayah/random/6');
        const ayah = response.data.data;
        const verseKey = `${ayah.surah.number}-${ayah.numberInSurah}`;

        if (!seenVerses.has(verseKey)) {
          seenVerses.add(verseKey);
          verses.push({
            id: i + 1,
            surah: ayah.surah.englishName,
            verse: ayah.numberInSurah.toString(),
            text: ayah.text,
            translation: ayah.edition.text,
            tafsir: 'Tafsir available on request'
          });
          uniqueVerse = true;
        }
        attempts++;
        await delay(500); // Add delay between requests
      }
    }

    return verses;
  } catch (error) {
    console.error('Error fetching daily verses:', error);
    return [
      // Fallback verses
    ];
  }
};

// Function to get cached verses or fetch new ones
// Cache handling remains the same
export const getTodayVerses = async (): Promise<Verse[]> => {
  const today = new Date().toDateString();
  const cachedVerses = localStorage.getItem('dailyVerses');
  const cachedDate = localStorage.getItem('dailyVersesDate');

  if (cachedVerses && cachedDate === today) {
    return JSON.parse(cachedVerses);
  }

  const verses = await getDailyVerses();
  localStorage.setItem('dailyVerses', JSON.stringify(verses));
  localStorage.setItem('dailyVersesDate', today);
  return verses;
};