import React from 'react';
import { GlassCard } from './GlassContainer';
import '../styles/RecipeCard.css';

// PUBLIC_INTERFACE
/**
 * A recipe card component with glassmorphism effect
 * @param {Object} props - Component props
 * @param {string} props.image - URL of the recipe image
 * @param {string} props.name - Name of the recipe
 * @param {string} props.description - Description of the recipe
 * @param {string} props.cookTime - Cooking time for the recipe
 * @param {string[]} props.ingredients - List of ingredients
 * @returns {JSX.Element} - RecipeCard component
 */
const RecipeCard = ({ image, name, description, cookTime, ingredients }) => {
  return (
    <GlassCard className="recipe-card">
      <div className="recipe-image-container">
        <img src={image} alt={name} className="recipe-image" />
      </div>
      <div className="recipe-content">
        <h3 className="recipe-title">{name}</h3>
        <p className="recipe-description">{description}</p>
        
        <div className="recipe-details">
          <div className="recipe-time">
            <span className="recipe-detail-label">⏱️ Time:</span> {cookTime}
          </div>
          
          <div className="recipe-ingredients">
            <span className="recipe-detail-label">🥗 Ingredients:</span>
            <div className="ingredient-tags">
              {ingredients.slice(0, 3).map((ingredient, index) => (
                <span key={index} className="ingredient-tag">
                  {ingredient}
                </span>
              ))}
              {ingredients.length > 3 && (
                <span className="ingredient-tag more">
                  +{ingredients.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default RecipeCard;
