import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/shared/Layout.js";

function NotFoundPage() {
  return (
    <Layout minimalNavbar title="Page Not Found" marginTop={120}>
      <Typography variant="h5" align="center" paragraph>
        Sorry, this page is not available.
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        The link you followed may be broke or the page may have been removed.
        <Link to="/">
          {" "}
          <Typography color="primary" component="span">
            Go Back to Instawell
          </Typography>
        </Link>
      </Typography>
    </Layout>
  );
}

export default NotFoundPage;
