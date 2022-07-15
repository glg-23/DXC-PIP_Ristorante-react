import './NoPage.css';
import Bottone from '../bottone/Bottone';

function NoPage() {
    return (
        <div>
            <h2>La pagina non è stata trovata</h2>
            
            <Bottone
                testo='Torna alla home'
                linkBottone='/'>
            </Bottone>
        </div>
    );
}

export default NoPage;
