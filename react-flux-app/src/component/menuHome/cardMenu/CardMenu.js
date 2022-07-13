import './CardMenu.css';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const propTypes = {
    key: PropTypes.string,
    colore: PropTypes.string,
    titolo: PropTypes.string,
    testo: PropTypes.string,

}

function CardMenu(props) {
    return (
        <div>
            <Card
                bg={props.colore}
                key={props.key}
                className="m-4"
            >
                <Card.Header className='titoloCard'>
                    {props.titolo}
                </Card.Header>
                <Card.Body>
                    <Card.Text className='testoCard'>
                        {props.testo}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}

export default CardMenu;
