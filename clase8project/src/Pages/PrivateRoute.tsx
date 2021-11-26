import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PageLocation from './PageLocation';


const PrivateRoute = ({ component: Component, ...rest }: any) => {
    
    return (
        <Route {...rest} />
    )
}

export default PrivateRoute
