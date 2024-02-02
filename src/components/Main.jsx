import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";




const Main = () => {

    const apiKey = 'TMDB_API_KEY_HERE';
    const requestPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      
    const[movies, setMovies] = useState([]);  

    const movie = movies[Math.floor(Math.random() * movies.length)]

     useEffect(() => {
       axios.get(requestPopular).then((response)=>{
        setMovies(response.data.results)
       })
     },[])   
    //  console.log(movie)


     const truncateString = (str, num) => {
      if(str?.length > num) {
        return str.slice(0, num) + '...'
      }else {
        return str;
      }
     }



  return (
    <div className='w-full h-[600px] md:h-[800px] text-white '>
        <div className='w-full h-full'>
            <div className="absolute w-full h-[600px] md:h-[800px] bg-gradient-to-r from-black"></div>
            <img className='w-full h-full object-cover' 
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[30%] p-4 md:p-12'>
                 <h1 className='text-3xl md:text-7xl font-bold'>{movie?.title}</h1>
                <div className='flex my-4'>
                    <button className='flex text-xl items-center gap-2 border border-none font-semibold bg-gray-300 hover:bg-gray-400 text-black border-gray-300 py-2 px-4  rounded'>
                      <FaRegCirclePlay size={30} />
                      Play</button>
                    <button className='border flex text-xl items-center gap-2 text-white border-none bg-gray-500 opacity-75 hover:bg-gray-600 py-2 px-4  ml-4 rounded'>
                      <IoMdInformationCircleOutline size={35}/>
                      Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 leading-6'>{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main
