import React, { useState } from 'react';
import './tgpa.css'; // Ensure this file is imported for styles.

const TGPA = () => {
  const [subjects, setSubjects] = useState([
    { code: '', title: '', credits: '', grade: '' },
  ]);
  const [tgpa, setTGPA] = useState(null);

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
          <button
            className="delete-btn"
            onClick={() => deleteSubject(index)}
            // disabled={subjects.length === 1} // Prevent deleting if only one subject remains
          >
            Delete
          </button>
        </div>
      ))}
      <div className="button-row">
        <button onClick={addSubject}>Add Subject</button>
        <button onClick={calculateTGPA}>Calculate TGPA</button>
        <button onClick={resetData} className="reset-btn">
          Reset
        </button>
      </div>
      {tgpa !== null && <h3 className="result">Calculated TGPA: {tgpa}</h3>}
    </div>
  );
};

export default TGPA;
