import React, {useState, useEffect, useRef} from 'react';
import Nav from './Nav';
import '../styles/header.scss'


function Header(props) {

    return (
        <header className="app-header">
            <Nav/>
        </header>
    );
}

export default Header;