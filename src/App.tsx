import React from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import './App.css'
const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Registration Form</h1>
      <RegistrationForm />
    </div>
  );
};

export default App;
