import axios from 'axios';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

interface SearchResult {
  id: number;
  surah: string;
  verse: string;
  text: string;
  translation: string;
  tafsir?: string;
}

const constructPrompt = (query: string): string => {
  const prompt = `You are a Quranic search assistant. Please help find relevant verses and provide context for the following query: "${query}"

Please provide the response in the following JSON format, ensuring all strings are properly escaped:
{
  "results": [
    {
      "surah": "Surah name",
      "verse": "Verse number",
      "arabic_text": "Arabic text of the verse",
      "translation": "English translation",
      "tafsir": "Brief tafsir/explanation"
    }
  ]
}

Important:
1. Ensure all strings are properly escaped
2. Do not include any line breaks within string values
3. Keep tafsir brief and concise
4. Limit to 3-5 most relevant results
5. If the query is unclear or not related to the Quran, return an empty results array
6. Use accurate Arabic text and translations from reliable sources like Quran.com
7. For translations, prefer the Saheeh International translation when available
8. For tafsir, use reliable sources like Tafsir Ibn Kathir or Tafsir al-Tabari

Focus on:
1. Finding the most relevant verses from reliable sources
2. Providing accurate translations from Quran.com or Saheeh International
3. Including brief tafsir/context from authentic sources
4. Ensuring valid JSON format`;

  return prompt;
};

export const searchQuran = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a Quranic search assistant that provides accurate and relevant verses with translations and tafsir. Always respond with valid JSON."
          },
          {
            role: "user",
            content: constructPrompt(query)
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const content = response.data.choices[0].message.content;
    
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      console.error('Invalid JSON content:', content);
      throw new Error('Invalid response format from API. Please try again.');
    }
    
    if (!parsedContent.results || !Array.isArray(parsedContent.results)) {
      console.error('Invalid response structure:', parsedContent);
      throw new Error('Invalid response structure from API. Please try again.');
    }

    const results = parsedContent.results.map((result: any, index: number) => ({
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