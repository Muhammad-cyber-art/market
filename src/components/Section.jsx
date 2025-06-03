import './css-files/section.css';
import { FaSearch } from 'react-icons/fa';
function Section(){
     return(
          <>
               <div className='sec-part'>
                    <h1>Pick the Item which one you love</h1>
                    <FaSearch className='lupa'/>
                    <input placeholder='Serch somthing' type="text"/>
               </div>
          </>
     )
}



export default Section;