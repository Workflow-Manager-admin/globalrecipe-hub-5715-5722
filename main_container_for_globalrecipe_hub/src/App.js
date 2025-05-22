import React from 'react';
import './App.css';
import './styles/theme.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import GlassContainer, { GlassCard } from './components/GlassContainer';
import RecipeCard from './components/RecipeCard';
import sampleRecipes from './data/sampleRecipes';

// Main App content wrapped with ThemeContext
const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <nav className="navbar glass-navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">
              <span className="logo-symbol">🍲</span> GlobalRecipe Hub
            </div>
            <div className="nav-actions">
              <ThemeToggle />
              <button className="btn">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <div className="hero">
            <div className="subtitle text-accent">Discover Global Flavors</div>
            
            <h1 className="title">GlobalRecipe Hub</h1>
            
            <div className="description">
              Explore recipes from around the world, save your favorites,
              and share your culinary creations with the global community.
            </div>
          </div>
          
          <div className="features-container">
            <GlassCard className="feature-card">
              <h3>Discover Recipes</h3>
              <p>Browse through thousands of recipes from different cuisines worldwide.</p>
            </GlassCard>
            
            <GlassCard className="feature-card">
              <h3>Save Favorites</h3>
              <p>Save your favorite recipes to your personal cookbook for easy access.</p>
            </GlassCard>
            
            <GlassCard className="feature-card">
              <h3>Cooking Instructions</h3>
              <p>Step-by-step cooking instructions with timing and preparation details.</p>
            </GlassCard>
          </div>
          
          <GlassContainer className="search-container">
            <input 
              type="text" 
              placeholder="Search recipes, ingredients, or cuisines..." 
              className="search-input"
            />
            <button className="btn search-btn">Search</button>
          </GlassContainer>
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 GlobalRecipe Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Wrapping the app with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
