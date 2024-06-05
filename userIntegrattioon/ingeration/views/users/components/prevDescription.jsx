/* eslint-disable react/prop-types */
import  { useState } from 'react';

const PrevDescription = ({ descriptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      onClick={toggleOpen} 
      style={{ 
        cursor: 'pointer', 
        padding: '20px', 
        borderRadius: '10px', 
        backgroundColor: 'purple', 
        color: 'white', 
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        margin: '10px 0',
        maxWidth: '400px'
      }}
    >
      <h3 style={{ margin: '0 0 10px 0' }}>Previous Descriptions</h3>
      {isOpen && (
        <div>
          {descriptions?.map((des, idx) => (
            <p key={idx} style={{ margin: '5px 0' }}>{des.description}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrevDescription;
