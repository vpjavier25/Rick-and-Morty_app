import { useState } from "react";

export default function SearchBar(props) {
   
   const [character, setCharacter] = useState({})

   const handlerOnchange = (event) => {
      setCharacter({
         name: event.target.value
      })
      
   }
   return (
      <div>
         <input type='search' onChange={handlerOnchange}/>
         <button onClick = {() => props.onSearch(character.name)} >Agregar</button> 
      </div>
   );
}
