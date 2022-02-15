import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav class="nav-bar">
                <div class="nav-list">
                    <Link class="nav-item" to={'/'}>Competition</Link>
                    <div class="nav-item">
                        Competitors
                    </div>
                    <Link class="nav-item" to={'/leaderboards'}>Leaderboards</Link>
                </div>
            </nav>
            
        </div>
    );
}

export default Nav;