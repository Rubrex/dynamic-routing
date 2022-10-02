import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { title, body, id } = postDetails;
  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="bg-cyan-700 text-white text-2xl border-l-orange-600 border-2 pl-2">
        {title}
      </h2>
      <p className="text-lg mt-4">{body}</p>
    </div>
  );
};

export default PostDetails;
