import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [id]);

   

    return (

        <>
            <div>
                <h1>Nombre:{character?.name}</h1>
            </div>

            <div>
                <p>Estado:{character?.status}</p>
                <p>Especie:{character?.species}</p>
                <p>Genero:{character?.gender}</p>
                <p>Origen:{character?.origin?.name}</p>
                <img src={character?.image} alt={`Imagen de ${character.name}`}/>
            </div>
        </>

    )
}

export default Detail;