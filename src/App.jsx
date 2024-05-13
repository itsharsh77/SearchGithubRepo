import React from "react";
import GithubSearch from "./component/GithubSearch";

const App = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center my-4 text-5xl font-semibold content-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent">
          Github Repository Search
        </h1>
        <GithubSearch />
      </div>
    </>
  );
};

export default App;
