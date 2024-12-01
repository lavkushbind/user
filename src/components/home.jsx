import React from 'react';
import ImageSlider from './imageslider';

const Home = () => {
  return (
    <div className="max-w-md mx-auto bg-dark-blue text-white shadow-lg rounded-lg p-4">
      <header className="flex justify-between items-center mb-6">
        <div className="text-4xl font-bold">
          <span className="text-blue-900">Blanklearn</span>
        </div>
        {/* <p className="text-sm text-blue-300">Your Learning Partner</p> */}
      </header>

      <ImageSlider />

      <div className="text-center">
        <h2 className="text-xl text-blue-700 font-bold mb-2">Course Highlights</h2>
        <p className="text-blue-500 mb-4">
        Blanklearn has small classes of 5-10 students, so teachers can help each one individually      
        </p>

        {/* Review Section */}
        <div className="mb-6">
          <h2 className="text-xl text-black font-bold text-center mb-4">
            Why do Parents ❤️ Blanklearn?
          </h2>
          <p className="text-blue-500 text-center mb-4">
            Read the stories of our students' success!
          </p>

          <div className="overflow-x-scroll flex gap-4">

          <div className="min-w-[280px] bg-white text-black p-4 rounded-md shadow-2xl shadow-black/30">
              <p className="text-blue-500 text-lg font-bold mb-2">
                "Personalized Mentor Support at Blanklearn"
              </p>
              <p className="text-sm mb-4">
              Meri beti Blanklearn ke chhote 5-10 student ke group mein seekh rahi hain. Unka personal teacher poore mahine madad karta raha, aur ab woh English bolna shuru kar chuki hain!              </p>
              <p className="font-bold text-gray-700">Parent of Neha</p>
              <p className="text-sm text-gray-500">Grade 5 Student</p>
            </div>

            <div className="min-w-[280px] bg-white text-black p-4 rounded-md shadow-2xl shadow-black/30">
              <p className="text-blue-500 text-lg font-bold mb-2">
                "Exciting Learning Journey with Blanklearn"
              </p>
              <p className="text-sm mb-4">
                Blanklearn ke live class ne mere bete ki learning experience ko ek naya mod diya hain! Ab woh fast and accurate concepts samajh pata hain.
              </p>
          
            <p className="font-bold text-gray-700">Parent of Arjun</p>
              <p className="text-sm text-gray-500">Grade 3 Student</p>
            </div>

            <div className="min-w-[280px] bg-white text-black p-4 rounded-md shadow-2xl shadow-black/30">
              <p className="text-blue-500 text-lg font-bold mb-2">
                "Personalized Mentor Support at Blanklearn"
              </p>
              <p className="text-sm mb-4">
                I'm so grateful for Blanklearn's 1-to-1 support. It made a huge difference for my daughter in 5th grade. She’s now confident and excelling!
              </p>
              <p className="font-bold text-gray-700">Parent of Neha</p>
              <p className="text-sm text-gray-500">Grade 5 Student</p>
            </div>

            <div className="min-w-[280px] bg-white text-black p-4 rounded-md shadow-2xl shadow-black/30">
              <p className="text-blue-500 text-lg font-bold mb-2">
                "Improved Confidence with Blanklearn"
              </p>
              <p className="text-sm mb-4">
                Blanklearn’s teaching methods have helped my son build confidence in math. Now he solves problems faster!
              </p>
              <p className="font-bold text-gray-700">Parent of Rahul</p>
              <p className="text-sm text-gray-500">Grade 4 Student</p>
            </div>

            {/* Add more unique reviews if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
