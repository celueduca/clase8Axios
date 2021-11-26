import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <div className="nav">
                <ul>
                    <li><Link to="/character" className="link">Character</Link></li>
                    <li><Link to="/location" className="link">Location</Link></li>
                    <li><Link to="/episode" className="link">Episode</Link></li>
                </ul>
            </div>
        </>
    )
}

export default NavBar
