import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Card from './Card'


function TopHeadlines() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  let pageSize = 6;

  useEffect(() => {
    setIsLoading(true);
    const categoryParam = params.category ? `&category=${params.category}` : ""; // Handle empty category
    fetch(`http://localhost:8000/top-headlines?language=en${categoryParam}&page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data'); // Throw error for unsuccessful responses
        }
        return response.clone().json();
      })
      .then((json) => {
        setTotalResults(json.data.totalResults);
        setData(json.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Display an error message
        setIsLoading(false);
      });
  }, [page, params.category]);

  return (
    <>
       <div className='gap-10 cards grid lg:place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 lg:gap-14 md:px-16'>
        {!isLoading ? (
          data.length > 0 ? (
            data.map((element, index) => (
              <Card
                key={index}
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                publishedAt={element.publishedAt}
                url={element.url}
                author={element.author}
                source={element.source.name}
              />
            ))
          ) : (
            <p>No articles found for this category or criteria.</p>
          )
        ) : (
          <div className='font-bold text-white text-7xl text-center'>"Searching For News"</div>
        )}
      </div>
      {!isLoading && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button disabled={page <= 1} className='pagination-btn' onClick={() => handlePrev()}>Prev</button>
          <p className='font-semibold opacity-80'>{page} of {Math.ceil(totalResults / 15)}</p>
          <button className='pagination-btn' disabled={page >= Math.ceil(totalResults / 15)} onClick={() => handleNext()}>Next</button>
        </div>
      )}
    </>
  );
}

export default TopHeadlines;
