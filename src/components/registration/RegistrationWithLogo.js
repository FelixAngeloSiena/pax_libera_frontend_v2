import Logowithbackground from '../../layout/Logowithbackground.js';
import Registration from './Registration.js'

function RegistrationWithLogo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '50%' }}>
                <Registration />
            </div>
            <div style={{ width: '50%' }}>
                <Logowithbackground />
            </div>
        </div>
    );
}

export default RegistrationWithLogo;