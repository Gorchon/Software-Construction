/*eslint-disable*/
import { useNavigate } from 'react-router-dom';
import userImg from '../../../src/assets/userImg.svg';

function Card({ user }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/user/${user.id}`);
    };

    return (
        <div
            style={{
                width: '250px', // Adjusted width to fit the image and text
                height: '80px', // Adjusted height to fit the image and text
                borderRadius: '5px',
                backgroundColor: '#2B2645', // Updated background color
                display: 'flex',
                flexDirection: 'row', // Arrange children horizontally
                alignItems: 'center',
                padding: '10px', // Padding for better spacing
                margin: '5px', // Margin between cards
                boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', // Optional: Add shadow for better aesthetics
                cursor: 'pointer', // Change cursor on hover
                transition: 'transform 0.2s, box-shadow 0.2s', // Add animations
                color: '#b5b2b1', // Text color to gray
            }}
            onClick={handleClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0,0,0,0.1)';
            }}
        >
            <div style={{
                marginRight: '10px',
                backgroundColor: '#b5b2b1', // Background color of image to gray
                borderRadius: '50%',
                padding: '3px', // Padding around the image for better spacing
            }}>
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
