"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();

  const [copied, setCopied] = useState("");

  const isOwner = session?.user?.id === post.creator._id;
  const profileHref = isOwner ? "/profile" : `/profile/${post.creator._id}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(post.prompt);
      setCopied(post.prompt);
      setTimeout(() => setCopied(""), 3000);
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  const creatorInfo = (
    <div className="flex justify-start items-center gap-3">
      <Image
        src={post.creator.image}
        alt="user_image"
        width={40}
        height={40}
        className="rounded-full object-contain"
      />
      <h3 className="font-satoshi font-semibold text-gray-900">
        {post.creator.username}
      </h3>
    </div>
  );

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        {session?.user ? (
          <Link href={profileHref} className="flex-1 cursor-pointer">
            {creatorInfo}
          </Link>
        ) : (
          <div className="flex-1">{creatorInfo}</div>
        )}

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy_image"
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>

      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {isOwner && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
