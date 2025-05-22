import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

// PUBLIC_INTERFACE
/**
 * A toggle switch component for switching between dark and light themes
 * @returns {JSX.Element} - ThemeToggle component
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="toggle-track">
          <div className={`toggle-thumb ${theme === 'dark' ? 'toggled' : ''}`}>
            {/* Sun icon for light mode */}
            <span className="toggle-icon light-icon">
              {theme === 'light' && "☀️"}
            </span>
            
            {/* Moon icon for dark mode */}
            <span className="toggle-icon dark-icon">
              {theme === 'dark' && "🌙"}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
