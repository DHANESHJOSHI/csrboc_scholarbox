import React, { useState } from 'react';
import { X, Mail, AlertCircle, CheckCircle2, Share2, FileText, Menu } from 'lucide-react';

interface Scholarship {
  id: string;
  title: string;
  publishedDate: string;
  endDate: string;
}

const scholarships: Scholarship[] = [
  {
    id: "civil-services",
    title: "Hyundai Hope Scholarship for Union and State Civil Services Aspirants",
    publishedDate: "03-06-2024",
    endDate: "01-10-2024",
  },
  {
    id: "iit",
    title: "Hyundai Hope Scholarship for Aspiring Innovators from IITs",
    publishedDate: "03-06-2024",
    endDate: "30-09-2024",
  },
  {
    id: "clat",
    title: "Hyundai Hope Scholarship for Common Law Admission Test Aspirants",
    publishedDate: "03-06-2024",
    endDate: "30-09-2024",
  },
];

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About the program', href: '#' },
  { name: 'Scholarship', href: '#' },
  { name: 'Learn More & FAQs', href: '#' },
  { name: 'Login / Register', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'How To Apply', href: '#' },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);
  const [result, setResult] = useState<'selected' | 'not-selected' | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCheckResult = (scholarship: Scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
    setShowResult(false);
    setEmail("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isSelected = Math.random() > 0.5;
    setResult(isSelected ? 'selected' : 'not-selected');
    setShowResult(true);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#001B3D]">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src="https://hyundai.scholarsbox.in/uploads/HMIF%20LOGO-1.jpg"
                alt="Hyundai Logo"
                className="h-12"
              />
            </div>

            {/* Hamburger Icon for small screens */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Navbar Links */}
            <ul
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } absolute md:relative bg-white top-16 left-0 w-full md:w-auto md:flex md:space-x-6 md:items-center md:top-auto md:left-auto z-50 shadow-md md:shadow-none`}
            >
              {navItems.map((item) => (
                <li key={item.name} className="text-sm">
                  <a
                    href={item.href}
                    className="block py-3 px-4 md:py-0 md:px-0 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Scholarships</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <img 
                    src="https://hyundai.scholarsbox.in/uploads/HMIF%20LOGO-1.jpg" 
                    alt="Hyundai Logo Combined" 
                    className="h-20 sm:h-24"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                  {scholarship.title}
                </h3>
                {/* <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Published Date: {scholarship.publishedDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>End Date: {scholarship.endDate}</span>
                  </div>
                </div> */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {}}
                    className="p-2 text-gray-600 hover:text-blue-600"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleCheckResult(scholarship)}
                    className="bg-[#001B3D] text-white px-4 py-2 text-sm rounded hover:bg-blue-900 transition-colors duration-200"
                  >
                    Result
                  </button>
                  <button
                    onClick={() => {}}
                    className="p-2 text-gray-600 hover:text-blue-600"
                  >
                    <FileText className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            {!showResult ? (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Check Your Result
                </h3>
                <p className="text-gray-600 mb-6">
                  Enter your registered email address to view your scholarship result
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#001B3D] text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors duration-200"
                  >
                    View Result
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center">
                {result === 'selected' ? (
                  <div className="space-y-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Congratulations!
                    </h3>
                    <p className="text-gray-600">
                      You have been selected for the scholarship.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      We regret to inform you
                    </h3>
                    <p className="text-gray-600">
                      You were not selected for the scholarship. We wish you better luck for future scholarships.
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;