import './Informazioni.css';
import Bottone from '../bottone/Bottone';

function Informazioni() {
    return (
        <div>
            <div className='contenitoreFirma'>
                <h3> DXC Performance Improvement Plan </h3>
                <br />
                <h4> Corso react - 07/2022 </h4>
                <br />
                <h5> Gianluigi D'Antimi </h5>
            </div>

            <Bottone
                testo='Torna alla home'
                linkBottone='/'>
            </Bottone>
        </div>
    );
}

export default Informazioni;
