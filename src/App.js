import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeedPage from "./pages/feed.js";
import ExplorePage from "./pages/explore.js";
import EditProfilePage from "./pages/edit-profile.js";
import LoginPage from "./pages/login.js";
import NotFoundPage from "./pages/not-found.js";
import PostPage from "./pages/post.js";
import ProfilePage from "./pages/profile.js";
import SignUpPage from "./pages/signup.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route exact path="/:username">
          <ProfilePage />
        </Route>
        <Route exact path="/p/:postId">
          <PostPage />
        </Route>
        <Route path="/accounts/edit">
          <EditProfilePage />
        </Route>
        <Route path="/accounts/login">
          <LoginPage />
        </Route>
        <Route path="/accounts/emailsignup">
          <SignUpPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
