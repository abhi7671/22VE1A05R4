import React, { useState } from "react";
import "./app.css";

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
];

function App() {
  const [index, setIndex] = useState(0);

  function getRandomIndex() {
    let rand;
    do {
      rand = Math.floor(Math.random() * quotes.length);
    } while (rand === index);
    return rand;
  }

  function handleNewQuote() {
    setIndex(getRandomIndex());
  }

  const { text, author } = quotes[index];

  return (
    <div className="app">
      <p className="quote-text">“{text}”</p>
      <p className="quote-author">- {author}</p>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
}

export default App;