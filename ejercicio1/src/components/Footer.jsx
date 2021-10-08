import React from 'react'

const Footer = () => {

    //aca pongo el javascript que necesito.
    const fecha = new Date().getFullYear()

    return (  
        <h3>Torre de Pizza 1997 - {fecha}</h3>
    );
}
 
export default Footer;