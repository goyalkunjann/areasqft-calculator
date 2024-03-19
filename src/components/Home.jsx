import React, { useState } from 'react';
import '../index.css';
import homeImage from '../assets/Houseimage.jpeg';

const Home = () => {
  const [floors, setFloors] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null); 
  const [length, setLength] = useState('');
  const [breadth, setBreadth] = useState('');
  const [totalCost, setTotalCost] = useState('');

  const plans = [
    { name: 'Basic', price: 999 },
    { name: 'Classic', price: 1700 },
    { name: 'Premium', price: 2200 },
    { name: 'Royal', price: 2500 }
  ];

  const calculateTotalCost = () => {
    if (!selectedPlan || !length || !breadth || !floors) {
      alert("Please fill all fields and select a plan.");
      return;
    }
    const area = length * breadth;
    const cost = area * selectedPlan.price * floors; 
    setTotalCost(cost);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-light-800">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${homeImage})`, height: '400px' }}>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl text-gray-800">Luxury Home Planner</h2>
            <p className="text-lg lg:text-xl text-gray-600">Create Your Dream Home</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Choose Your Plan:</h3>
            <div className="grid grid-cols-2 gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`cursor-pointer p-4 flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out ${selectedPlan && selectedPlan.name === plan.name ? 'ring-4 ring-gray-700' : 'bg-gray-200'}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <h4 className="text-md lg:text-lg font-semibold">{plan.name}</h4>
                  <p className="text-gray-700">₹{plan.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Length (m)"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-opacity-50"
            />
            <input
              type="number"
              value={breadth}
              onChange={(e) => setBreadth(e.target.value)}
              placeholder="Breadth (m)"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-opacity-50"
            />
            <div className="slider-container">
              <label htmlFor="floors" className="block text-gray-800 mb-2">Number of Floors: {floors}</label>
              <input
                id="floors"
                type="range"
                min="1"
                max="10"
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-black focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
              onClick={calculateTotalCost}
            >
              Calculate Total Cost
            </button>
            <div className="px-4 py-2 bg-gray-100 rounded border border-gray-300 text-gray-800">
              {totalCost ? `Total Cost: ₹${totalCost}` : 'Total Cost: ₹'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;