import React, { useState } from 'react';

function GradeAverageCalculator() {
  const [majors, setMajors] = useState('');
  const [minors, setMinors] = useState('');
  const [others, setOthers] = useState('');
  const [results, setResults] = useState(null);

  const calculateAverage = () => {
    const calculateAverageForCategory = (gradesString) => {
      if (!gradesString) return 0; // Handle empty input
      const gradesList = gradesString.split(',').map(grade => parseFloat(grade.trim()));
      const validGrades = gradesList.filter(grade => !isNaN(grade)); // Filter out invalid inputs
      if (validGrades.length === 0) return 0; // Handle cases where all inputs are invalid
      return validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length;
    };

    const avgMajors = calculateAverageForCategory(majors);
    const avgMinors = calculateAverageForCategory(minors);
    const avgOthers = calculateAverageForCategory(others);

    const finalAvgKap = 0.6 * avgMajors + 0.3 * avgMinors + 0.1 * avgOthers;
    const finalAvgAca = 0.5 * avgMajors + 0.35 * avgMinors + 0.15 * avgOthers;
    const finalAvgAp = 0.7 * avgMajors + 0.2 * avgMinors + 0.1 * avgOthers;

    setResults({ kap: finalAvgKap, aca: finalAvgAca, ap: finalAvgAp });
  };

  return (
    <div>
      <h2>Grade Average Calculator</h2>
      <input type="text" placeholder="Major Grades (comma-separated)" value={majors} onChange={e => setMajors(e.target.value)} />
      <input type="text" placeholder="Minor Grades (comma-separated)" value={minors} onChange={e => setMinors(e.target.value)} />
      <input type="text" placeholder="Other Grades (comma-separated)" value={others} onChange={e => setOthers(e.target.value)} />
      <button onClick={calculateAverage}>Calculate</button>

      {results && (
        <div>
          <p>KAP Average: {results.kap.toFixed(2)}</p> {/* toFixed for rounding */}
          <p>ACA Average: {results.aca.toFixed(2)}</p>
          <p>AP Average: {results.ap.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default GradeAverageCalculator;