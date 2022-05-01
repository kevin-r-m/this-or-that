import React, {useState, useEffect, useRef} from 'react';
import Nav from './Nav';
import '../styles/header.scss'
import expandIcon from '../images/expand-arrow.png'

function Header(props) {

    const elementRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setActive(' hide');
            const toggleRef = elementRef.current
            props.setPosition(' shift-up')
            toggleRef.src = expandIcon
        }, 3000)
    }, [])

    const [active, setActive] = useState('');

    return (
        <header className={"app-header" + active}>
            <h1 className="page-title">This &#8635; That</h1>
            <Nav active={active}setActive={setActive} elementRef={elementRef} setPosition={props.setPosition}/>
        </header>
    );
}

export default Header;