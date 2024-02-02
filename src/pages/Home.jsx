import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
    const apiKey = 'TMDB_API_KEY_HERE';
    const requestPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const requestTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    const requestTrending = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;
    // const requestHorror = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`;
    const requestUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
    const requestPopularTV = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
    const requestTopTV = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&
    page=1`
    // const requestAiring = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=em-US&page=1`

    // console.log(import.meta.env.MODE); // Output: 'development' or 'production'
    console.log(requestTrending)
  return (
    <>
    
        <Main />
        <Row 
        rowId='1' 
        title='Up Coming' 
        fetchURL = {requestUpcoming}/>
        <Row 
        rowId='2' 
        title='Popular' 
        fetchURL = {requestPopular}/>
        <Row 
        rowId='3' 
        title='Trending' 
        fetchURL = {requestTrending}/>
        <Row 
        rowId='4' 
        title='Top Rated Movies' 
        fetchURL = {requestTopRated}/>
        <Row 
        rowId='5' 
        title='Popular TV Series' 
        fetchURL = {requestPopularTV}/>
        <Row 
        rowId='6' 
        title='Top Rated TV Shows' 
        fetchURL = {requestTopTV}/>
        {/* <Row 
        rowId='7' 
        title='Airing Today' 
        fetchURL = {requestAiring}/> */}
    </>
  )
}

export default Home
