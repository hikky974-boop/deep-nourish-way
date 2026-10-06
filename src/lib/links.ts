// Adresse du quiz Lunaé : tous les boutons d'achat de la landing y mènent.
// Les paramètres de la visite (utm, fbclid…) sont transmis au quiz pour
// garder la trace de la pub d'origine.
export const QUIZ_URL = "https://test.lunae-app.fr/";

export function quizUrl(source: string) {
  const url = new URL(QUIZ_URL);
  if (typeof window !== "undefined") {
    new URLSearchParams(window.location.search).forEach((value, key) => {
      url.searchParams.set(key, value);
    });
  }
  if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", "landing");
  url.searchParams.set("utm_content", source);
  return url.toString();
}
