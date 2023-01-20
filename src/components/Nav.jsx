import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <>
            <div>
                <SearchBar onSearch={props.onSearch} />
            </div>

            <div>
                <NavLink to="/about" >
                    <button>About</button>
                </NavLink>

                <NavLink to="/Home">
                    <button>Home</button>
                </NavLink>

                <NavLink to="/favorites">
                    <button>Favorites</button>
                </NavLink>

            </div>
        </>



    )
}

export default Nav;