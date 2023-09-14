import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children, path}) =>{

    const user = useSelector(store=> store.userReducer.user)
    
    if(user){
        return <Navigate to={path}/>
    }

    return children
}

export default ProtectedRoute