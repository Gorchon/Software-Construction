import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flor from '../../src/assets/flor.svg';
import PrevDescription from './components/prevDescription'; 
import { CardInfo } from "./components/CardInfo";

const User = () => {
    const { id } = useParams(); // Destructure the id from useParams
    const [descriptions, setDescriptions] = useState([]);
    const [users, setUsers] = useState([]); // Add state for users

    const fetchDescription = async () => {
        console.log("ID from users", id);
        console.log("Fetching Description");
        const response = await fetch(`http://localhost:3000/descriptions/${id}`); // Correct URL concatenation
        const data = await response.json();
        setDescriptions(data);
        console.log(data);
        return data;
    };

    // Add state for description
    const [form, setForm] = useState({
        description: "",
        prescription: "",
    });

    useEffect(() => {
        console.log("Fetching Description");
        fetchUserById();
        fetchDescription();
    }, [id]); // Include id as a dependency to re-fetch when id changes

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const fetchUserById = async () => {
        const response = await fetch(`http://localhost:3000/users/${id}`); // Correct URL concatenation
        const data = await response.json();
        setUsers(data); // Update users state
        console.log(data);
    };

    const handleGenerateHelp = async () => {
        const response = await fetch(`http://localhost:3000/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: form.description }), // Include the prompt from the form
        });
        const data = await response.json();
        console.log(data);
    }

    const handleSubmitUpdate = async () => {
        const response = await fetch(`http://localhost:3000/descriptions/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form), // Include the form data
        });

        if (response.ok) {
            alert('Description and Prescription updated successfully');
            fetchDescription(); // Refresh the descriptions
        } else {
            const errorText = await response.text();
            alert(`Failed to update: ${errorText}`);
        }
    }

    return (
        <div>
            <div>User</div>
            <CardInfo user={users} />
            <div>
                <img src={flor} alt="user" style={{ width: '100px', height: '100px' }} />
            </div>
            <div>
                <p>Description</p>
                <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={handleInputChange} 
                />
                <p>Prescription</p>
                <textarea 
                    name="prescription" 
                    value={form.prescription} 
                    onChange={handleInputChange} 
                />
                <div>
                    <button 
                        style={{ backgroundColor: '#df3078', color: '#fff', padding: '10px', borderRadius: '5px' }}
                        onClick={handleSubmitUpdate} // Add onClick to handleSubmitUpdate
                    >
                        <p>Guardar</p>
                    </button>
                </div>
                <div>
                    <button 
                        style={{ backgroundColor: '#df3078', color: '#fff', padding: '10px', borderRadius: '5px' }} 
                        onClick={handleGenerateHelp} // Add onClick to handleGenerateHelp
                    >
                        <p>Generar Ejercicios</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;
