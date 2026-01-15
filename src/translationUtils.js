const API_KEY = process.env.REACT_APP_API_KEY; // pulled from Netlify env vars

// Fetch translation from Google Translate API
export const fetchTranslation = async (key, lng) => {
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, 
    {
      method: "POST",
      body: JSON.stringify({
        q: key,        // The text that needs to be translated
        target: lng,   // Target language (e.g., 'es' for Spanish)
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  
  const data = await response.json();
  return data?.data?.translations?.[0]?.translatedText; // Return the translated text
};

// Save translated text to localStorage
export const saveTranslation = (lng, key, translatedText) => {
  const translations = JSON.parse(localStorage.getItem('translations') || '{}');
  
  if (!translations[lng]) {
    translations[lng] = {};
  }
  
  translations[lng][key] = translatedText;
  localStorage.setItem('translations', JSON.stringify(translations)); // Save it
};
