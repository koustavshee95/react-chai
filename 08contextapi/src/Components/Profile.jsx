import React, {useContext} from 'react'
import { UserContext } from '../Context/UserContext';



export const Profile = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {user.username} 🎉</h2>
            
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-red-600 mb-4">User not found!</h2>
            <p className="text-gray-600">Please sign up to access your profile.</p>
          </>
        )}
      </div>
    </div>
  );
}
