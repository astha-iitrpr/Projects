import { useState } from 'react'
import './App.css'
import {UC,LC,SM,NM} from './assets/Pass_gen.jsx'

function App() {
  const [text, setText] = useState("");
  const [passLen,setLength]=useState(0);
  const [upper,setUpper]=useState(false);
  const [lower,setLower]=useState(false);
  const [number,setNumber]=useState(false);
  const [symbol,setSymbol]=useState(false);

const handelCopy=()=>{
   navigator.clipboard.writeText(text);
}

const handelClick=()=>{
let charset="";
 if(lower || upper || symbol || number){
   if(lower) charset+=LC;
   if(upper) charset+=UC;
   if(symbol) charset+=SM;
   if(number) charset+=NM;
  
  let len=charset.length;
  let pass="";
  if(passLen==0) alert("Select Password length...");
  
  for(let i=0;i<passLen;i++){
    let idx=Math.floor(Math.random()*len);
     pass+=charset[idx];
  }
  setText(pass);
 }
 else{
  alert("Select one Checkbox!...");
 }
}

  return (
    <>
     <div className="box bg-blue-900 w-96 m-auto mt-[12vh] py-7">
      <h1 className='text-white text-3xl font-semibold font-serif text-center'>Password Generator</h1>

 <div className="flex">
      <div className="w-72 bg-black text-white my-8 m-3 overflow-x-scroll">
           <p className='m-1.5 text-xl'>{text}</p>
      </div>
    <button onClick={handelCopy} className='w-14 h-10 my-8 bg-white'>{(text=="")?'':'Copy'}</button>
 </div>
        <div className="grid grid-cols-3 text-white m-5 gap-x-20 p-4 gap-y-2">
          
           <div className='col-span-2'>Password length</div>
           <input onChange={(e)=>{setLength(e.target.value)}} type="number" className='w-16 place-items-center text-black rounded-md'/>
           
           <div className='col-span-2'>Include uppercase letters</div>
           <input onClick={()=>setUpper(!upper)} type="checkbox" className='size-5'/>

           <div className='col-span-2'>Include lowercase letters</div>
           <input onClick={()=>setLower(!lower)} type="checkbox" className='size-5'/>

           <div className='col-span-2'>Include numbers</div>
           <input onClick={()=>setNumber(!number)} type="checkbox" className='size-5'/>

           <div className='col-span-2'>Include symbols</div>
           <input onClick={()=>setSymbol(!symbol)} type="checkbox" className='size-5'/>
        </div>
        
        <button onClick={handelClick} className='bg-blue-200 p-2 text-xl flex m-auto '>
          Generate Password
        </button>
    
    </div>
    </>
  )
}

export default App
