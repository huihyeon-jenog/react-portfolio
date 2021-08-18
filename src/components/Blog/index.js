import React from "react";
import {
    BlogContainer,
    BlogItem,
    BlogImg,
    BlogTitle,
    BlogWrapper,
} from "./BlogElements";
import { blogObject } from "../Data";
const Blog = () => {
    return (
        <BlogContainer id="blog">
            <h2 className="sectionTitle_odd ">Blog</h2>
            <BlogWrapper>
                {blogObject.map((item, index) => {
                    const { blogImg, blogTitle, url } = item;
                    return (
                        <BlogItem key={index}>
                            <a href={url} target="blank">
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
