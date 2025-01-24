import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)


 const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async () => { // data fetch karva mate
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; // news fetch karava mate
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parseData = await data.json();
      props.setProgress(70);
      setArticles(parseData.articles)
      setTotalResults(parseData.totalResults)
      setLoading(false)
      props.setProgress(100);
    }

    useEffect(() => {
       document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
      updateNews();
      // eslint-disable-next-line
    }, [])
    
    // const handlePrevClick = async() =>{
    //   setPage(page - 1)
    //   updateNews();
    // }
    
    // const handleNextClick = async() =>{
    //   setPage(page + 1)
    //   updateNews();
    // }

   const fetchMoreData = async() => {
     
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`; // news fetch karava mate
      setPage(page + 1)
      // this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles))
      setTotalResults(parseData.totalResults)
    }

    return (
      <>
        <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="container">
          <div className="row">
            {articles?.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    
                    {/* <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                    {/* element.title null na hoy to 45 character print karo ane jo null hoy to empty string "" aa print karo*/}
                </div>
            })}
          </div>
        </div>
        </InfiniteScroll>
        
      </>
    )

}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string,
}

export default News
