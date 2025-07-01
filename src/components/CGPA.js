// import React, { useState } from 'react';
// import './cgpa.css'; // Import the separate CSS file for CGPA.

// const CGPA = () => {
//   const [semesters, setSemesters] = useState([{ tgpa: '', credits: '' }]);
//   const [cgpa, setCGPA] = useState(null);

//   const handleChange = (index, field, value) => {
//     const updatedSemesters = [...semesters];
//     updatedSemesters[index][field] = value;
//     setSemesters(updatedSemesters);
//   };

//   const addSemester = () => {
//     setSemesters([...semesters, { tgpa: '', credits: '' }]);
//   };

//   const deleteSemester = (index) => {
//     const updatedSemesters = semesters.filter((_, i) => i !== index);
//     setSemesters(updatedSemesters);
//   };

//   const calculateCGPA = () => {
//     let totalCredits = 0;
//     let weightedTGPAs = 0;

//     semesters.forEach(({ tgpa, credits }) => {
//       const tgpaValue = parseFloat(tgpa);
//       const credit = parseFloat(credits);

//       if (!isNaN(tgpaValue) && !isNaN(credit)) {
//         totalCredits += credit;
//         weightedTGPAs += tgpaValue * credit;
//       }
//     });

//     const calculatedCGPA = weightedTGPAs / totalCredits || 0;
//     setCGPA(calculatedCGPA.toFixed(2));
//   };

//   const resetData = () => {
//     setSemesters([{ tgpa: '', credits: '' }]);
//     setCGPA(null);
//   };

  

//   return (
//     <div>
//       {semesters.map((semester, index) => (
//         <div className="input-group" key={index}>
//           <input
//             type="number"
//             className="small-input"
//             placeholder="TGPA"
//             value={semester.tgpa}
//             onChange={(e) => handleChange(index, 'tgpa', e.target.value)}
//             // disabled={index === 0} // Prevent editing for the first row
//           />
//           <input
//             type="number"
//             className="small-input"
//             placeholder="Credits"
//             value={semester.credits}
//             onChange={(e) => handleChange(index, 'credits', e.target.value)}
//             // disabled={index === 0} // Prevent editing for the first row
//           />
//           {index >= 0 && (
//             <button className="delete-btn" onClick={() => deleteSemester(index)}>
                          

//               Delete
//             </button>
//           )}
//         </div>
//       ))}
//       <div className="button-row">
//         <button onClick={addSemester}>Add Semester</button>
//         <button onClick={calculateCGPA}>Calculate CGPA</button>
//         <button onClick={resetData} className="reset-btn">Reset</button>
//       </div>
//       {cgpa !== null && <h3 className="result">Calculated CGPA: {cgpa}</h3>}
//     </div>
//   );
// };

// export default CGPA;










// import React, { useState } from 'react';
// import './cgpa.css'; // Import the separate CSS file for CGPA.

// const CGPA = () => {
//   const [semesters, setSemesters] = useState([{ tgpa: '', credits: '' }]);
//   const [cgpa, setCGPA] = useState(null);
//   const [percentage, setPercentage] = useState(null);

//   const handleChange = (index, field, value) => {
//     const updatedSemesters = [...semesters];
//     updatedSemesters[index][field] = value;
//     setSemesters(updatedSemesters);
//   };

//   const addSemester = () => {
//     setSemesters([...semesters, { tgpa: '', credits: '' }]);
//   };

//   const deleteSemester = (index) => {
//     const updatedSemesters = semesters.filter((_, i) => i !== index);
//     setSemesters(updatedSemesters);
//   };

//   const calculateCGPA = () => {
//     let totalCredits = 0;
//     let weightedTGPAs = 0;

//     semesters.forEach(({ tgpa, credits }) => {
//       const tgpaValue = parseFloat(tgpa);
//       const credit = parseFloat(credits);

//       if (!isNaN(tgpaValue) && !isNaN(credit)) {
//         totalCredits += credit;
//         weightedTGPAs += tgpaValue * credit;
//       }
//     });

//     const calculatedCGPA = weightedTGPAs / totalCredits || 0;
//     setCGPA(calculatedCGPA.toFixed(2));
//     setPercentage(null); // Reset percentage when CGPA is recalculated
//   };

//   const convertToPercentage = () => {
//     if (cgpa !== null) {
//       const calculatedPercentage = (cgpa * 9.5).toFixed(2); // CBSE formula
//       setPercentage(calculatedPercentage);
//     }
//   };

//   const resetData = () => {
//     setSemesters([{ tgpa: '', credits: '' }]);
//     setCGPA(null);
//     setPercentage(null);
//   };

//   return (
//     <div>
//       {semesters.map((semester, index) => (
//         <div className="input-group" key={index}>
//           <input
//             type="number"
//             className="small-input"
//             placeholder="TGPA"
//             value={semester.tgpa}
//             onChange={(e) => handleChange(index, 'tgpa', e.target.value)}
//           />
//           <input
//             type="number"
//             className="small-input"
//             placeholder="Credits"
//             value={semester.credits}
//             onChange={(e) => handleChange(index, 'credits', e.target.value)}
//           />
//           {index >= 0 && (
//             <button className="delete-btn" onClick={() => deleteSemester(index)}>
//               Delete
//             </button>
//           )}
//         </div>
//       ))}
//       <div className="button-row">
//         <button onClick={addSemester}>Add Semester</button>
//         <button onClick={calculateCGPA}>Calculate CGPA</button>
//         <button onClick={resetData} className="reset-btn">
//           Reset
//         </button>
//       </div>
//       {cgpa !== null && (
//         <div>
//           <h3 className="result">Calculated CGPA: {cgpa}</h3>
//           <button onClick={convertToPercentage}>Convert to Percentage</button>
//         </div>
//       )}
//       {percentage !== null && (
//         <h3 className="result">Equivalent Percentage: {percentage}%</h3>
//       )}
//     </div>
//   );
// };

// export default CGPA;















import React, { useState, useEffect } from 'react';
import './cgpa.css';

const CGPA = () => {
  const [semesters, setSemesters] = useState([{ tgpa: '', credits: '' }]);
  const [cgpa, setCGPA] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [history, setHistory] = useState([]);

  const handleChange = (index, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[index][field] = value;
    setSemesters(updatedSemesters);
  };

  const addSemester = () => {
    setSemesters([...semesters, { tgpa: '', credits: '' }]);
  };

  const deleteSemester = (index) => {
    const updatedSemesters = semesters.filter((_, i) => i !== index);
    setSemesters(updatedSemesters);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let weightedTGPAs = 0;

    semesters.forEach(({ tgpa, credits }) => {
      const tgpaValue = parseFloat(tgpa);
      const credit = parseFloat(credits);

      if (!isNaN(tgpaValue) && !isNaN(credit)) {
        totalCredits += credit;
        weightedTGPAs += tgpaValue * credit;
      }
    });

    const calculatedCGPA = weightedTGPAs / totalCredits || 0;
    setCGPA(calculatedCGPA.toFixed(2));
    setPercentage(null);
  };

  const convertToPercentage = () => {
    if (cgpa !== null) {
      const calculatedPercentage = (cgpa * 9.5).toFixed(2);
      setPercentage(calculatedPercentage);
    }
  };

  const resetData = () => {
    setSemesters([{ tgpa: '', credits: '' }]);
    setCGPA(null);
    setPercentage(null);
  };

  const saveData = () => {
    const newEntry = {
      semesters,
      cgpa,
      percentage,
      savedAt: new Date().toLocaleString(),
    };

    const existingHistory = JSON.parse(localStorage.getItem('cgpaHistory')) || [];
    const updatedHistory = [newEntry, ...existingHistory].slice(0, 3);
    localStorage.setItem('cgpaHistory', JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    alert('CGPA data saved!');
  };

  const loadHistory = () => {
    const saved = localStorage.getItem('cgpaHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  };

  const deleteHistoryEntry = (index) => {
    const updated = history.filter((_, i) => i !== index);
    localStorage.setItem('cgpaHistory', JSON.stringify(updated));
    setHistory(updated);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div>
      {semesters.map((semester, index) => (
        <div className="input-group" key={index}>
          <input
            type="number"
            className="small-input"
            placeholder="TGPA"
            value={semester.tgpa}
            onChange={(e) => handleChange(index, 'tgpa', e.target.value)}
          />
          <input
            type="number"
            className="small-input"
            placeholder="Credits"
            value={semester.credits}
            onChange={(e) => handleChange(index, 'credits', e.target.value)}
          />
          <button className="delete-btn" onClick={() => deleteSemester(index)}>
            Delete
          </button>
        </div>
      ))}

      <div className="button-row">
        <button onClick={addSemester}>Add Semester</button>
        <button onClick={calculateCGPA}>Calculate CGPA</button>
        <button onClick={resetData} className="reset-btn">Reset</button>
        <button onClick={saveData} className="save-btn">Save</button>
        <button onClick={loadHistory} className="view-btn">View Saved Data</button>
      </div>

      {cgpa !== null && (
        <div className="result">
          <h3>Calculated CGPA: {cgpa}</h3>
          <button onClick={convertToPercentage}>Convert to Percentage</button>
        </div>
      )}

      {percentage !== null && (
        <h3 className="result">Equivalent Percentage: {percentage}%</h3>
      )}

      {history.length > 0 && (
        <div className="view-data">
          <h3>Saved CGPA History (Last 3)</h3>
          {history.map((entry, idx) => (
            <div key={idx} className="history-entry">
              <p><strong>Saved At:</strong> {entry.savedAt}</p>
              <p><strong>CGPA:</strong> {entry.cgpa || 'N/A'} | <strong>Percentage:</strong> {entry.percentage || 'Not converted'}</p>
              <table>
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>TGPA</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {entry.semesters.map((sem, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{sem.tgpa}</td>
                      <td>{sem.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="delete-btn"
                style={{ marginTop: '10px' }}
                onClick={() => deleteHistoryEntry(idx)}
              >
                Delete This Entry
              </button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CGPA;
