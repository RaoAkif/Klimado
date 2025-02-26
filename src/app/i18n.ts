import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: { welcome: "Welcome!", navbar: { home: "Home", about: "About Us", pricing: "Pricing", contact: "Contact" } } },
  fr: { translation: { welcome: "Bienvenue!", navbar: { home: "Accueil", about: "À propos", pricing: "Tarification", contact: "Contact" } } },
  de: { translation: { welcome: "Willkommen!", navbar: { home: "Startseite", about: "Über uns", pricing: "Preisgestaltung", contact: "Kontakt" } } },
  es: { translation: { welcome: "¡Bienvenido!", navbar: { home: "Inicio", about: "Sobre nosotros", pricing: "Precios", contact: "Contacto" } } },
  it: { translation: { welcome: "Benvenuto!", navbar: { home: "Home", about: "Chi siamo", pricing: "Prezzi", contact: "Contatti" } } },
  nl: { translation: { welcome: "Welkom!", navbar: { home: "Home", about: "Over ons", pricing: "Prijzen", contact: "Contact" } } },
  pt: { translation: { welcome: "Bem-vindo!", navbar: { home: "Início", about: "Sobre nós", pricing: "Preços", contact: "Contato" } } },
  pl: { translation: { welcome: "Witamy!", navbar: { home: "Strona główna", about: "O nas", pricing: "Cennik", contact: "Kontakt" } } },
  cs: { translation: { welcome: "Vítejte!", navbar: { home: "Domů", about: "O nás", pricing: "Ceník", contact: "Kontakt" } } },
  da: { translation: { welcome: "Velkommen!", navbar: { home: "Hjem", about: "Om os", pricing: "Priser", contact: "Kontakt" } } },
  fi: { translation: { welcome: "Tervetuloa!", navbar: { home: "Etusivu", about: "Meistä", pricing: "Hinnat", contact: "Ota yhteyttä" } } },
  sv: { translation: { welcome: "Välkommen!", navbar: { home: "Hem", about: "Om oss", pricing: "Priser", contact: "Kontakt" } } },
  hu: { translation: { welcome: "Üdvözöljük!", navbar: { home: "Főoldal", about: "Rólunk", pricing: "Árak", contact: "Kapcsolat" } } },
  el: { translation: { welcome: "Καλώς ήρθατε!", navbar: { home: "Αρχική", about: "Σχετικά με εμάς", pricing: "Τιμές", contact: "Επικοινωνία" } } },
  bg: { translation: { welcome: "Добре дошли!", navbar: { home: "Начало", about: "За нас", pricing: "Цени", contact: "Контакт" } } },
  ro: { translation: { welcome: "Bine ai venit!", navbar: { home: "Acasă", about: "Despre noi", pricing: "Prețuri", contact: "Contact" } } },
  sk: { translation: { welcome: "Vitajte!", navbar: { home: "Domov", about: "O nás", pricing: "Cenník", contact: "Kontakt" } } },
  lt: { translation: { welcome: "Sveiki!", navbar: { home: "Pagrindinis", about: "Apie mus", pricing: "Kainos", contact: "Kontaktai" } } },
  lv: { translation: { welcome: "Laipni lūgti!", navbar: { home: "Sākums", about: "Par mums", pricing: "Cenas", contact: "Kontakti" } } },
  et: { translation: { welcome: "Tere tulemast!", navbar: { home: "Avaleht", about: "Meist", pricing: "Hinnad", contact: "Kontakt" } } },
  hr: { translation: { welcome: "Dobrodošli!", navbar: { home: "Početna", about: "O nama", pricing: "Cijene", contact: "Kontakt" } } },
  sl: { translation: { welcome: "Dobrodošli!", navbar: { home: "Domov", about: "O nas", pricing: "Cenik", contact: "Kontakt" } } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
