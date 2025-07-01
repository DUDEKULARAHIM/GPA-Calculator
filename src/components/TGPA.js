// import React, { useState } from 'react';
// import './tgpa.css'; // Ensure this file is imported for styles.

// const TGPA = () => {
//   const [subjects, setSubjects] = useState([
//     { code: '', title: '', credits: '', grade: '' },
//   ]);
//   const [tgpa, setTGPA] = useState(null);

//   const gradePointsMapping = {
//     O: 10,
//     'A+': 9,
//     A: 8,
//     'B+': 7,
//     B: 6,
//     C: 5,
//     D: 4,
//     E: 0,
//   };

//   const handleChange = (index, field, value) => {
//     const updatedSubjects = [...subjects];
//     updatedSubjects[index][field] = value;
//     setSubjects(updatedSubjects);
//   };

//   const addSubject = () => {
//     setSubjects([...subjects, { code: '', title: '', credits: '', grade: '' }]);
//   };

//   const deleteSubject = (index) => {
//     const updatedSubjects = subjects.filter((_, i) => i !== index);
//     setSubjects(updatedSubjects);
//   };

//   const calculateTGPA = () => {
//     let totalCredits = 0;
//     let weightedGradePoints = 0;

//     subjects.forEach(({ credits, grade }) => {
//       const gradePoints = gradePointsMapping[grade] || 0;
//       const credit = parseFloat(credits);

//       if (!isNaN(gradePoints) && !isNaN(credit)) {
//         totalCredits += credit;
//         weightedGradePoints += gradePoints * credit;
//       }
//     });

//     const calculatedTGPA = totalCredits ? weightedGradePoints / totalCredits : 0;
//     setTGPA(calculatedTGPA.toFixed(2));
//   };

//   const resetData = () => {
//     setSubjects([{ code: '', title: '', credits: '', grade: '' }]);
//     setTGPA(null);
//   };

//   return (
//     <div>
//       {subjects.map((subject, index) => (
//         <div className="input-group" key={index}>
//           <input
//             type="text"
//             className="small-input"
//             placeholder="Course Code"
//             value={subject.code}
//             onChange={(e) => handleChange(index, 'code', e.target.value)}
//           />
//           <input
//             type="number"
//             className="small-input"
//             placeholder="Credits"
//             value={subject.credits}
//             onChange={(e) => handleChange(index, 'credits', e.target.value)}
//           />
//           <select
//             className="small-input"
//             value={subject.grade}
//             onChange={(e) => handleChange(index, 'grade', e.target.value)}
//           >
//             <option value="">Select Grade</option>
//             {Object.keys(gradePointsMapping).map((grade) => (
//               <option key={grade} value={grade}>
//                 {grade}
//               </option>
//             ))}
//           </select>
//           <button
//             className="delete-btn"
//             onClick={() => deleteSubject(index)}
//             // disabled={subjects.length === 1} // Prevent deleting if only one subject remains
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//       <div className="button-row">
//         <button onClick={addSubject}>Add Subject</button>
//         <button onClick={calculateTGPA}>Calculate TGPA</button>
//         <button onClick={resetData} className="reset-btn">
//           Reset
//         </button>
//       </div>
//       {tgpa !== null && <h3 className="result">Calculated TGPA: {tgpa}</h3>}
//     </div>
//   );
// };

// export default TGPA;









import React, { useEffect, useState } from 'react';
import './tgpa.css';

const TGPA = () => {
  const [subjects, setSubjects] = useState([
    { code: '', title: '', credits: '', grade: '' },
  ]);
  const [tgpa, setTGPA] = useState(null);
  const [history, setHistory] = useState([]);

  const gradePointsMapping = {
    O: 10,
    'A+': 9,
    A: 8,
    'B+': 7,
    B: 6,
    C: 5,
    D: 4,
    E: 0,
  };

  const handleChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { code: '', title: '', credits: '', grade: '' }]);
  };

  const deleteSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const calculateTGPA = () => {
    let totalCredits = 0;
    let weightedGradePoints = 0;

    subjects.forEach(({ credits, grade }) => {
      const gradePoints = gradePointsMapping[grade] || 0;
      const credit = parseFloat(credits);

      if (!isNaN(gradePoints) && !isNaN(credit)) {
        totalCredits += credit;
        weightedGradePoints += gradePoints * credit;
      }
    });

    const calculatedTGPA = totalCredits ? weightedGradePoints / totalCredits : 0;
    setTGPA(calculatedTGPA.toFixed(2));
  };

  const resetData = () => {
    setSubjects([{ code: '', title: '', credits: '', grade: '' }]);
    setTGPA(null);
  };

  const saveData = () => {
    const newEntry = {
      subjects,
      tgpa,
      savedAt: new Date().toLocaleString(),
    };

    const existingHistory = JSON.parse(localStorage.getItem('tgpaHistory')) || [];
    const updatedHistory = [newEntry, ...existingHistory].slice(0, 3); // Keep only last 3
    localStorage.setItem('tgpaHistory', JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    alert('Data saved successfully!');
  };

  const loadSavedHistory = () => {
    const saved = localStorage.getItem('tgpaHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    } else {
      alert('No saved history found!');
    }
  };

  const deleteHistoryEntry = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    localStorage.setItem('tgpaHistory', JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
  };

  useEffect(() => {
    loadSavedHistory();
  }, []);

  return (
    <div>
      {subjects.map((subject, index) => (
        <div className="input-group" key={index}>
          <input
            type="text"
            className="small-input"
            placeholder="Course Code"
            value={subject.code}
            onChange={(e) => handleChange(index, 'code', e.target.value)}
          />
          <input
            type="number"
            className="small-input"
            placeholder="Credits"
            value={subject.credits}
            onChange={(e) => handleChange(index, 'credits', e.target.value)}
          />
          <select
            className="small-input"
            value={subject.grade}
            onChange={(e) => handleChange(index, 'grade', e.target.value)}
          >
            <option value="">Select Grade</option>
            {Object.keys(gradePointsMapping).map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          <button className="delete-btn" onClick={() => deleteSubject(index)}>
            Delete
          </button>
        </div>
      ))}

      <div className="button-row">
        <button onClick={addSubject}>Add Subject</button>
        <button onClick={calculateTGPA}>Calculate TGPA</button>
        <button onClick={resetData} className="reset-btn">Reset</button>
        <button onClick={saveData} className="save-btn">Save</button>
        <button onClick={loadSavedHistory} className="view-btn">View Saved History</button>
      </div>

      {tgpa !== null && <h3 className="result">Calculated TGPA: {tgpa}</h3>}

      {history.length > 0 && (
        <div className="view-data">
          <h3>Saved TGPA History (Last 3)</h3>
          {history.map((entry, idx) => (
            <div key={idx} className="history-entry">
              <p><strong>Saved At:</strong> {entry.savedAt}</p>
              <p><strong>TGPA:</strong> {entry.tgpa || 'Not Calculated'}</p>
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Credits</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {entry.subjects.map((subj, i) => (
                    <tr key={i}>
                      <td>{subj.code}</td>
                      <td>{subj.credits}</td>
                      <td>{subj.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => deleteHistoryEntry(idx)}
                className="delete-btn"
                style={{ marginTop: '10px' }}
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

export default TGPA;
