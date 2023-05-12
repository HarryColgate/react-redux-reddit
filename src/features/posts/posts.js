import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './posts.css'
import { fetchFeed } from "../feed/feedSlice";
import Loading from "../loading/loading";
import Failed from "../failed/failed";

export default function Posts() {

    const dispatch = useDispatch();
    const feed = useSelector((state) => state.feed);
    const { selectedSubreddit, filter, isLoading, error } = feed;


    useEffect(() => {
        dispatch(fetchFeed({selectedSubreddit, filter}))
    }, [selectedSubreddit, filter])


    if(isLoading) {
        return(
            <Loading />
        )
    } 
    if (error) {
        return(
            <Failed />
        )
    }
    else {
        return(
            <div className="posts">
                <h1>r/{selectedSubreddit}</h1>
                {feed.feed.map(post => (
                    <div className="post">
                        <div className="votes">
                        </div>
                        <div className="media">
                        </div>
                        <div className="content">
                            <h2>{post.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}