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










import React, { useState } from 'react';
import './cgpa.css'; // Import the separate CSS file for CGPA.

const CGPA = () => {
  const [semesters, setSemesters] = useState([{ tgpa: '', credits: '' }]);
  const [cgpa, setCGPA] = useState(null);
  const [percentage, setPercentage] = useState(null);

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
    setPercentage(null); // Reset percentage when CGPA is recalculated
  };

  const convertToPercentage = () => {
    if (cgpa !== null) {
      const calculatedPercentage = (cgpa * 9.5).toFixed(2); // CBSE formula
      setPercentage(calculatedPercentage);
    }
  };

  const resetData = () => {
    setSemesters([{ tgpa: '', credits: '' }]);
    setCGPA(null);
    setPercentage(null);
  };

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
          {index >= 0 && (
            <button className="delete-btn" onClick={() => deleteSemester(index)}>
              Delete
            </button>
          )}
        </div>
      ))}
      <div className="button-row">
        <button onClick={addSemester}>Add Semester</button>
        <button onClick={calculateCGPA}>Calculate CGPA</button>
        <button onClick={resetData} className="reset-btn">
          Reset
        </button>
      </div>
      {cgpa !== null && (
        <div>
          <h3 className="result">Calculated CGPA: {cgpa}</h3>
          <button onClick={convertToPercentage}>Convert to Percentage</button>
        </div>
      )}
      {percentage !== null && (
        <h3 className="result">Equivalent Percentage: {percentage}%</h3>
      )}
    </div>
  );
};

export default CGPA;
