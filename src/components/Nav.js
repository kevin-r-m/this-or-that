import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss'
import collapseIcon from '../images/collapse-arrow.png'
import expandIcon from '../images/expand-arrow.png'

function Nav(props) {

    function handleClick(e){
        e.preventDefault();
        const toggleRef = props.elementRef.current
        if(props.active === ' hide'){
            toggleRef.src = collapseIcon
            props.setPosition('');
            props.setActive('');
            return
        }
        props.setActive(' hide');
        toggleRef.src = expandIcon
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
                    <a href="#" className="nav-toggle" onClick={handleClick}><img ref={props.elementRef} src={collapseIcon} alt="collapse" /></a>
                </div>
            </nav>
            
        </div>
    );
}

export default Nav;