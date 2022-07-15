import './HomePage.css';
import Bottone from '../bottone/Bottone';

function HomePage() {
    return (
        <div>

            <h1>Benvenuto</h1>
            <br />
            <h3>In questo sito puoi visualizzare i piatti nel menù ed inserirne di nuovi</h3>

            <div>
            <Bottone
                testo='Menù del ristorante'
                linkBottone='/menu'>
                    </Bottone>
            <Bottone
                testo='Informazioni'
                linkBottone='/informazioni'>
            </Bottone>            </div>

        </div >
    );
}

export default HomePage;
