import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = ({title}:any) => {

    const history = useHistory()

    const _Characters = () => {
        history.push("/Characters");
    }

    const _Locations = () => {
        history.push("/Locations");
    }

    const _Episodes = () => {
        history.push("/Episodes");
    }

    return (
        <div  className="container__header">
            <nav className="header__links">
                <h1>{title + " "}</h1>
                <ul className="nav__links">
                    <li onClick={() => _Characters}><Link to="/Characters">Characters</Link></li>
                    <li onClick={() => _Locations}><Link to="/Locations">Locations</Link></li>
                    <li onClick={() => _Episodes}><Link to="/Episodes">Episodes</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

