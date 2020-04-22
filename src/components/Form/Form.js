import React, {useContext, useState} from 'react';
import './Form.css'
import {BlogContext} from "../../context/BlogContext";
import Alert from '../Alert/Alert'

export const Form = () => {
    const {addItem} = useContext(BlogContext)
    const [alert, showAlert] = useState(false)
    let name = '';
    let text = '';

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(name.value.length > 0 && text.value.length > 0) {
                addItem({name: name.value,text: text.value})
                name.value = '';
                text.value = ''
            }
            else {
                showAlert(true)
            }

        }}>
            { alert && <Alert text={'cannot be empty'} /> }
            <input type="text" placeholder="Name" ref={node => name = node} />
            <textarea placeholder="Text" rows="6" ref={node => text = node} />
            <button type="submit">Add</button>
        </form>
    )
}

