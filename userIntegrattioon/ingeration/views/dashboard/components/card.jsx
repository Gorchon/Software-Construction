/*eslint-disable*/
import { useNavigate } from 'react-router-dom';
import userImg from '../../../src/assets/userImg.svg';

function Card({ user }) {
    console.log("Rendering Card");

    const navigate = useNavigate();

    const handleClick = () => {
        console.log(`Clicked ${user.id}`);
        navigate(`/user/${user.id}`);
    };

    return (
        <div style={{
            width: '250px',  // Adjusted width to fit the image and text
            height: '80px',  // Adjusted height to fit the image and text
            borderRadius: '5px',
            backgroundColor: '#df3078',  // Correct hex value for background color
            display: 'flex',
            flexDirection: 'row',  // Arrange children horizontally
            alignItems: 'center',
            padding: '10px',  // Padding for better spacing
            margin: '5px',  // Margin between cards
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)'  // Optional: Add shadow for better aesthetics
        }} onClick={handleClick}>

            <div style={{ marginRight: '10px' }}>
                <img src={userImg} alt="User" width={50} height={50} />
            </div>
            <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{user.name}</div>
                <div>{user.email}</div>
            </div>
        </div>
    );
}

export default Card;
