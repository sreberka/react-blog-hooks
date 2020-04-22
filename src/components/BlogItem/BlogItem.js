import React, {useContext} from 'react';
import './BlogItem.css'
import {BlogContext} from "../../context/BlogContext";

export const BlogItem = (props) => {
    const {removeItem} = useContext(BlogContext)

    return (
        <div className="item" id={props.id}>
            <p className="author">{props.name}</p>
            <p className="author-text">{props.text}</p>
            <button onClick={() => removeItem(props.id)}>x</button>
        </div>
    );
}

