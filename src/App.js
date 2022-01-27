import React, { useRef, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import FeedPage from "./pages/feed.js";
import ExplorePage from "./pages/explore.js";
import EditProfilePage from "./pages/edit-profile.js";
import LoginPage from "./pages/login.js";
import NotFoundPage from "./pages/not-found.js";
import PostPage from "./pages/post.js";
import ProfilePage from "./pages/profile.js";
import SignUpPage from "./pages/signup.js";
import PostModal from "./components/post/PostModal";

function App() {
  const history = useHistory();
  const location = useLocation();
  const prevLocation = useRef(location);
  const modal = location.state?.modal;
  //console.log(history, location);

  useEffect(() => {
    if (history.action !== "POP" && !modal) {
      prevLocation.current = location;
    }
  }, [location, modal]);

  const isModalOpen = modal && prevLocation.current !== location;

  return (
    <>
      <Switch location={isModalOpen ? prevLocation.current : location}>
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
          <EditProfilePage history={history} />
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
      {isModalOpen && <Route exact path="/p/:postId" component={PostModal} />}
    </>
  );
}

export default App;
