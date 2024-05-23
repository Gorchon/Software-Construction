import Form from '../register/components/Form'
import form from '../../src/assets/form.svg'
function Register() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{marginRight: '20px'}}>
               
                <img src={form} alt="formImage" />

            </div>
            <div style={{width: '50%'}}>
            <Form />
            </div>
        </div>
    )
}

export default Register