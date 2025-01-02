import React from 'react';
import LoginForm from './components/LoginForm';
import OTPScreen from './components/OtpScreen';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import UpdateForm from './components/UpdateForm';
import AdminDashboard from './components/Admin-Dashboard';



function App() {
  const handleLogin = (email, password) => {
    console.log('Login attempt:', { email, password });
    // Handle login logic here
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-[#B8C4C2]">
      <div className="w-full max-w-md p-8 mx-4">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-[#B8C4C2]">
    <div className="w-full max-w-md p-8 mx-4">
      <OTPScreen/>
    </div>
  </div>

  <Dashboard/>
  <ProfilePage/>
  <UpdateForm/>
  <AdminDashboard/>
  </>
  );
 
}

export default App;