import React from 'react';
import './Bottone.css';
import Button from 'react-bootstrap/Button';

class Bottone extends React.Component {

    render() {
        return (
            <div>
                <Button
                    size="lg"
                    className='bottone'
                    href={this.props.linkBottone}>
                    {this.props.testo}</Button>
            </div>
        );
    };
}

export default Bottone;
