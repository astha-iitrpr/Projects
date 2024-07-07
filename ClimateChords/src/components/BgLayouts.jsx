import React, { useEffect, useState } from 'react'

//images
import Clear from '../assets/backgrounds/clear.jpg'
import Fog from '../assets/backgrounds/fog.png'
import Cloudy from '../assets/backgrounds/Cloudy.jpg'
import Rainy from '../assets/backgrounds/rainy.avif'
import Snow from '../assets/backgrounds/snowy.webp'
import Stormy from '../assets/backgrounds/strom.avif'
import initial from '../assets/backgrounds/default.avif'
import mist from '../assets/backgrounds/mist.webp'
import few from '../assets/backgrounds/few.jpg'
import Overcast from '../assets/backgrounds/Overcast.webp'
const BgLayouts = (props) => {
  const [image, setImage] = useState({initial})

  useEffect(() => {
    if (props.value.conditions) {
      let imageString = props.value.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      }else if (imageString.toLowerCase().includes('overcast')) {
        setImage(Overcast)
      }
      else if (imageString.toLowerCase().includes('few')) {
        setImage(few)
      } 
      else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy)
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy)
      } else if (imageString.toLowerCase().includes('mist') || imageString.toLowerCase().includes('storm')) {
        setImage(mist)
      }
      else{
        setImage(initial)
      }
    }
  }, [props.value.conditions])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
 }

export default BgLayouts