const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  const translator = new Translator();

  // Translate Mangoes are my favorite fruit. to British English
  test("Translate Mangoes are my favorite fruit. to British English", (done) => {
    assert.equal(
      translator.translate(
        "Mangoes are my favorite fruit.",
        "american-to-british",
        false
      ),
      "Mangoes are my favourite fruit."
    );
    done();
  });

  // Translate I ate yogurt for breakfast. to British English

  test("Translate I ate yogurt for breakfast. to British English", (done) => {
    assert.equal(
      translator.translate(
        "I ate yogurt for breakfast.",
        "american-to-british",
        false
      ),
      "I ate yoghurt for breakfast."
    );
    done();
  });

  // Translate We had a party at my friend's condo. to British English

  test("Translate We had a party at my friend's condo. to British English", (done) => {
    assert.equal(
      translator.translate(
        "We had a party at my friend's condo.",
        "american-to-british",
        false
      ),
      "We had a party at my friend's flat."
    );
    done();
  });

  // Translate Can you toss this in the trashcan for me? to British English

  test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
    assert.equal(
      translator.translate(
        "Can you toss this in the trashcan for me?",
        "american-to-british",
        false
      ),
      "Can you toss this in the bin for me?"
    );
    done();
  });

  // Translate The parking lot was full. to British English

  test("Translate The parking lot was full. to British English", (done) => {
    assert.equal(
      translator.translate(
        "The parking lot was full.",
        "american-to-british",
        false
      ),
      "The car park was full."
    );
    done();
  });

  // Translate Like a high tech Rube Goldberg machine. to British English

  test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
    assert.equal(
      translator.translate(
        "Like a high tech Rube Goldberg machine.",
        "american-to-british",
        false
      ),
      "Like a high tech Heath Robinson device."
    );
    done();
  });

  // Translate To play hooky means to skip class or work. to British English

  test("Translate To play hooky means to skip class or work. to British English", (done) => {
    assert.equal(
      translator.translate(
        "To play hooky means to skip class or work.",
        "american-to-british",
        false
      ),
      "To bunk off means to skip class or work."
    );
    done();
  });

  // Translate No Mr. Bond, I expect you to die. to British English

  test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
    assert.equal(
      translator.translate(
        "No Mr. Bond, I expect you to die.",
        "american-to-british",
        false
      ),
      "No Mr Bond, I expect you to die."
    );
    done();
  });

  // Translate Dr. Grosh will see you now. to British English

  test("Translate Dr. Grosh will see you now. to British English", (done) => {
    assert.equal(
      translator.translate(
        "Dr. Grosh will see you now.",
        "american-to-british",
        false
      ),
      "Dr Grosh will see you now."
    );
    done();
  });

  // Translate Lunch is at 12:15 today. to British English

  test("Translate Lunch is at 12:15 today. to British English", (done) => {
    assert.equal(
      translator.translate(
        "Lunch is at 12:15 today.",
        "american-to-british",
        false
      ),
      "Lunch is at 12.15 today."
    );
    done();
  });

  // Translate We watched the footie match for a while. to American English

  test("Translate We watched the footie match for a while. to American English", (done) => {
    assert.equal(
      translator.translate(
        "We watched the footie match for a while.",
        "british-to-american",
        false
      ),
      "We watched the soccer match for a while."
    );
    done();
  });
  // Translate Paracetamol takes up to an hour to work. to American English

  test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
    assert.equal(
      translator.translate(
        "Paracetamol takes up to an hour to work.",
        "british-to-american",
        false
      ),
      "Tylenol takes up to an hour to work."
    );
    done();
  });

  // Translate First, caramelise the onions. to American English

  test("Translate First, caramelise the onions. to American English", (done) => {
    assert.equal(
      translator.translate(
        "First, caramelise the onions.",
        "british-to-american",
        false
      ),
      "First, caramelize the onions."
    );
    done();
  });

  // Translate I spent the bank holiday at the funfair. to American English

  test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
    assert.equal(
      translator.translate(
        "I spent the bank holiday at the funfair.",
        "british-to-american",
        false
      ),
      "I spent the public holiday at the carnival."
    );
    done();
  });

  // Translate I had a bicky then went to the chippy. to American English

  test("Translate I had a bicky then went to the chippy. to American English", (done) => {
    assert.equal(
      translator.translate(
        "I had a bicky then went to the chippy.",
        "british-to-american",
        false
      ),
      "I had a cookie then went to the fish-and-chip shop."
    );
    done();
  });

  // Translate I've just got bits and bobs in my bum bag. to American English

  test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
    assert.equal(
      translator.translate(
        "I've just got bits and bobs in my bum bag.",
        "british-to-american",
        false
      ),
      "I've just got odds and ends in my fanny pack."
    );
    done();
  });

  // Translate The car boot sale at Boxted Airfield was called off. to American English

  test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    assert.equal(
      translator.translate(
        "The car boot sale at Boxted Airfield was called off.",
        "british-to-american",
        false
      ),
      "The swap meet at Boxted Airfield was called off."
    );
    done();
  });

  // Translate Have you met Mrs Kalyani? to American English

  test("Translate Have you met Mrs Kalyani? to American English", (done) => {
    assert.equal(
      translator.translate(
        "Have you met Mrs Kalyani?",
        "british-to-american",
        false
      ),
      "Have you met Mrs. Kalyani?"
    );
    done();
  });

  // Translate Prof Joyner of King's College, London. to American English

  test("Translate Prof Joyner of King's College, London. to American English", (done) => {
    assert.equal(
      translator.translate(
        "Prof Joyner of King's College, London.",
        "british-to-american",
        false
      ),
      "Prof. Joyner of King's College, London."
    );
    done();
  });

  // Translate Tea time is usually around 4 or 4.30. to American English

  test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
    assert.equal(
      translator.translate(
        "Tea time is usually around 4 or 4.30.",
        "british-to-american",
        false
      ),
      "Tea time is usually around 4 or 4:30."
    );
    done();
  });

  // Highlight translation in Mangoes are my favorite fruit.

  test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
    assert.equal(
      translator.translate(
        "Mangoes are my favorite fruit.",
        "american-to-british",
        true
      ),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
    done();
  });

  // Highlight translation in I ate yogurt for breakfast.

  test("Highlight translation in I ate yogurt for breakfast.", (done) => {
    assert.equal(
      translator.translate(
        "I ate yogurt for breakfast.",
        "american-to-british",
        true
      ),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
    done();
  });

  // Highlight translation in We watched the footie match for a while.

  test("Highlight translation in We watched the footie match for a while.", (done) => {
    assert.equal(
      translator.translate(
        "We watched the footie match for a while.",
        "british-to-american",
        true
      ),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
    done();
  });

  // Highlight translation in Paracetamol takes up to an hour to work.

  test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
    assert.equal(
      translator.translate(
        "Paracetamol takes up to an hour to work.",
        "british-to-american",
        true
      ),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
    done();
  });
});
