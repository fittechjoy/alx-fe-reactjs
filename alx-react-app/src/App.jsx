// src/App.jsx
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;
