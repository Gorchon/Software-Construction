import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flor from '../../src/assets/flor.svg';
import PrevDescription from './components/prevDescription';

const User = () => {
    const { id } = useParams(); // destructure the id from useParams
    const [descriptions, setDescriptions] = useState([]);
    
    const fetchDescription = async () => {
        console.log("ID from users", id);
        console.log("Fetching Description");
        const response = await fetch(`http://localhost:3000/descriptions/${id}`); // correct URL concatenation
        const data = await response.json();
        setDescriptions(data);
        console.log(data);
        return data;
    };

    // add state for description
    const [form, setForm] = useState({
        description: "",
        prescription: "",
    });

    useEffect(() => {
        console.log("Fetching Description");
        fetchDescription();
    }, [id]); // include id as a dependency to re-fetch when id changes

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <div>
            <div>User</div>
            <div>
                <img src={flor} alt="user" style={{ width: '100px', height: '100px' }} />
            </div>
            <div>
                <prevDescription descriptions={descriptions} /> {/* Capitalize the component name */}
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
            </div>
        </div>
    );
};

export default User;
