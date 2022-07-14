import './Informazioni.css';
import BottoneHome from '../bottoneHome/BottoneHome';

function Informazioni() {
    return (
        <div>
            <h2> In questo sito potrai trovare l'elenco delle ricette ed inserirne di nuove</h2>

            <div className='contenitoreFirma'>
                <p> DXC Performance Improvement Plan - Corso react 07/2022 </p>
                <p> Gianluigi D'Antimi</p>
            </div>

            <BottoneHome />
        </div>
    );
}

export default Informazioni;
