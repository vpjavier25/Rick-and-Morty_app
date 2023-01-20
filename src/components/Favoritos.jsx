import Card from "./Card"
import { connect } from "react-redux"


function Favorites(props) {
    return (
        <div>
            {
                props.myFavorites.map((character) => {
                    return (
                        <>
                           
                            <h2>{character.name}</h2>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                            <h2>{character.id}</h2>
                            <img src={character.image} alt="" />
                        </>
                    )
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)

