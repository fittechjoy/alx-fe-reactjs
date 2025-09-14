import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );
 const addFavorite = useRecipeStore((state) => state.addFavorite);

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
<button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;