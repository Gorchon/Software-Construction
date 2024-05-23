import { useState } from 'react';
function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        // password: '' // Uncomment or remove based on your requirements.
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        console.log(name, value); // Debugging purpose
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submit action
        console.log('Submitting form with:', form);

        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        if (res.status === 200) {
            alert('User created successfully');
            setForm({ name: '', email: '' }); // Reset form fields
        } else {
            alert('Failed to create user');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <input
                style={{height: '30px', marginBottom: '10px', width: '300px'}}
                type="text"
                name="userName"
                placeholder="Nombre"
                value={form.userName}
                onChange={handleChange}
            />
            <input
                style={{height: '30px', marginBottom: '10px', width: '300px'}}
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <button type="submit" style={{height: '25px', backgroundColor: 'green', border: 'none', width: '150px', borderRadius: '5px'}}>
                Submit
            </button>
        </form>
    );
}

export default Form;