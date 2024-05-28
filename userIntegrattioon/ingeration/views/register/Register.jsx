import Form from '../register/components/Form';
import form from '../../src/assets/form.svg';

function Register() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ width: '50%', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0' }}>
                <div style={{ marginRight: '20px' }}>
                    <img src={form} alt="formImage" />
                </div>
                <div style={{ width: '50%' }}>
                    <Form />
                </div>
            </div>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0' }}>
                {/* Additional content for the second half can go here */}
            </div>
        </div>
    );
}

export default Register;
