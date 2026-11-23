"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Profile from "@components/Profile";

const userProfile = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);

      const data = await response.json();

      setPosts(data);
      setUserName(data[0]?.creator?.username);
    
    };

    fetchPosts();
  }, [id]);

  return (
    <Profile
      name={userName || "user"}
      desc={`Welcome to user's profile `}
      data={posts}
    />
  );
};

export default userProfile;
