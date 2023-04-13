import Logowithbackground from '../../layout/Logowithbackground.jsx';
import Registration from './Registration.jsx'

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