import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        address: '',
        phone: '',
        age: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        if (res.ok) {
            alert('User created successfully');
            setForm({
                userName: '',
                email: '',
                address: '',
                phone: '',
                age: '',
                gender: '',
            });
            window.location.pathname = '/'; // Navigate to the home page
        } else {
            const errorText = await res.text();
            alert(`Failed to create user: ${errorText}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="userName"
                placeholder="Nombre"
                value={form.userName}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
            />
            <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default Form;
