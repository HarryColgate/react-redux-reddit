import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './posts.css'
import { fetchFeed } from "../feed/feedSlice";

export default function Posts() {

    const dispatch = useDispatch();
    const feed = useSelector((state) => state.feed);
    const { selectedSubreddit, filter } = feed;


    useEffect(() => {
        dispatch(fetchFeed({selectedSubreddit, filter}))
    }, [selectedSubreddit, filter])

    return(
        <div className="posts">
            {feed.feed.map(obj => (
                <div className="post">
                    <h1>{obj.title}</h1>
                </div>
            ))}
        </div>
    )
}