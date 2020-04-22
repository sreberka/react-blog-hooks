import React from 'react'
import {BlogItem} from "../BlogItem/BlogItem";

export const ItemsList = ({ items, author }) => {
    return (
        <>
            { items.filter(item => item.name.match(author)).map((item) => {
                return <BlogItem key={item.id} id={item.id} name={item.name} text={item.text}/>
            })}
        </>
    )
}