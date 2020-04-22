import React from 'react';
import './Alert.css'

const Alert = ( {text} ) => (
    <div className="alert" role="alert">
        {text}
    </div>
)

export default Alert;