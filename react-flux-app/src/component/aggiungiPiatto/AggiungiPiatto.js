import './AggiungiPiatto.css';
import Bottone from '../bottone/Bottone';
import Form from 'react-bootstrap/Form';


function AggiungiPiatto() {
    return (
        <div>

            <h2>Aggiungi un nuovo piatto</h2>

            <form>
                <Form.Group className="form-group" controlId="selectCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select>
                        <option></option>
                        <option>Antipasti</option>
                        <option>Primi</option>
                        <option>Secondi</option>
                        <option>Contorni</option>
                        <option>Dolci</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="form-group" controlId="inputNome">
                    <Form.Label>Nome del piatto</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="form-group" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredienti</Form.Label>
                    <Form.Control as="textarea" />
                </Form.Group>
            </form>

            <Bottone
                testo='Aggiungi piatto'
                linkBottone=''>
            </Bottone>

        </div>
    );
}

export default AggiungiPiatto;
