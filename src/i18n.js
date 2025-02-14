i18n.on("missingKey", async (lng, namespace, key) => {
  console.log("Missing Key:", key); // Add this to debug
  const translatedText = await fetchTranslation(key, lng);
  if (translatedText) {
    await saveTranslation(lng, key, translatedText); // Save to localStorage
    i18n.addResource(lng, namespace, key, translatedText); // Add it to i18next
    console.log(`Added translation for ${key}: ${translatedText}`); // Debug the translation
  }
});
