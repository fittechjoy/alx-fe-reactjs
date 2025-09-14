import { BrowserRouter as Router, Router, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div>
      <h1>🍲 Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar/>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </div>
  );
}

export default App;