import React, { useState, useEffect } from 'react';
import '../styles/Noticias.css';

const Noticias = ({ category }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = '0514168ba7e6435e948bb964026a0fe2';

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      {loading && <p>Cargando noticias...</p>}
      {error && <p>Error: {error}</p>}
      <ul className='lista noticias-container'>
        {news.map((article, index) => (
          <li key={index} className='noticia'>
            <img src={article.urlToImage} alt={article.title} className='imagen'/>
            <h5>{article.title}</h5>
            <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticias;
