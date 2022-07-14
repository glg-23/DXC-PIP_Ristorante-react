import './HomePage.css';
import CardHome from './cardHome/CardHome';
import CardHomePage from '../cardHomePage/CardHomePage';

function HomePage() {
    return (
        <div>
            <h1>Benvenuto</h1>

            <div className='row'>
                <CardHomePage
                    titolo='Ricette'
                    testo="Clicca qui per visualizzare l'elenco delle ricette"
                    collegamento='/ricette'
                    colore='blue'>
                    </CardHomePage>

                <CardHomePage
                    titolo='Informazioni'
                    testo="Clicca qui per avere maggiori informazioni"
                    collegamento='/informazioni'

                    colore='yellow'>
                    </CardHomePage>

                <CardHomePage
                    titolo='#######'
                    testo=""
                    collegamento='/'
                    colore='green'>
                    </CardHomePage>
            </div>
        </div >
    );
}

export default HomePage;
