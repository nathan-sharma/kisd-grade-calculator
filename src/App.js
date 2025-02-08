import React, { useState } from 'react';
import SemesterCalculator from './SemesterCalculator';
import GradeAverageCalculator from './GradeAverageCalculator';
import GPACalculator from './GPACalculator';

function App() {
  const [calculatorType, setCalculatorType] = useState(null);

  return (
    <div className="App flex flex-col items-center h-screen pt-8 justify-center bg-blue-50">
      <h1 className="text-red-500 text-3xl text-center font-bold font-mono py-4">Katy ISD Grade Calculator</h1>
      <p className="text-blue-500 font-extrabold mt-[-10px]">By Nathan Sharma</p>

      <div className="mt-3 border p-8 rounded shadow-md"> {/* Border and padding */}
        {!calculatorType && (
          <div className="flex flex-col space-y-4"> {/* Removed pt-2 here */}
            <button
              className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setCalculatorType('semester')}
            >
              Semester Exam Calculator
            </button>
            <button
              className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setCalculatorType('gpa')}
            >
              GPA Calculator
            </button>
            <button
              className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setCalculatorType('grades')}
            >
              Grade Average Calculator
            </button>
          </div>
        )}

        {calculatorType === 'semester' && <SemesterCalculator />}
        {calculatorType === 'grades' && <GradeAverageCalculator />}
        {calculatorType === 'gpa' && <GPACalculator />}

        {calculatorType && (
          <button
            className="rounded mt-4 border border-black bg-black text-white"
            onClick={() => setCalculatorType(null)}
          >
            Back to Menu
          </button>
        )}
      </div> {/* Close the border div */}
    </div>
  );
}

export default App;