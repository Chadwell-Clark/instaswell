import React from "react";
import { useParams } from "react-router-dom";

import Post from "../components/post/Post";
import Layout from "../components/shared/Layout";
import MorePostsFromUser from "../components/post/MorePostsFromUser";

function PostPage() {
  const { postId } = useParams();
  return (
    <Layout>
      <Post id={postId} />
      <MorePostsFromUser />
    </Layout>
  );
}

export default PostPage;
