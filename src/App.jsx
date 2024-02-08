import React, { useState } from 'react';
import './App.css'
import { HiInformationCircle } from 'react-icons/hi';
import { FiAlertCircle } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";



function ButtonOne({ size, color, disabled }) {
  return (
    <button
      className={`rounded ${color} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ width: size, height: size * 0.5 }}
      disabled={disabled}
    >
      Button
    </button>
  );
}

const AlertOne = ({ color, icon: Icon, text }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <button onClick={handleAlert} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Show Alert
      </button>
      {showAlert && (
         <div className={`alert ${color} text-white font-bold rounded p-2 flex items-center`}>
          {Icon && <Icon className="mr-2" />}
          {text}
          <button onClick={() => setShowAlert(false)} className="ml-4 border border-transparent rounded-md p-1">Close</button>
        </div>
      )}
    </div>
  );
};

const BadgeComp = ({ color, size, icon: Icon, text }) => {
  return (
    <div className={`badge flex items-center ${color} text-white rounded px-2 py-1 text-sm`}>
      {Icon && <Icon className="mr-2" />}
      {text}
    </div>
  );
};

const CardComponent = ({ href, imgAlt, imgSrc, imgStyle, children }) => {
  return (
    <a href={href} className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex">
      <img src={imgSrc} alt={imgAlt} className="w-full h-32 object-cover" style={imgStyle} />
      <div className="p-4">
        {children}
      </div>
    </a>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-4 bg-gray-500">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Buttons</h2>
        <div className="flex space-x-4">
          <ButtonOne size={100} 
          color="bg-pink-300" disabled={false}
          />
          <ButtonOne size={80} 
          color="bg-teal-500" 
          disabled={true}
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Alerts</h2>
        <div className="flex space-x-4">
          <AlertOne 
          color="bg-red-800"
          icon={HiInformationCircle} 
          text="Warning! Unknown link!"
          />
          <AlertOne 
          color="bg-green-500" 
          icon={FiAlertCircle} 
          text="This is an alert."
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Badges</h2>
        <div className="flex space-x-4">
          <BadgeComp 
          color="bg-blue-800" 
          size="14px" 
          icon={FiMoon} 
          text="Dark Mode" 
          />
          <BadgeComp 
          color="bg-green-600" 
          size="20px" 
          icon={FiDownload} 
          text="Download" 
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Cards</h2>
        <div className="flex space-x-4 items-center">
          <CardComponent href="https://myhamster.com"
            imgSrc="https://i.imgur.com/blRkjW1.jpeg"
            imgAlt="Nessie"
            imgStyle={{ width: '100px', height: '100px' }}>
            <h2 className="text-lg font-semibold">Nessie, 1.5 years</h2>
            <p className="text-gray-300">I am a campbell dwarf hamster!</p>
          </CardComponent>
          <CardComponent href="https://mycat.com"
            imgSrc="https://i.imgur.com/A2elFGw.jpg?1"
            imgAlt="Nessie"
            imgStyle={{ width: '100px', height: '120px' }}>
            <h2 className="text-lg font-semibold">Jarvis, 7 years.</h2>
            <p className="text-gray-300">I am of the breed Russian Blue,</p>
            <p className="text-gray-300">my favorite snack is shrimp.</p>
          </CardComponent>
        </div>
      </div>
    </div>
  );
}

export default App
