import './MenuHome.css';
import CardMenu from './cardMenu/CardMenu';
import PropTypes from 'prop-types';

const propTypes = {
}
function MenuHome() {
    return (
        <div>

            <CardMenu
                key={'card_1'}
                titolo={'ANTIPASTI'}
                testo={'clicca qui per vedere gli antipasti'}
                colore={'primary'}
            ></CardMenu>

            <CardMenu
                key={'card_2'}
                titolo={'PRIMI'}
                testo={'clicca qui per vedere i primi piatti'}
                colore={'success'}
            ></CardMenu>

            <CardMenu
                key={'card_3'}
                titolo={'SECONDI'}
                testo={'clicca qui per vedere secondi piatti'}
                colore={'info'}
            ></CardMenu>
        </div>
    );
}

export default MenuHome;
MenuHome.propTypes = propTypes;
