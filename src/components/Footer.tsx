export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>© 2024 Quran AI Assistant. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <a href="#" className="hover:text-primary">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}