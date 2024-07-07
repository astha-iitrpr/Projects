import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';


function CntNews() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  const pageSize = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/country/${params.iso}?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
       
          console.error('Failed to fetch data:', response.statusText);
          setIsLoading(false);
          return null; // Prevent setting empty data if request fails
        }
      })
      .then((myJson) => {
        if (myJson) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        }
        setIsLoading(false);
      });
  }, [page, params.iso]);

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
            <p>No news articles found for this criteria.</p>
          )
        ) : (
           <div className='font-bold text-white text-7xl text-center'>"Searching For News"</div>
        )}
      </div>
      {!isLoading && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button
            disabled={page <= 1}
            className="pagination-btn"
            onClick={() => handlePrev()}
          >
            Prev
          </button>
          <p className="font-semibold text-white opacity-80">
            {page} of {Math.ceil(totalResults / 15)}
          </p>
          <button
            disabled={page >= Math.ceil(totalResults / 15)}
            className="pagination-btn"
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default CntNews;
