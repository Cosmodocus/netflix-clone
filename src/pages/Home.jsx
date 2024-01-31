import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
    const apiKey = '1a609b1556bb9c31b859f2b28f81bbc9';
    const requestPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const requestTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    const requestTrending = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;
    const requestHorror = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`;
    const requestUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

  return (
    <>
        <Main />
        <Row rowId='1' title='Up Coming' fetchURL = {requestUpcoming}/>
        <Row rowId='2' title='Popular' fetchURL = {requestPopular}/>
        <Row rowId='3' title='Trending' fetchURL = {requestTrending}/>
        <Row rowId='4' title='Top Rated' fetchURL = {requestTopRated}/>
        <Row rowId='5' title='Horror' fetchURL = {requestHorror}/>
    </>
  )
}

export default Home