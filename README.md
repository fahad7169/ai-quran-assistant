# Quran AI Assistant

A modern web application that helps users search and explore the Quran with AI-powered assistance. Built with React, TypeScript, and Vite.

## Features

- 🔍 Advanced Quran search functionality
- 📖 Accurate Arabic text display
- 🌐 Multiple translations support
- 📚 Tafsir (interpretation) integration
- 🎯 User-friendly interface
- ⚡ Fast and responsive design

## Tech Stack

- React 18
- TypeScript
- Vite
- Axios for API calls
- Modern CSS styling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/fahad7169/ai-quran-assistant.git
cd quran-ai-assistant
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
quran-ai-assistant/
├── src/
│   ├── components/     # React components
│   ├── services/       # API services
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Utility functions
│   └── App.tsx        # Main application component
├── public/            # Static assets
├── index.html         # Entry HTML file
└── package.json       # Project dependencies
```

## API Integration

The application connects to a local API server that provides Quran search functionality. The API endpoints include:

- `GET /api/quran/search` - Search Quran verses
  - Query Parameters:
    - `query`: Search term

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Quran.com for providing reliable Quran data
- The open-source community for their valuable contributions
