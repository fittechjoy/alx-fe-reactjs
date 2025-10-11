import React from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        React Query Demo – Posts
      </h1>
      <PostsComponent />
    </div>
  );
}

export default App;
