import Form from '../register/components/Form';
import '../../views/dashboard/Dashboard.css'; // Ensure you import the CSS file

function Register() {
    return (
        <div className="register-container">
            <div className="form-container">
                <h1 className="register-title">Please Register</h1>  {/* Add this line */}
                <Form />
            </div>
        </div>
    );
}

export default Register;