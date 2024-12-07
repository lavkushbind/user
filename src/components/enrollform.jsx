import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';

const EnrollForm = () => {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const [isLoading, setIsLoading] = useState(false); // Loading state for submission

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
    
  };

  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = displayRazorpay;
    document.body.appendChild(script);
  };

  const displayRazorpay = () => {
    const options = {
      key: 'rzp_live_6vd9RApruseTAi', // Replace with your Razorpay API Key
      amount:9900, // ₹99 in paise
      currency: 'INR',
      name: 'Blanklearn',
      description: '3 Days Trial Class',
      handler: async (response) => {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        await saveEnrollment(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Student Name',
        email: 'student@example.com',
        contact: phoneNumber, // Use phone number from state
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const saveEnrollment = async (paymentId) => {
    const db = getDatabase(); // Initialize Realtime Database
    const enrollmentsRef = ref(db, 'enrollments'); // Reference to the enrollments collection
    const newEnrollmentRef = push(enrollmentsRef); // Generate a new unique key

    try {
      await set(newEnrollmentRef, {
        grade: selectedGrade,
        paymentId: paymentId,
        studentName: 'Student Name', // Replace with actual input if required
        contact: phoneNumber,       // Save the phone number
        email: 'student@example.com' // Replace with actual input if required
      });
      alert('Enrollment details saved successfully!');
    } catch (error) {
      console.error('Error saving to Realtime Database:', error);
      alert('Failed to save enrollment details. Please try again.');
    }
    setIsLoading(false); // Reset loading
  };

  const handleSubmit = () => {
    if (!selectedGrade) {
      alert('Please select a grade to enroll.');
      return;
    }

    if (!phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    setIsLoading(true); // Start loading
    loadRazorpay();
  };

  return (
    <div className="max-w-md mx-auto bg-white text-black shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2"> Book Your Class Now and Start Learning <span>with Blanklearn!</span></h2>
      
      <p className="text-blue-900 text-sm mb-4">
      Be part of<strong> 1000+</strong>  curious superstars today!
      </p>
      <h3 className="text-lg font-bold mb-2">Choose Class to Enroll</h3>
      <div className="grid grid-cols-3 gap-2 mb-4">
      {[...Array(10)].map((_, index) => (
       <button
         key={index + 1}
         className={`py-2 px-4 rounded-full border ${
        selectedGrade === index + 1 ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'
        }`}
        onClick={() => handleGradeSelect(index + 1)}
         >
          {index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'}
       </button>
        ))}
      </div>

      {/* Phone Number Input */}
      <div className="mb-4">
        <label htmlFor="phone" className="text-sm font-semibold">Enter Your Phone Number</label>
        <input
         type="tel"
         id="phone"
         size="10"
         value={phoneNumber}
         onChange={handlePhoneNumberChange}
         className="w-full mt-2 p-2 border border-blue-500 rounded-md"
         placeholder="Enter phone number"
         maxLength="10" // Limits the number of characters to 10
        />
      </div>

      <button
        className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-900 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Enroll Now - 3 Days Trial Class at ₹99'}
      </button>
    </div>
  );
};

export default EnrollForm;
