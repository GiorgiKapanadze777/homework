import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { UserContext } from '../UserContext';
import { LanguageContext } from '../LanguageContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, updateUser } = useContext(UserContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newLanguage, setNewLanguage] = useState(language);

  const handleUserUpdate = (e) => {
    e.preventDefault();
    updateUser(name, email);
  };

  return (
    <div className={`min-h-screen p-6 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-3xl mb-6">Context API Example</h1>
      
      {/* Theme Section */}
      <div className="mb-6">
        <h2 className="text-2xl">Current Theme: {theme}</h2>
        <button className="bg-blue-500 text-white p-2 mt-4" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>

      {/* User Section */}
      <div className="mb-6">
        <h2 className="text-2xl">User Information</h2>
        <form onSubmit={handleUserUpdate} className="flex flex-col space-y-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2"
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2"
            placeholder="Email"
          />
          <button type="submit" className="bg-green-500 text-white p-2 mt-2">
            Update User
          </button>
        </form>
        <p className="mt-4">Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      {/* Language Section */}
      <div>
        <h2 className="text-2xl">Current Language: {language}</h2>
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          className="border p-2"
          placeholder="Language Code"
        />
        <button className="bg-red-500 text-white p-2 mt-2" onClick={() => changeLanguage(newLanguage)}>
          Change Language
        </button>
      </div>
    </div>
  );
};

export default Home;
