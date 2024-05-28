/*eslint-disable*/
import {useNavigate } from 'react-router-dom';

function Card({user}) {
    console.log("Rendering Card");

    const handleClick = () => {
        console.log(`Clicked ${user.name}`);
        navigate(`/user/${user.id}`); 
    };

    const navigate = useNavigate();



    const Card = ({user})
    return (
        <div style={{
            width: '200px',  // Increased width
            height: '60px',  // Increased height
            border: 'solid black 2px',
            borderRadius: '5px',
            backgroundColor: 'df3078',  // Lighter background
            display: 'flex',
            flexDirection: 'column',  // Stack children vertically
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px',  // Padding for better spacing
            margin: '5px',  // Margin between cards
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)'  // Optional: Add shadow for better aesthetics
        }} onClick={handleClick}>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{user.name}</div>
            <div>{user.email}</div>
        </div>
    );
}

export default Card;