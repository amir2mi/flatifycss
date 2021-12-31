/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

function NotFound() {
  return (
    <Layout
      title={translate({
        id: "theme.NotFound.title",
        message: "Page Not Found",
      })}
    >
      <main className="container margin-vert--xl">
        <div className="row text-center">
          <div className="col col--6 col--offset-3" style={{paddingTop: '3em'}}>
            <h1 className="hero__title size-5x">
              <Translate id="theme.NotFound.title" description="The title of the 404 page">
                Page Not Found
              </Translate>
            </h1>
            <p className="homepage-subtitle size-lg">
              <Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
                We could not find what you were looking for.
              </Translate>
            </p>
            <Link
              to="/"
              className={`get-started-button button bordered size-lg style-light color-dark-light`}
            >
              <Translate id="theme.NotFound.button" description="The button text of the 404 page">
                Go to homepage
              </Translate>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
