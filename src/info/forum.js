import React, { useState, useEffect } from 'react';
import { useRemedies } from './useIndexedDB'; // Assuming useIndexedDB is in a file named useIndexedDB.js

const Forum = () => {
  const [advice, setAdvice] = useState([
    { id: 1, title: 'Gingko', description: 'Gingko: Can boost brain health' },
  ]);
  const { addRemedy, getAllRemedies } = useRemedies();
  useEffect(() => {
    const fetchRemedies = async () => {
      const remedies = await getAllRemedies();
      setAdvice(remedies);
    };
    fetchRemedies();
  }, [getAllRemedies]);
  const [newAdvice, setNewAdvice] = useState({ title: '', description: '' });

  const addAdvice = async () => {
    try {
      await addRemedy(newAdvice); // Assuming addRemedy adds to IndexedDB
      setAdvice(prevAdvice => [...prevAdvice, newAdvice]); // Update state based on actual addition
      setNewAdvice({ title: '', description: '' });
    } catch (error) {
      console.error("Error adding remedy:", error);
    }
  };

  return (
    <div style={styles.box}>
      <div style={styles.scroll}>
        {advice.map(item => (
          <div key={item.id}>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <input
        placeholder="Natural Remedies"
        value={newAdvice.description}
        onChange={e => setNewAdvice({ ...newAdvice, description: e.target.value })}
      />
      <button onClick={addAdvice}>Add Remedy</button>
    </div>
  );
};

const styles = {
  box: {
    marginTop: 0,
    backgroundColor: 'white',
    border: '3px solid black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 5,
    height: '40%', // Adjust the height as needed
    maxHeight: '70vh', 
    overflowY: 'scroll',
    maxWidth: '100%',
    /* Added styles for centering */
    margin: '0 auto',
  },
  scroll: {
    marginBottom: 20,
  },
};
export default Forum;
