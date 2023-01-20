import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCharacter, deleteCharacter } from "../Redux/Actions";
import { useState, useEffect } from "react";

function Card(props) {

   console.log (props)

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (!isFav){
         setIsFav(true)
         props.addCharacter(props.character)
      }else{
         setIsFav(false)
         props.deleteCharacter(props.character.id)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.character.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   

   return (
      <>

         <div>
            <button onClick={() => props.onClose(props.character.id)} id={props.character.id}>X</button>
            {
               isFav ?
                  <button onClick={handleFavorite}>❤️</button>
                  :
                  <button onClick={handleFavorite}>🤍</button>
            }
            <Link to={`/detail/${props.character.id}`}>
               <h2>{props.character.name}</h2>
            </Link>
            <h2>{props.character.species}</h2>
            <h2>{props.character.gender}</h2>
            <h2>{props.character.id}</h2>
            <img src={props.character.image} alt="" />
         </div>

      </>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: (character) => dispatch(addCharacter(character)),
      deleteCharacter: (id) => dispatch(deleteCharacter(id))
   }

}

export function mapStateToProps (state) {
   return {
      myFavorites:state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


