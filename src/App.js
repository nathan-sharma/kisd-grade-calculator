import React, { useState } from 'react';
import SemesterCalculator from './SemesterCalculator';
import GradeAverageCalculator from './GradeAverageCalculator';
import GPACalculator from './GPACalculator';

function App() {
  const [calculatorType, setCalculatorType] = useState(null);
  const [showHowToUse, setShowHowToUse] = useState(false);

  return (
    <div className="App flex flex-col items-center h-screen justify-center bg-gray-200">
      <h1 className="text-blue-500 text-3xl text-center font-bold font-sans py-4">Katy ISD Grade Calculator</h1>
      <p className="font-extrabold mt-[-10px]"> By Nathan Sharma</p>

      <div className="mt-3 border border-gray-300 p-8 rounded shadow-md">

        {!calculatorType && (
          <div className="flex flex-col space-y-4">
            <button
              className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setCalculatorType('semester')}
            >
              Semester Exam Calculator
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setCalculatorType('gpa')}
            >
              GPA Calculator
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setCalculatorType('grades')}
            >
              Class Average Calculator
            </button>
          </div>
        )}
        {calculatorType === 'semester' && <SemesterCalculator />}
        {calculatorType === 'grades' && <GradeAverageCalculator />}
        {calculatorType === 'gpa' && <GPACalculator />}

        {calculatorType && (
          <button
            className="rounded mt-4 bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 mr-4" 
            onClick={() => setCalculatorType(null)}
          >
            Back to Menu
          </button>
        )}
        <button
  className={` rounded mt-4 bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 ml-auto
             ${!calculatorType ? 'w-full' : ''}`} 
  onClick={() => setShowHowToUse(!showHowToUse)}
>
  How to use
</button>

      </div> {/* Close the main div */}

      {showHowToUse && (
        <div className="mt-3 mb-4 border border-gray-300 p-8 rounded shadow-md w-1/2 mx-auto max-h-[70vh] overflow-y-auto relative">
          <h2 className = "font-bold underline">How to use the calculators</h2>
          <p className ="mt-3">Semester Calculator: Input your six weeks averages for any class into the SW fields. </p>
          <p className = "mt-3">GPA Calculator: Entries should be in the form of Letter(Number of semesters) separated by commas. In other words, you're inputting the number of semesters where your average was the letter outside the parentheses. If you didn't take any 5.0 or 4.0 courses, put 'none' in the corresponding placeholder. Make sure you also account for the high school credit courses you took in middle school!</p>
          <p className = "mt-3">Class Average Calculator: Input your grades separated by commas or their averages into each category. You can also use this as a what if calculator to see what you need to get the average you're aiming for. </p>
        </div>
      )}
    </div>
  );
}

export default App;
