import { ADD_CHARACTER, DELETE_CHARACTER } from "./Actions";

const initialState = {
    myFavorites: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let newCharacters = [...state.myFavorites]
            newCharacters.push(action.payload) 
            return {
                ...state, myFavorites:newCharacters
            }
        case DELETE_CHARACTER:
            let nowCharacters =  [...state.myFavorites].filter((character)=> character.id !== action.payload)
      
            return{
                ...state,
                myFavorites: nowCharacters
            }
        default:
            return {
                ...state
            }

    }
}