// Use environment variable for API key
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Fetch translation from Google Translate API
 * @param {string} text - The text to translate
 * @param {string} targetLang - Target language code (e.g., 'es' for Spanish)
 * @returns {Promise<string|null>} - Translated text or null if failed
 */
export const fetchTranslation = async (text, targetLang) => {
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          target: targetLang,
        }),
      }
    );

    if (!response.ok) {
      console.error("Translation API error:", response.statusText);
      return null;
    }

    const data = await response.json();
    return data?.data?.translations?.[0]?.translatedText || null;
  } catch (error) {
    console.error("Failed to fetch translation:", error);
    return null;
  }
};

/**
 * Save translated text to localStorage
 * @param {string} lang - Target language code
 * @param {string} key - Original text key
 * @param {string} translatedText - Translated text
 */
export const saveTranslation = (lang, key, translatedText) => {
  const translations = JSON.parse(localStorage.getItem("translations") || "{}");

  if (!translations[lang]) {
    translations[lang] = {};
  }

  translations[lang][key] = translatedText;
  localStorage.setItem("translations", JSON.stringify(translations));
};

/**
 * Dynamically import a language JSON file based on the language code.
 * @param {string} lang - The language code (e.g. 'en', 'es', 'nl')
 * @returns {Promise<object>} - The translation resources
 */
export const loadLanguageFile = async (lang) => {
  try {
    switch (lang) {
      case 'nl': return (await import('./lang/nl.json')).default;
      case 'es': return (await import('./lang/es.json')).default;
      case 'fr': return (await import('./lang/fr.json')).default;
      case 'ch': return (await import('./lang/ch.json')).default;
      case 'hi': return (await import('./lang/hi.json')).default;
      case 'ar': return (await import('./lang/ar.json')).default;
      case 'en':
      default: return (await import('./lang/en.json')).default;
    }
  } catch (err) {
    console.error(`Error loading translation file for ${lang}, falling back to English:`, err);
    return (await import('./lang/en.json')).default;
  }
};

