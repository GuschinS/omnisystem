// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Закрыть меню после клика
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Omnisystem Logo"
            className="h-24 md:h-32 w-auto"
          />
        </a>

        {/* Бургер для мобильных */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Меню десктоп */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#features"
            className="text-primary hover:text-accent transition-colors cursor-pointer"
          >
            Функции
          </a>
          <a
            href="#devices"
            className="text-primary hover:text-accent transition-colors cursor-pointer"
          >
            Устройства
          </a>
          <a
            href="#faq"
            className="text-primary hover:text-accent transition-colors cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-primary hover:text-accent transition-colors cursor-pointer"
          >
            Контакт
          </a>
        </nav>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 py-2 space-y-3">
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="block text-left text-primary hover:text-accent transition-colors cursor-pointer"
          >
            Функции
          </a>
          <a
            href="#devices"
            onClick={() => setMenuOpen(false)}
            className="block text-left text-primary hover:text-accent transition-colors cursor-pointer"
          >
            Устройства
          </a>
          <a
            href="#faq"
            onClick={() => setMenuOpen(false)}
            className="block text-left text-primary hover:text-accent transition-colors cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-left text-primary hover:text-accent transition-colors cursor-pointer"
          >
            Контакт
          </a>
        </nav>
      )}
    </header>
  );
}
