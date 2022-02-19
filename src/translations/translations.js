import en from "./en.json";
import hu from "./hu.json";

const translations = {
  en,
  hu,
};

export default function getTranslations(lang) {
  const language = translations[lang] || {};

  return {
    ...en, // Use en as a fallback in case there are translations missing for the desired language.
    ...language,
  };
}
