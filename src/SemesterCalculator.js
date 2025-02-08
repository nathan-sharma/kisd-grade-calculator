import React, { useState } from 'react';

function SemesterCalculator() {
  const [sw1, setSw1] = useState('');
  const [sw2, setSw2] = useState('');
  const [sw3, setSw3] = useState('');
  const [results, setResults] = useState(null);

  const calculate = () => {
    const average = (parseFloat(sw1) + parseFloat(sw2) + parseFloat(sw3)) / 3;
    const get_an_a = 20 / 3 * (89.5 - (0.85 * average));
    const get_a_b = 20 / 3 * (79.5 - (0.85 * average));
    const to_pass = 20 / 3 * (70 - (0.85 * average));
    const skibidi_toilet = 0.85 * average + 15;

    setResults({ get_an_a, get_a_b, to_pass, skibidi_toilet });
  };

  return (
    <div>
      <h2>Semester Exam Calculator</h2>
      <input type="number" placeholder="Six Weeks 1" value={sw1} onChange={e => setSw1(e.target.value)} />
      <input type="number" placeholder="Six Weeks 2" value={sw2} onChange={e => setSw2(e.target.value)} />
      <input type="number" placeholder="Six Weeks 3" value={sw3} onChange={e => setSw3(e.target.value)} />
      <button onClick={calculate}>Calculate</button>

      {results && ( // Display results if calculated
        <div>
          {/* ... (Display results similar to your Python code) */}
          <p>To get an A: {results.get_an_a > 100 ? "Impossible" : results.get_an_a <= 0 ? "Guaranteed" : results.get_an_a}</p>
          {/* ... (Rest of your results display logic) */}
        </div>
      )}
    </div>
  );
}

export default SemesterCalculator;