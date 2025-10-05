import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-400 mt-20">Loading recipe...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-300 mb-6">{recipe.summary}</p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-300">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-300">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mb-1">{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
