import React from 'react';
import './CardRicette.css';

class CardRicette extends React.Component {

    render() {
        return (
            <div className="col-auto content-card">
                <div className="card-big-shadow">
                    <div className="card card-just-text " data-background="color" data-color={this.props.colore} data-radius="none">
                        <div className="content">
                            <h6 className="category">{this.props.categoria}</h6>
                            <h4 className="title">{this.props.titolo}</h4>
                            <p className="description"> INGREDIENTI: {this.props.ingredienti}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardRicette;
