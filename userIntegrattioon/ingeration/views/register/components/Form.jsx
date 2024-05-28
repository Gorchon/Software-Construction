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
        console.log(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            setForm({
                userName: '',
                email: '',
                address: '',
                phone: '',
                age: '',
                gender: '',
            });
        } else {
            alert('Failed to create user');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                style={{ height: '30px', marginBottom: '10px', width: '300px' }}
                type="text"
                name="userName"
                placeholder="Nombre"
                value={form.userName}
                onChange={handleChange}
            />
            <input
                style={{ height: '30px', marginBottom: '10px', width: '300px' }}
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <input
                style={{ height: '30px', marginBottom: '10px', width: '300px' }}
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
            />
            <input
                style={{ height: '30px', marginBottom: '10px', width: '300px' }}
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
            />
            <input
                style={{ height: '30px', marginBottom: '10px', width: '300px' }}
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
            />
            <select
                style={{ height: '30px', marginBottom: '10px', width: '300px' }}
                name="gender"
                value={form.gender}
                onChange={handleChange}
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button type="submit" style={{ height: '25px', backgroundColor: 'green', border: 'none', width: '150px', borderRadius: '5px' }}>
                Submit
            </button>
        </form>
    );
}

export default Form;
