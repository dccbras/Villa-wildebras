import nl from "@/data/translations/nl.json";
import en from "@/data/translations/en.json";
import de from "@/data/translations/de.json";

export function getTranslations(locale: string) {
  if (locale === "en") return en;
  if (locale === "de") return de;
  return nl;
}
