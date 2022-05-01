import React, {useState, useEffect, useRef} from 'react';
import Nav from './Nav';
import '../styles/header.scss'

function Header(props) {

    const elementRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setActive(' hide');
            const toggleRef = elementRef.current
            props.setPosition(' shift-up')
            toggleRef.innerHTML = '+'
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