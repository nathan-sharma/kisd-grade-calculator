import React, { useState } from 'react';

function GPACalculator() {
  const [academicGrades, setAcademicGrades] = useState('');
  const [kapApGrades, setKapApGrades] = useState('');
  const [gpa, setGpa] = useState(null);

  const calculateGPA = () => {
    const calculatePoints = (gradesString, letterValues) => {
      let points = 0;
      let count = 0;

      if (gradesString.toLowerCase() !== 'none' && gradesString.trim() !== "") { // Handle "none" and empty input
        const gradeEntries = gradesString.split(',');
        for (const entry of gradeEntries) {
          const parts = entry.trim().split('(');
          if (parts.length === 2) {
            const letter = parts[0].trim().toUpperCase();
            const num = parseInt(parts[1].replace(')', '')); // Remove ')' and parse
            if (!isNaN(num)) {
                for (let i = 0; i < num; i++) {
                  if (letterValues[letter]) {
                    points += letterValues[letter];
                    count++;
                  } else {
                    alert("Invalid grade letter: " + letter)
                    return {points: 0, count: 0} // Stop calculation on invalid letter
                  }
                }
            } else {
                alert("Invalid number of courses for " + letter)
                return {points: 0, count: 0} // Stop calculation on invalid number
            }
          } else {
            alert("Invalid grade format for: " + entry)
            return {points: 0, count: 0} // Stop calculation on invalid format
          }
        }
      }

      return { points, count };
    };

    const acaLetters = { A: 4, B: 3, C: 2, D: 1 };
    const kapApLetters = { A: 5, B: 4, C: 3, D: 2 };

    const acaPointsCount = calculatePoints(academicGrades, acaLetters);
    const kapPointsCount = calculatePoints(kapApGrades, kapApLetters);

    const totalPoints = acaPointsCount.points + kapPointsCount.points;
    const totalCourses = acaPointsCount.count + kapPointsCount.count;

    const calculatedGpa = totalCourses > 0 ? totalPoints / totalCourses : 0;
    setGpa(calculatedGpa.toFixed(4)); // Round to 4 decimal places

  };

  return (
    <div>
      <h2>GPA Calculator</h2>
      <input
        type="text"
        placeholder="Academic Grades (Letter(Number),... or 'none')"
        value={academicGrades}
        onChange={e => setAcademicGrades(e.target.value)}
      />
      <input
        type="text"
        placeholder="KAP/AP Grades (Letter(Number),... or 'none')"
        value={kapApGrades}
        onChange={e => setKapApGrades(e.target.value)}
      />
      <button onClick={calculateGPA}>Calculate GPA</button>

      {gpa !== null && (
        <div>
          <p>Your GPA: {gpa}</p>
        </div>
      )}
    </div>
  );
}

export default GPACalculator;