export class LanguageManager {
  getLang() {
    return localStorage.getItem("lastLanguage")
      ? localStorage.getItem("lastLanguage")
      : "ru";
  }
  saveLang(lang) {
    localStorage.setItem("lastLanguage", lang);
  }
}
