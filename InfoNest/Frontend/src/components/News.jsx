import { React, useState, useEffect } from 'react'
import Card from './Card'

function News() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handlePrev() {
    setPage(page - 1)
  }
  function handleNext() {
    setPage(page + 1)
  }
  let pageSize = 12;
  useEffect(() => {
    fetch(`http://localhost:8000/allNews?page=${page}&pageSize=${pageSize}`)
      .then(response => {
       
        if (response.ok) {
         
          setIsLoading(true)
          return response.clone().json();
        }
      })
      .then(myJson => {
        
        setTotalResults(myJson.data.totalResults)
        setData(myJson.data.articles)
      })
    setIsLoading(false);
  }, [page])

  return (
    <>
      <div className='gap-10 cards grid lg:place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 lg:gap-14 md:px-16'>
        {isLoading ? data.map((element, index) => {
          return <Card
            title={element.title} description={element.description} imgUrl={element.urlToImage}
            publishedAt={element.publishedAt} url={element.url} author={element.author}
            source={element.source.name} key={index}
          />
        }) :  <div className='font-bold text-white text-7xl text-center'>"Searching For News"</div>}

      </div>
      {isLoading && <div className="pagination flex justify-center gap-14 my-10 items-center">
        <button disabled={page <= 1} className='pagination-btn text-center' onClick={() => handlePrev()}>&larr; Prev</button>
        <p className=' text-white font-semibold opacity-80'>{page} of {Math.ceil(totalResults / 15)}</p>
        <button className='pagination-btn text-center' disabled={page > Math.ceil(totalResults / 15)} onClick={() => handleNext()}>Next &rarr;</button>
      </div>}
    </>
  )
}

export default News
