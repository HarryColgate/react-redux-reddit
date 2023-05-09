import React from 'react';
import { useSelector } from 'react-redux';
import { selectSubreddits, selectMenu } from '../subreddits/subredditsSlice';
import './sidenav.css';

export default function Sidenav() {

    const menu = useSelector(selectMenu);
    const subreddits = useSelector(selectSubreddits);

    return(
        <div className="sidenav">
            <div className='sidenav-logo' >
                <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" />
            </div>
            <div className='sidenav-search' >
                <input type="text" name="search" placeholder="Search" />
                <i className='fas fa-search'></i>
            </div>
            <div className='sidenav-link'>
                <ul>
                    {menu.map(obj => (
                        <li><a href="">{obj.name}</a></li>
                    ))}
                </ul>
                <hr />
                <ul>
                    {subreddits.map(obj => (
                        <li><a href="">{obj.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

