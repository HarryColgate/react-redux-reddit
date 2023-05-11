import React from 'react';
import './header.css';
import { setFilter } from '../feed/feedSlice'
import { useDispatch } from 'react-redux';

export default function Header() {

    const dispatch = useDispatch();

    return(
        <div className='header'>
            <div className='header-content'>
                <ul>
                    {/*uses the set filter from feedSlice to change the current filter*/}
                    <li><a onClick={(e) => dispatch(setFilter("Hot"))}>Hot</a></li>
                    <li><a onClick={(e) => dispatch(setFilter("Recent"))}>Recent</a></li>
                    <li><a onClick={(e) => dispatch(setFilter("Top"))}>Top</a></li>
                </ul>
            </div>
        </div>
    )
}