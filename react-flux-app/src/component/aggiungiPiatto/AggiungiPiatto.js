import React from 'react';
import './AggiungiPiatto.css';
import Form from 'react-bootstrap/Form';

class AggiungiPiatto extends React.Component {
    state = {

    }

    /*     handleChange = (event) => {
            const value = event.target.value;
            const id = event.target.id;
            this.setState({
                [id]: value,
            });
            console.log(this.state)
        } */

    /*     handleSubmit = (event) => {
            alert('Piatto inserito: ' + this.state.nomePiatto);
            event.preventDefault();
        } */

    render() {
        return (
            <div>

                <h2>Aggiungi un nuovo piatto</h2>

                <form onSubmit={this.props.handleSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select id="categoria" value={this.props.categoria} onChange={this.props.handleChange}>
                            <option value=""></option>
                            <option value="ANTIPASTI">Antipasti</option>
                            <option value="PRIMI">Primi</option>
                            <option value="SECONDI">Secondi</option>
                            <option value="CONTORNI">Contorni</option>
                            <option value="DOLCI">Dolci</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Nome del piatto</Form.Label>
                        <Form.Control type="text" id="nomePiatto" value={this.props.nomePiatto} onChange={this.props.handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Ingredienti</Form.Label>
                        <Form.Control as="textarea" id="ingredienti" value={this.props.ingredienti} onChange={this.props.handleChange} />
                    </Form.Group>

                    <input type="submit" value="Submit" disabled={this.props.categoria === "" || this.props.nomePiatto === "" || this.props.ingredienti === ""} className="btn btn-group-lg btn-primary btn-lg bottoneSubmit" />
                </form>

            </div>
        );
    }
}

export default AggiungiPiatto;
