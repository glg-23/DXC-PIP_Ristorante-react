import React from 'react';
import './AggiungiPiatto.css';
import Form from 'react-bootstrap/Form';

class AggiungiPiatto extends React.Component {
    state = {
        piattoInserito: {
            categoria: "",
            nomePiatto: "",
            ingredienti: "",
            colore: ""
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;

        this.setState(prevState => {
            let piattoInserito = Object.assign({}, prevState.piattoInserito);
            piattoInserito[id] = value;
            return { piattoInserito };
        });
    }

    handleSubmit = (event) => {
        let piattoInseritoConColore = this.impostaColore(this.state);

        alert('Piatto inserito: ' + this.state.piattoInserito.nomePiatto);

        this.props.recuperaPiattoInserito(piattoInseritoConColore);

        event.preventDefault();
    }

    impostaColore = (prevState) => {
        let piattoInseritoCopia = Object.assign({}, prevState.piattoInserito);

        switch (piattoInseritoCopia.categoria) {
            case "ANTIPASTI": piattoInseritoCopia.colore = 'blue';
                break;
            case "PRIMI": piattoInseritoCopia.colore = 'yellow';
                break;
            case "SECONDI": piattoInseritoCopia.colore = 'orange';
                break;
            case "CONTORNI": piattoInseritoCopia.colore = 'green';
                break;
            case "DOLCI": piattoInseritoCopia.colore = 'purple';
                break;
        }

        return piattoInseritoCopia;
    }

    render() {
        return (
            <div>
                <h2>Aggiungi un nuovo piatto</h2>

                <form onSubmit={this.handleSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select id="categoria" value={this.state.piattoInserito.categoria} onChange={this.handleChange}>
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
                        <Form.Control type="text" id="nomePiatto" value={this.state.piattoInserito.nomePiatto} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Ingredienti</Form.Label>
                        <Form.Control as="textarea" id="ingredienti" value={this.state.piattoInserito.ingredienti} onChange={this.handleChange} />
                    </Form.Group>

                    <input type="submit" value="Submit" disabled={this.state.piattoInserito.categoria === "" || this.state.piattoInserito.nomePiatto === "" || this.state.piattoInserito.ingredienti === ""} className="btn btn-group-lg btn-primary btn-lg bottoneSubmit" />
                </form>

            </div>
        );
    }
}

export default AggiungiPiatto;
