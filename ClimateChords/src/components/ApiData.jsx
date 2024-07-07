const apiKey=import.meta.env.VITE_APP_ID;

export const getweather=async(city)=>{
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return await fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
        return json;
    }) 
}