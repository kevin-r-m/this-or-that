import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss'

function Nav(props) {

    function handleClick(e){
        e.preventDefault();
        const toggleRef = props.elementRef.current
        if(props.active === ' hide'){
            toggleRef.innerHTML = '-'
            props.setPosition('');
            props.setActive('');
            return
        }
        props.setActive(' hide');
        toggleRef.innerHTML = '+'
        props.setPosition(' shift-up');



    }

    return (
        <div>
            <nav class="nav-bar">
                <div class="nav-list">
                    <Link class="nav-item" to={'/'}>Competition</Link>
                    <div class="nav-item">
                        Competitors
                    </div>
                    <Link class="nav-item" to={'/leaderboards'}>Leaderboards</Link>
                    <a href="#" className="nav-toggle" ref={props.elementRef} onClick={handleClick}>-</a>
                </div>
            </nav>
            
        </div>
    );
}

export default Nav;