import { FaBars } from "react-icons/fa";

import "./../styles/NavigationBar.css"

export default function NavigationBar(props) {

    return (
        <>
           <nav className="nav">
            <a className="nav-logo" href="/">
                {props.title}
            </a>
            <FaBars className="nav-bars" />

            <div className="nav-menu">
                <a className="nav-link" href="/" activeStyle>
                    Home
                </a>
                <a className="nav-link" href="/about" activeStyle>
                    About
                </a>
                <a className="nav-link" href="/contact" activeStyle>
                    Contact
                </a>
                <a className="nav-link" href="/signin" activeStyle>
                    Sign In
                </a>
                <div className="nav-buthrefn" NavBtn>
                    <div className="nav-buthrefn" href="/sign-up">Sign Up</div>
                </div>
            </div> 
           </nav> 
        </>
    );
}