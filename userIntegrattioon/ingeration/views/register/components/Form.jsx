import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        // password: '' // Uncomment or remove based on your requirements.
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        console.log(name, value); // Combine logs or remove after testing
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit action
        console.log('Submitting form with:', form);
        // Here you can add actions like sending data to a server
    };

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <input
             style={{height: '30px', marginBottom: '10px', width: '300px'}}
                type="text"
                name="userName"
                placeholder="Nombre"
                value={form.userName} // Control the input with React state
                onChange={handleChange}
            />
            <input
            style={{height: '30px', marginBottom: '10px', width: '300px'}}
                type="email"
                name="email"
                placeholder="Email"
                value={form.email} // Control the input with React state
                onChange={handleChange}
            />
            {/* Uncomment or add input fields as necessary */}
            <button type="submit" style={{height: '25px', backgroundColor: 'green', border: 'none' ,width: '150px', borderRadius:'5px'}}>Submit</button>
        </form>
    );
}

export default Form;
