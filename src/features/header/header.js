import React from 'react';
import './header.css'

export default function Header() {
    return(
        <div className='header'>
            <div className='header-content'>
                <ul>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Recent</a></li>
                    <li><a href="">Top</a></li>
                </ul>
            </div>
        </div>
    )
}