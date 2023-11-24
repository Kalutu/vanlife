import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive})=>isActive?styles:null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive})=>isActive?styles:null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive})=>isActive?styles:null}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}