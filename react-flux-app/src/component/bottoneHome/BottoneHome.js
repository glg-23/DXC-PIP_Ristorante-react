import './BottoneHome.css';
import Button from 'react-bootstrap/Button';

function BottoneHome() {
    return (
        <div >
            <Button
                size="lg"
                className='button'
                href='/'>
                Torna alla Home</Button>
        </div>
    );
};

export default BottoneHome;
