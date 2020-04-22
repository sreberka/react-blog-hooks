import React from 'react';
import './DataItem.css';

export const DataItem = ({item}) => {
    return (
        <div className={item.completed ? 'complited' : ''}>
            <span>{item.id}, </span>
            <span>{item.title}, </span>
            <span>{item.completed ? 'Complited' : 'Active'}</span>
        </div>
    )
}