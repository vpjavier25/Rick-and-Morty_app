import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {characters.map((character) =>{
         return (
            <Card character = {character}
            onClose = {props.onClose}/>
         )
      })}
   </div>
   )
}
