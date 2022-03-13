import React, { useState, lazy, Suspense } from "react";
import { Hidden } from "@material-ui/core";

import { useFeedPageStyles } from "../styles";
import UserCard from "../components/shared/UserCard";
import Layout from "../components/shared/Layout";
import { getDefaultPost } from "../data.js";
import FeedPostSkeleton from "../components/feed/FeedPostSkeleton";
import FeedSideSuggestions from "../components/feed/FeedSideSuggestions";
import LoadingScreen from "../components/shared/LoadingScreen";
import { LoadingLargeIcon } from "../icons";

const FeedPost = lazy(() => import("../components/feed/FeedPost"));

function FeedPage() {
  const classes = useFeedPageStyles();
  const [isEndOfFeed] = useState(false);
  let loading = false;
  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <div className={classes.container}>
        {/* Feed Posts */}
        <div>
          {Array.from({ length: 5 }, () => getDefaultPost()).map(
            (post, index) => (
              <Suspense key={post.id} fallback={<FeedPostSkeleton />}>
                <FeedPost post={post} index={index} />
              </Suspense>
            )
          )}
        </div>
        {/* SideBar */}
        <Hidden smDown>
          <div className={classes.sidebarContainer}>
            <div className={classes.sidebarWrapper}>
              <UserCard avatarSize={50} />
              <FeedSideSuggestions />
            </div>
          </div>
        </Hidden>
        {!isEndOfFeed && <LoadingLargeIcon />}
      </div>
    </Layout>
  );
}

export default FeedPage;
