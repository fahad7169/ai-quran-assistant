import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Update this with your local server port

interface SearchResult {
  id: number;
  surah: string;
  verse: string;
  text: string;
  translation: string;
  tafsir?: string;
}

export const searchQuran = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/quran/search`, {
      params: { query }
    });

    if (!response.data || !Array.isArray(response.data)) {
      console.error('Invalid response structure:', response.data);
      throw new Error('Invalid response structure from server. Please try again.');
    }

    const results = response.data.map((result: any, index: number) => ({
      id: index + 1,
      surah: result.surah || 'Unknown',
      verse: result.verse || 'Unknown',
      text: result.arabic_text || '',
      translation: result.translation || '',
      tafsir: result.tafsir || ''
    }));
    
    return results;
  } catch (error) {
    console.error('Error searching Quran:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw new Error('Failed to search Quran. Please try again.');
  }
}; 