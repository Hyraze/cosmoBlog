import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Our Aim 
                 To Provide All Premium Course of Lynda,Udemy,Linuxacademy,Udacity,Udemy Coupons 
                 and Discounted Coupon Codes for Udemy Courses and other relevant online products.
    
              </p>
              <p>
              Our Activity
                 COSMOTORY provides best educational coupons including: Udemy Coupon Codes, 
                 100% Off Udemy course coupons, Udemy Discount Coupons other Domain and 
                 Hosting related Coupons, ebook coupons and other deals. We updates the Coupons Daily.
                 In some case we might not be able to give the course for 100% off 
                 in such situation we may upload the course to third party servers like Drive,Dropbox,Mega.nz..etc
                 
                 We receive online courses coupons from teachers and instructors by allowing them 
                 to submit their Udemy coupons for FREE through COSMOTORY
              </p>
    
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
