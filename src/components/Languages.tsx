//Languages.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import es from "../assets/es.png";
import cat from "../assets/cat.png";
import en from "../assets/en.png";

type LocaleFlags = {
  flag: string;
  title: string;
};

const localeFlags: Record<string, LocaleFlags> = {
  en: { flag: en, title: "English" },
  es: { flag: es, title: "Español" },
  cat: { flag: cat, title: "Català" },
};

const Languages: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="languages">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {Object.entries(localeFlags).map(([locale, { flag, title }]) => (
            <div key={locale} style={{ marginRight: "10px" }}>
              <button
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "none",
                }}
                type="button"
                onClick={() => i18n.changeLanguage(locale)}
              >
                <img src={flag} alt={title} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
