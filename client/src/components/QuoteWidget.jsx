import { useState, useEffect } from 'react';

function QuoteWidget() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        'https://api.quotable.io/random'
      );

      const data = await response.json();

      setQuote(data.content);
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </>
      )}
    </div>
  );
}

export default QuoteWidget;