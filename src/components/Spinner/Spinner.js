import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
    render() {
        return (
            <div className="lds-heart">
                <div></div>
            </div>
        );
    }
}


export default (Spinner);
