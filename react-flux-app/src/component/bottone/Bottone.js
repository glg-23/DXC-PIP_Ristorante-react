import './Bottone.css';
import Button from 'react-bootstrap/Button';

function Bottone(props) {
    return (
        <div>
            <Button
                size="lg"
                className='bottone'
                href={props.linkBottone}>
                {props.testo}</Button>
        </div>
    );
};

export default Bottone;
