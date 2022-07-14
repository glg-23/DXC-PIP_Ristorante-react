import './HomePage.css';
import CardHome from './cardHome/CardHome';

function HomePage() {
    return (
        <div>
            <h1>Benvenuto</h1>

            <CardHome
                key={'card_1'}
                titolo={'Ricette'}
                testo={'clicca qui per vedere tutte le ricette'}
                colore={'primary'}
            ></CardHome>

            <CardHome
                key={'card_2'}
                titolo={'Aggiungi nuova ricetta'}
                testo={'clicca qui per aggiungere nuove ricette'}
                colore={'success'}
            ></CardHome>

        </div>
    );
}

export default HomePage;
