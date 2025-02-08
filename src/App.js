import React, { useState } from 'react';
import SemesterCalculator from './SemesterCalculator';
import GradeAverageCalculator from './GradeAverageCalculator';
import GPACalculator from './GPACalculator';

function App() {
  const [calculatorType, setCalculatorType] = useState(null);

  return (
    <div className="App">
      <h1 class="text-red-500">KISD Sharma Grade Calculator</h1>
      {!calculatorType && ( // Conditionally render buttons
        <div>
          <button onClick={() => setCalculatorType('semester')}>Semester Exam Calculator</button>
          <button onClick={() => setCalculatorType('grades')}>Grade Average Calculator</button>
          <button onClick={() => setCalculatorType('gpa')}>GPA Calculator</button>
        </div>
      )}

      {calculatorType === 'semester' && <SemesterCalculator />}
      {calculatorType === 'grades' && <GradeAverageCalculator />}
      {calculatorType === 'gpa' && <GPACalculator />}

        {calculatorType && ( // Button to go back to main menu
            <button onClick={() => setCalculatorType(null)}>Back to Menu</button>
        )}
    </div>
  );
}

export default App;