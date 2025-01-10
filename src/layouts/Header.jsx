import {NavLink} from "react-router-dom";

function Header(){
    return (
        <div className="head">
            <p>StreamView</p>
            <nav className="link">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
      

    )
}
export default Header;