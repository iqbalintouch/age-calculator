import React, { useState } from 'react';

const AgeCalculator = () => {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            ageMonths--;
            const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0);
            ageDays += prevMonthLastDay.getDate();
        }

        return { years: ageYears, months: ageMonths, days: ageDays };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const calculatedAge = calculateAge(dateOfBirth);
        setAge(calculatedAge);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Age Calculator</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Calculate Age</button>
            </form>
            {age && (
                <div>
                    <h2>Your Age: {age.years} years, {age.months} months, and {age.days} days</h2>
                </div>
            )}
        </div>
    );
};

export default AgeCalculator;