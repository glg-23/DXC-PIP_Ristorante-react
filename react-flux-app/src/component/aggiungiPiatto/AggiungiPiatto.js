import React from 'react';
import './AggiungiPiatto.css';
import Form from 'react-bootstrap/Form';

class AggiungiPiatto extends React.Component {
    state = {
        categoria: "",
        nomePiatto: "",
        ingredienti: ""
    }

    handleChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;
        this.setState({
            [id]: value,
        });
        console.log(this.state)
    }

    handleSubmit = (event) => {
        alert('Piatto inserito: ' + this.state.nomePiatto);
        event.preventDefault();
    }

    render() {
        return (
            <div>

                <h2>Aggiungi un nuovo piatto</h2>

                <form onSubmit={this.handleSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select id="categoria" value={this.state.categoria} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="Antipasti">Antipasti</option>
                            <option value="Primi">Primi</option>
                            <option value="Secondi">Secondi</option>
                            <option value="Contorni">Contorni</option>
                            <option value="Dolci">Dolci</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Nome del piatto</Form.Label>
                        <Form.Control type="text" id="nomePiatto" value={this.state.nomePiatto} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Ingredienti</Form.Label>
                        <Form.Control as="textarea" id="ingredienti" value={this.state.ingredienti} onChange={this.handleChange} />
                    </Form.Group>

                    <input type="submit" value="Submit" disabled={this.state.categoria === "" || this.state.nomePiatto === "" || this.state.ingredienti === ""} className="btn btn-group-lg btn-primary btn-lg bottoneSubmit" />
                </form>

            </div>
        );
    }
}

export default AggiungiPiatto;
