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
            alert("Invalid grade format for " + entry + ". Make sure you have parentheses around the number of semesters. Example: A(1)")
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
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">GPA Calculator</h2>
        <input
          type="text"
          placeholder="ACA courses (A(# of semesters), B(# of semesters)... or 'none')"
          value={academicGrades}
          onChange={e => setAcademicGrades(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 mb-2 w-full" 
        />
        <input
          type="text"
          placeholder="KAP & AP courses (A(# of semesters), B(# of semesters)... or 'none')"
          value={kapApGrades}
          onChange={e => setKapApGrades(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"  
        />
        <button onClick={calculateGPA} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {/* Styling button */}
          Calculate GPA
        </button>

        {gpa !== null && (
          <div className="mt-4">
            <p className="text-lg">Your GPA: {gpa}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GPACalculator;
