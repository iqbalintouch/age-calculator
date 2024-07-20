import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState({ years: null, months: null, days: null });

  const calculateAge = () => {
    if (dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      const ageYears = today.getFullYear() - birthDate.getFullYear();
      const ageMonths = today.getMonth() - birthDate.getMonth();
      const ageDays = today.getDate() - birthDate.getDate();

      let years = ageYears;
      let months = ageMonths;
      let days = ageDays;

      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setAge({ years, months, days });
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Age Calculator</h1>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        {(age.years !== null || age.months !== null || age.days !== null) && (
          <div className="age-result">
            <h2>Your Age:</h2>
            <p>{age.years} years, {age.months} months, and {age.days} days</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
