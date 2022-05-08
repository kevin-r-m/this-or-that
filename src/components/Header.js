import React, {useState, useEffect, useRef} from 'react';
import Nav from './Nav';
import '../styles/header.scss'
import expandIcon from '../images/expand-arrow.png'

function Header(props) {

    const elementRef = useRef();

    useEffect(() => {
        const mobile = 767;
        const toggleRef = elementRef.current
        if(window.screen.width < mobile){
            setTimeout(() => {
                setActive(' hide');
                props.setPosition(' shift-up')
                toggleRef.src = expandIcon
            }, 2500)
            return
        }
        toggleRef.style.display="none"
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