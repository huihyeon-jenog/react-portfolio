import React from "react";
import {
  BlogContainer,
  BlogItem,
  BlogImg,
  BlogTitle,
  BlogWrapper,
  BlogH2,
} from "./BlogElements";
import { blogObject } from "../Data";
const Blog = () => {
  return (
    <BlogContainer id="blog">
      <BlogH2>Blog</BlogH2>
      <BlogWrapper>
        {blogObject.map((item, index) => {
          const { blogImg, blogTitle, url } = item;
          return (
            <BlogItem key={index}>
              <a href={url}>
                <BlogImg src={blogImg} alt={blogTitle} />
              </a>
              <BlogTitle>{blogTitle}</BlogTitle>
            </BlogItem>
          );
        })}
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blog;
