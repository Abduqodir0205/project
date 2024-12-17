
export default function Footer() {
  return (
    <footer className="bg-white shadow-sm mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Personal Finance Manager. All rights reserved.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Made with by Abduqodir</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 