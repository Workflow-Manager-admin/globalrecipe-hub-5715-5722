import React from 'react';

// PUBLIC_INTERFACE
/**
 * A reusable container component with glassmorphism effect
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child components
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} - GlassContainer component
 */
const GlassContainer = ({ className = '', children, style = {} }) => {
  return (
    <div 
      className={`glass-effect ${className}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

// PUBLIC_INTERFACE
/**
 * A glass card component with glassmorphism effect
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child components
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} - GlassCard component
 */
export const GlassCard = ({ className = '', children, style = {} }) => {
  return (
    <div 
      className={`glass-card ${className}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
