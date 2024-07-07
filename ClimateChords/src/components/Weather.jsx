/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import dateFormat from 'dateformat'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import humidity from '../assets/icons/humidity.png'
import rain from '../assets/icons/rain.png'
import drizzle from '../assets/icons/drizzle.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/wind.png'
import location from '../assets/icons/location.svg'
import '../index.css'


export const Weather = (prop) => {
    const [image,setImage]=useState(null);
useEffect(()=>{
    let temp=prop.value.icon;
   if(temp=='01n')setImage(sun);
   else if(temp=='02n')setImage(drizzle)
   else if(temp=='03n'|| temp=='04n')setImage(cloud);
   else if(temp=='09n' || temp=='10n')setImage(rain);
   else if(temp=='11n')setImage(storm);
   else if(temp=='13n')setImage(snow);
   else if(temp=='50n')setImage(humidity);
   else setImage(wind);
},[prop.value.icon]);
    
const setDate=()=>{
   const now = new Date();
   return dateFormat(now, "dddd, mmmm dS, yyyy");
}
const setTime=()=>{
   const now=new Date();
   return dateFormat(now,"h:MM:ss TT");
}
 return (
    <div className='m-auto w-[22rem] min-w-[22rem] h-fit glassCard p-4 mt-6'>
      <div className='flex flex-wrap justify-center'>
       <div className='m-4'><img src={image} className="h-32 w-auto" alt="weather_icon" /></div>
        <p className='font-bold text-4xl flex justify-center items-center' >{prop.value.temp} &deg;C</p>
      </div>
      <div className='flex gap-3 justify-center'>
        <img src={location}/>
        <div className='font-bold text-center text-2xl mb-2'>
        {prop.value.place}
      </div>
      </div>
     
       <div className='text-xl text-center'>{setDate()}</div>
       <div className='text-xl text-center'>{setTime()}</div>
      <div className='w-full flex justify-between items-center mt-4 gap-4 mb-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{prop.value.ws} m/s</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{prop.value.humidity} %</p></p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {prop.value.conditions}
      </div>
    </div>
  )
}
