import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import api from "../../services/api";

function RecipeGenerator(){

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('Any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('None');
    const [recipe, setRecipe] = useState('');

    const createRecipe = async () => {
         try {
            const response = await api.get(`recipe-creator`, {
                params: { 
                    ingredients, 
                    cuisine, 
                    dietaryRestrictions 
                }
            })

            const data = await response.data;
            console.log(data);
            setRecipe(data);
        } catch (error) {
            console.log("Error generating recipe: ", error);
        }
    };

    return (
        <div>
            <h2>Generate Recipe</h2>
            <input 
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients (comma separed)"/>

            <input 
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter cuisine type "/>

            <input 
                type="text"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder="Enter dietary restrictions (comma separed)"/>

            <button onClick={createRecipe}>Generate Recipe</button>
            <div className="output">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </div>
        </div>
    );
}
export default RecipeGenerator;