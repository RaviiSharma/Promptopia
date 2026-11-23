"use client";
import { useState, useEffect, useMemo } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("/api/prompt")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load prompts");
        return res.json();
      })
      .then(setAllPosts)
      .catch(console.error);
  }, []);

  // debounce: update debouncedText 400ms after the user stops typing
  useEffect(() => {
    const id = setTimeout(() => setDebouncedText(searchText), 400);
    return () => clearTimeout(id); // cleanup replaces clearTimeout + state hack
  }, [searchText]);

  const visiblePosts = useMemo(() => {
    const q = debouncedText.trim().toLowerCase();
    if (!q) return allPosts;
    return allPosts.filter(
      (p) =>
        p.creator.username.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q),
    );
  }, [allPosts, debouncedText]);

  const handleTagClick = (tag) => {
    setSearchText(tag);
    setDebouncedText(tag); // skip the delay on a click
  };

  return (
    <section className="feed">
      <form
        className="relative w-full flex-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={visiblePosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
