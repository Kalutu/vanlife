import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    to="."
                    end
                    style={({isActive})=>isActive?styles:null}
                >
                        Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    style={({isActive})=>isActive?styles:null}
                >
                        Income
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive})=>isActive?styles:null}
                >
                        Vans
                </NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive})=>isActive?styles:null}
                >
                        Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}