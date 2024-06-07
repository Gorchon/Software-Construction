import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrevDescription from './components/prevDescription'; 
import { CardInfo } from "./components/CardInfo";
import '../../views/dashboard/Dashboard.css'; // Import the CSS file

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
        console.log("this is the data", data);
        return data;
    };

    // Add state for description and prescription
    const [form, setForm] = useState({
        description: "",
        prescription: "",
        question: "",
        answer: ""
    });
    console.log("Form", form);

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
        const response = await fetch(`http://localhost:3000/chat/gemini`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: form.description }), // Include the prompt from the form
        });
        const data = await response.json();
        console.log(data);
        setForm({ ...form, prescription: data.response });
    }

    const handleSubmitUpdate = async () => {
        const response = await fetch(`http://localhost:3000/descriptions/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: form.description,
                prescription: form.prescription,
            }), // Include the form data
        });

        if (response.ok) {
            alert('Description and Prescription updated successfully');
            fetchDescription(); // Refresh the descriptions
        } else {
            const errorText = await response.text();
            alert(`Failed to update: ${errorText}`);
        }
    }

    const handleGenerateRAG = async () => {
        // Add logic to generate RAG question
    }

    return (
        <div className="dashboard"> {/* Apply the same class as the dashboard */}
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', alignItems: 'flex-start' }}>
                <PrevDescription descriptions={descriptions} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div style={{ flex: '1', marginRight: '20px', paddingRight:"85px", paddingTop:"40px"}}>
                        <CardInfo user={users} />
                    </div>
                    <div style={{ flex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
                        <p>This is the matter: </p>
                        <textarea 
                            name="description" 
                            value={form.description} 
                            onChange={handleInputChange} 
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                height: '100px',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginBottom: '10px',
                                overflow: 'auto', // Ensure text area is scrollable
                                resize: 'vertical' // Allow vertical resizing
                            }}
                        />
                        <p>Prescription of your gymbro</p>
                        <textarea 
                            name="prescription" 
                            value={form.prescription} 
                            onChange={handleInputChange} 
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                height: '300px',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginBottom: '10px',
                                overflow: 'auto', // Ensure text area is scrollable
                                resize: 'vertical' // Allow vertical resizing
                            }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px'}}>
                            <button 
                                style={{
                                    height: '50px',
                                    width: '45%',
                                    backgroundColor: '#7749DE',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                    marginBottom: '10px',
                                }}
                                onClick={handleSubmitUpdate}
                            >
                                Save
                            </button>
                            <button 
                                style={{
                                    height: '50px',
                                    width: '45%',
                                    backgroundColor: '#7749DE',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                }}
                                onClick={handleGenerateHelp}
                            >
                                Embrace the Insanity
                            </button>
                        </div>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingTop: "55px", paddingLeft:"80px"}}>
                        <textarea 
                            name="question" 
                            value={form.question} 
                            onChange={handleInputChange} 
                            placeholder="RAG Question"
                            style={{
                                width: '300px',
                                height: '150px',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginBottom: '10px',
                                overflow: 'auto', // Ensure text area is scrollable
                                resize: 'none' // Disable resizing
                            }}
                        />
                        <textarea 
                            name="answer" 
                            value={form.answer} 
                            onChange={handleInputChange} 
                            placeholder="RAG Answer"
                            style={{
                                width: '300px',
                                height: '150px',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginBottom: '10px',
                                overflow: 'auto', // Ensure text area is scrollable
                                resize: 'none' // Disable resizing
                            }}
                        />
                        <button 
                            style={{
                                height: '50px',
                                width: '300px',
                                backgroundColor: '#7749DE',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                borderRadius: '5px',
                                marginBottom: '10px',
                            }}
                            onClick={handleGenerateRAG}
                        >
                            Generate RAG Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
