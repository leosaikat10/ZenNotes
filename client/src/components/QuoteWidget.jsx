import { useState, useEffect } from 'react';
import "../styles/QuoteWidget.css";

function QuoteWidget() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);

    try {
      const response = await fetch(
  "https://dummyjson.com/quotes/random"
);
      const data = await response.json();

     setQuote(data.quote);
     setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);

      setQuote('Failed to fetch quote. Please try again.');
      setAuthor('');
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

return (
  <div className="quote-widget">
  <div className="quote-header">
    <span className="quote-icon">❝</span>

    <button
      className="refresh-btn"
      onClick={fetchQuote}
    >
      ↻
    </button>
  </div>

  {loading ? (
    <p className="loading">
      Loading...
    </p>
  ) : (
    <>
      <p className="quote-text">
        {quote}
      </p>

      <p className="quote-author">
        — {author}
      </p>
    </>
  )}
  </div>
  );
}

export default QuoteWidget;