import React, { useEffect } from 'react'
import { useState } from 'react';
import search from '../assets/icons/search.svg'
import { Weather } from './Weather';
import { getweather } from './ApiData';
import BgLayouts from './BgLayouts';
import ApiMusic from './ApiMusic';



const Header = () => {
    const [input, setInput] = useState("");
    const [data,setData]=useState({});
    const [song,setSong]=useState("");

  const submitCity = async() => {
     const d=await getweather(input)
    //console.log(d);
     setData({
        temp:d.main.temp,
        humidity:d.main.humidity,
        ws:d.wind.speed,
        place:input,
        conditions:d.weather[0].description,
        icon:d.weather[0].icon,
     })
    //  console.log(data);
   }
   const arr=['rain','few','cloud','drizzle','clear','fog','storm','mist','haze'];
   const music=['baarish,rain,Darshan','soul mix,lofi,mashup,baadal','bollywood,trend,mausam','monsoon,travel,paani','high garmi,Bollywood,paani','pop-chill,bollywood,lofi,cosy','storm,thunder,vibrant,','love,trends,romance,bollywood','bollywood,soul mix'];

   useEffect(()=>{
     if(data.conditions){
      let cdns=data.conditions;
      for(var i=0;i<9;i++){
        if(cdns.toLowerCase().includes(arr[i])){
         setSong(music[i]);
         break;
        }
     }
     if(song=="") setSong("Bollywood,lofi,new Release");
    }
   },[data.temp])
  return (
    <>
      {data.temp && <BgLayouts value={data}/>}
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl p-2'>ClimateChords</h1>
        <div className='w-[15rem] overflow-hidden shadow-xl rounded flex items-center p-2 gap-2 mr-3'>
          <img src={search} alt="search" onClick={submitCity}  className='w-[1.5rem] h-[1.5rem]' />
          <input type="text" placeholder='Search city' className='bg-transparent focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <div className='flex flex-wrap'>
      {data.temp && <Weather value={data}/>}
      {data.temp && <ApiMusic value={song} value2={data.place}/>}
      </div>
    </>
  )
}

export default Header
