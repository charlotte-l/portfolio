import React from 'react';

import { Link } from 'gatsby';
import { Container } from '@chakra-ui/react';

import SEO from '../components/common/seo';

const PageNotFound = () => {
  return (
    <>
      <SEO title="404: Page Not Found" />
      <section id="hero" className="jumbotron">
        <Container>
          <h1 className="hero-title text-center">
            Sorry, this path does not exist{' '}
            <span role="img" aria-label="emoji">
              😞
            </span>
          </h1>
          <p className="hero-cta justify-content-center">
            <Link className="cta-btn cta-btn--hero" to="/">
              Go back
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
};

export default PageNotFound;