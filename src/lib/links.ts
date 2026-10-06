import { currentAttributionParams } from "@/lib/tracking";

export const QUIZ_URL = "https://test.lunae-app.fr/";

/**
 * Lien vers le quiz, en gardant la provenance de la visite (pub Meta, utm…).
 * - Les paramètres présents dans l'adresse actuelle (fbclid, utm_…) sont recopiés.
 * - Ceux mémorisés en cookie ne sont repris que si la personne a accepté la pub
 *   (géré par currentAttributionParams).
 */
export function quizUrl(source: string) {
  const url = new URL(QUIZ_URL);
  if (typeof window !== "undefined") {
    for (const [key, value] of Object.entries(currentAttributionParams())) {
      url.searchParams.set(key, value);
    }
    new URLSearchParams(window.location.search).forEach((value, key) => {
      url.searchParams.set(key, value);
    });
  }
  if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", "landing");
  url.searchParams.set("utm_content", source);
  return url.toString();
}
