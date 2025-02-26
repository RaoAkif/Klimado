"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "@/components/sections/header/navbar-header";
import ImpakterProTextLogo from "../../ui/impakter-pro-text-logo";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  // Change Language and Store Selection
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // Load Preferred Language on Mount
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) i18n.changeLanguage(savedLang);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="h-[4rem] flex items-center border-b sticky top-0 bg-white z-50">
      <div className="mx-auto flex justify-between items-center w-full px-5 lg:px-16">
        <Link href={EXTERNAL_LINKS.impakterPro} className="font-bold">
          <ImpakterProTextLogo />
        </Link>

        <Navbar />

        {/* Language Selector */}
        <select
          className="border rounded-md px-3 py-1"
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          {["en", "fr", "de", "es", "it", "nl", "pt", "pl", "cs", "da", "fi", "sv", "hu", "el", "bg", "ro", "sk", "lt", "lv", "et", "hr", "sl"].map((lang) => (
            <option key={lang} value={lang}>{lang.toUpperCase()}</option>
          ))}
        </select>
      </div>
    </header>
  );
}
