import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// PUBLIC_INTERFACE
/**
 * Theme Provider component that manages the application's theme state
 * @param {Object} props - Component props
 * @returns {JSX.Element} - ThemeProvider component
 */
export function ThemeProvider({ children }) {
  // Get the initial theme from localStorage or default to 'dark'
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check if user prefers dark mode via system preferences
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPrefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };

  // Update the document's data-theme attribute and localStorage when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// PUBLIC_INTERFACE
/**
 * Custom hook to use the theme context
 * @returns {Object} Theme context object containing theme state and toggle function
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
