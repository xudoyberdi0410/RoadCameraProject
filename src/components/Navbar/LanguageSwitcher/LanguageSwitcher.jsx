import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"; // Для стилей

const LanguageSwitcher = () => {
  const languages = [
    { value: "en", label: "English", flag: "en.png" },
    { value: "ru", label: "Русский", flag: "ru.png" },
    { value: "uz_cyr", label: "Ўзбекча", flag: "uz.png" },
    { value: "uz", label: "O'zbekcha", flag: "uz.png" },
  ];

  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Инициализация языка
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const systemLanguage = i18n.language;

    const initialLanguage =
      languages.find((lang) => lang.value === savedLanguage) ||
      languages.find((lang) => lang.value === systemLanguage) ||
      languages[0]; // Если ничего не совпадает, ставим первый язык

    setSelectedLanguage(initialLanguage);
    i18n.changeLanguage(initialLanguage.value);
  }, [i18n]);

  // Переключение языка
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    i18n.changeLanguage(language.value);
    localStorage.setItem("language", language.value); // Сохраняем выбранный язык
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-switcher">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span>
          <img
            src={selectedLanguage?.flag}
            alt={selectedLanguage?.label}
            className="language_switcher_flag_img"
          />
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((language) => (
            <li
              key={language.value}
              className="dropdown-item"
              onClick={() => selectLanguage(language)}
            >
              <img
                src={language.flag}
                alt={language.value}
                className="language_switcher_flag_img"
              />
              <span className="label">{language.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
