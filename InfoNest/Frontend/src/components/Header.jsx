import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import countries from './country_codes';
import logo from '../assets/InfoNest.png';

const Header = () => {
    const [active,setActive]=useState(false);
    const [countrydd,setcountrydd]=useState(false);
    const [categorydd,setcategorydd]=useState(false);
    const categories=["general","entertainment","business","sports","science","health","technology","politics"];

  return (
    <>
      <nav className='h-14 text-white text-xl w-full flex items-center justify-between mb-10'>
         <div className='mt-8 ml-3'>
           <img src={logo} height="100px" width="100px"/>
         </div>
         <ul className='flex mr-20 md:gap-12 xs:gap:12 lg:basis-3/6 md:basis-4/6 md:justify-end'>
            <li><Link className="no-underline font-semibold" to="/" onClick={()=>setActive(!active)}>All News</Link></li>
              
              {/* Top-Headlines */}
            <li className='dropdown-li'><Link className='no-underline font-semibold flex items-center gap-2' onClick={()=>{setcategorydd(!categorydd);setcountrydd(false)}}>Top-Headlines</Link>
            <ul className={categorydd ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
              {categories.map((el, idx) => {
                return (
                  <li key={idx} onClick={() => { setcategorydd(!categorydd) }}>

                    <Link to={"/top-headlines/" + el} className="flex gap-3 capitalize" type="btn"
                      onClick={() => {
                        setActive(!active)
                      }}>
                      {el}
                    </Link>
                  </li>
                )
              })}
            </ul>
           </li>
         
         {/* Country */}
            <li className="dropdown-li"><Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setcountrydd(!countrydd); setcategorydd(false) }}>Country</Link>
            <ul className={countrydd ? "dropdown p-2 show-dropdown":"dropdown p-2"}>
                {countries.map((el,idx)=>{
                  return(
                  <li key={idx} onClick={()=>{setcountrydd(!countrydd)}}>
                    <Link to ={"/country/" +el.iso}  type="btn" className='flex gap-3' onClick={()=>{setActive(!active)}}>
                    
                   <span>{el.countryName}</span>
                   <div><img src={el.png}/></div> 
                
                    </Link>
                  </li>
                  )
                })}
            </ul>
          </li>
         </ul>
      </nav>
    </>
  )
}
console.log(countries);
export default Header;
