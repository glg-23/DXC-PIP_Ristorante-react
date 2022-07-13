import './CardMenu.css';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const propTypes = {
    key: PropTypes.string,
    color: PropTypes.string,
    titolo: PropTypes.string,
    testo: PropTypes.string,

}

function CardMenu(props) {
    console.log(props)
    return (
        <div>
            <Card
                bg={props.colore}
                key={props.key}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>
                    {props.titolo}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.testo}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}

export default CardMenu;
