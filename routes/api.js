"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    if (text === undefined || locale === undefined) {
      res.json({ error: "Required field(s) missing" });
      return;
    }
    if (/^\s*$/.test(text)) {
      res.json({ error: "No text to translate" });
      return;
    }

    if (locale !== "american-to-british" && locale !== "british-to-american") {
      res.json({ error: "Invalid value for locale field" });
      return;
    }
    const translation = translator.translate(text, locale, true);
    if (translation === text) {
      res.json({ text: text, translation: "Everything looks good to me!" });
      return;
    }

    res.json({ text: text, translation: translation });
  });
};
