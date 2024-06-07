/* eslint-disable react/prop-types */
import { useState } from 'react';

const PrevDescription = ({ descriptions }) => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleOpen = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        padding: '10px 0', 
        margin: '10px 0'
      }}
    >
      {descriptions?.map((des, idx) => (
        <div 
          key={idx} 
          onClick={() => toggleOpen(idx)}
          style={{ 
            flex: '0 0 auto', 
            margin: '10px', 
            padding: '10px', 
            backgroundColor: '#121430', 
            borderRadius: '10px', 
            minWidth: '300px',
            maxWidth: '300px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            color: 'white',
            cursor: 'pointer',
            transition: 'max-height 0.3s ease-in-out', // Animation for opening/closing
            maxHeight: '500px', // Set a fixed max height
            overflow: 'hidden', // Overflow control
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ 
            flex: '1 1 auto', 
            overflowY: openIndexes[idx] ? 'auto' : 'hidden' // Allow vertical scrolling when open
          }}>
            <p style={{ 
              margin: '5px 0', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: openIndexes[idx] ? 'normal' : 'nowrap' 
            }}>
              <strong>Description:</strong> {des.description}
            </p>
            {openIndexes[idx] && (
              <div>
                <p style={{ margin: '5px 0' }}><strong>Prescription:</strong> {des.prescription}</p>
              </div>
            )}
          </div>
          {!openIndexes[idx] && <p style={{ alignSelf: 'flex-end', marginTop: 'auto', textAlign: 'right' }}>...</p>}
        </div>
      ))}
    </div>
  );
};

export default PrevDescription;
