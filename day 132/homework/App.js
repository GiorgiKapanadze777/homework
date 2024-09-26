import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import { LanguageProvider } from './LanguageContext';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <Home />
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
