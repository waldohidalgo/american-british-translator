const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  applyOriginalStyle(original, replacement) {
    if (original.split(/\s+/g).length > 1) {
      return replacement;
    }
    if (original === original.toUpperCase()) {
      return replacement.toUpperCase();
    } else if (original === original.toLowerCase()) {
      return replacement.toLowerCase();
    } else if (original.charAt(0) === original.charAt(0).toUpperCase()) {
      return (
        replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase()
      );
    }
    return replacement;
  }

  highlightPhraseApply(word, highlight) {
    if (highlight) {
      return `<span class="highlight">${word}</span>`;
    } else {
      return word;
    }
  }
  translate(phrase, locale, highlight = false) {
    if (locale === "american-to-british") {
      const pattern = new RegExp(
        Object.keys(americanOnly)
          .map((word) => `\\b${word}\\b`)
          .join("|") +
          "|" +
          Object.keys(americanToBritishSpelling).join("|") +
          "|" +
          Object.keys(americanToBritishTitles)
            .map((word) => `\\b${word}(?![\\w\\.])`)
            .join("|") +
          "|" +
          "\\d+:\\d+",
        "gi"
      );

      const phraseBritish = phrase.replace(pattern, (word) => {
        const lowerWord = word.toLowerCase();
        const americanOnlyTranslated = americanOnly[lowerWord];
        const americanToBritishSpellingTranslated =
          americanToBritishSpelling[lowerWord];
        const americanToBritishTitlesTranslated =
          americanToBritishTitles[lowerWord];

        if (americanOnlyTranslated) {
          return this.highlightPhraseApply(
            this.applyOriginalStyle(word, americanOnlyTranslated),
            highlight
          );
        }

        if (americanToBritishSpellingTranslated) {
          return this.highlightPhraseApply(
            this.applyOriginalStyle(word, americanToBritishSpellingTranslated),
            highlight
          );
        }

        if (americanToBritishTitlesTranslated) {
          return this.highlightPhraseApply(
            this.applyOriginalStyle(word, americanToBritishTitlesTranslated),
            highlight
          );
        }

        if (word.match(/\d+\:\d+/)) {
          return this.highlightPhraseApply(
            word.split(":")[0] + "." + word.split(":")[1],
            highlight
          );
        }

        return word;
      });
      return phraseBritish;
    }
    if (locale === "british-to-american") {
      const britishToAmericanSpelling = Object.fromEntries(
        Object.entries(americanToBritishSpelling).map(([key, value]) => [
          value,
          key,
        ])
      );
      const britishToAmericanTitles = Object.fromEntries(
        Object.entries(americanToBritishTitles).map(([key, value]) => [
          value,
          key,
        ])
      );

      const pattern = new RegExp(
        Object.keys(britishOnly)
          .map((word) => `\\b${word}\\b`)
          .join("|") +
          "|" +
          Object.keys(britishToAmericanSpelling).join("|") +
          "|" +
          Object.keys(britishToAmericanTitles)
            .map((word) => `\\b${word}(?![\\w\\.])`)
            .join("|") +
          "|" +
          "\\d+.\\d+",
        "gi"
      );

      const phraseAmerican = phrase.replace(pattern, (word) => {
        const lowerWord = word.toLowerCase();

        const britishOnlyTranslated = britishOnly[lowerWord];
        const britishToAmericanSpellingTranslated =
          britishToAmericanSpelling[lowerWord];
        const britishToAmericanTitlesTranslated =
          britishToAmericanTitles[lowerWord];

        if (britishOnlyTranslated) {
          return this.highlightPhraseApply(
            this.applyOriginalStyle(word, britishOnlyTranslated),
            highlight
          );
        }

        if (britishToAmericanSpellingTranslated) {
          return this.highlightPhraseApply(
            this.applyOriginalStyle(word, britishToAmericanSpellingTranslated),
            highlight
          );
        }

        if (britishToAmericanTitlesTranslated) {
          return this.highlightPhraseApply(
            this.applyOriginalStyle(word, britishToAmericanTitlesTranslated),
            highlight
          );
        }

        if (word.match(/\d+\.\d+/)) {
          return this.highlightPhraseApply(
            word.split(".")[0] + ":" + word.split(".")[1],
            highlight
          );
        }
        return word;
      });

      return phraseAmerican;
    }
  }
}

//const translator = new Translator();

// console.log(
//   translator.translate(
//     "No Mr. Bond, I expect you to die.",
//     "american-to-british"
//   )
// );

// console.log(
//   translator.translate("Lunch is at 12:15 today.", "british-to-american")
// );

module.exports = Translator;
