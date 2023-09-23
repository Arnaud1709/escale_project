import i18n from "i18next";
import en from "./translations/en/translation.json";
import fr from "./translations/fr/translation.json";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLang: "fr",
  keySeparator: false,
  debug: false,
});
export default i18n;
