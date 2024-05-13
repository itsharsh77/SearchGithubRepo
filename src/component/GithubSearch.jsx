import React, { useState, useEffect } from "react";
import axios from "axios";
import GithubCard from "./GithubCard";

const GithubSearch = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [repoNotFound, setRepoNotFound] = useState(false);
  const [sort, setSort] = useState("stars");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&sort=${sort}`
      );
      if (response.data.items.length === 0) {
        setRepoNotFound(true);
        setRepos([]);
      } else {
        setRepoNotFound(false);
        setRepos(response.data.items);
      }
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setRepoNotFound(false);
      setRepos([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [sort]);

  const dropDownChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1.5 px-6 leading-8 transition-colors duration-200 ease-in-out mr-2"
          placeholder="Search.."
        />
        <button
          type="submit"
          className=" w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:bg-blue-800 text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          onClick={handleSearch}
        >
          Search
        </button>
        <div>
          <label htmlFor="sort" className="mx-2"></label>
          <select
            id="sort"
            value={sort}
            onChange={dropDownChange}
            className=" rounded border border-blue-600 bg-blue-300 px-8 py-4 text-sm font-medium text-black"
          >
            <option value="stars">Stars</option>
            <option value="watchers">Watchers</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
            <option value="created_at">Created At</option>
            <option value="updated_at">Updated At</option>
          </select>
        </div>
      </div>
      {repoNotFound && (
        <p className="flex justify-center text-3xl text-red-500">
          No repositories found.
        </p>
      )}
      <div className="grid grid-cols-3 gap-4">
        {repos.map((repo) => (
          <GithubCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default GithubSearch;

