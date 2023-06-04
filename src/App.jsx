import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuote(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <p className="quote">{quote.text}</p>
        <p className="author">- {quote.author}</p>
      </div>
      <button className="button" onClick={getQuote}>
        Get Quote
      </button>
    </div>
  );
};

export default App;






