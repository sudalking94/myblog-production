import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const PostContainer = styled.div`
  padding-top: 50px;
  width: 50%;
  margin: 0 auto;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const PostTitle = styled.h2`
  font-weight: 600;
  margin-top: 100px;
  text-align: center;
`;

const CreatedAt = styled.span`
  margin: 10px 0;
  display: inline-block;
  width: 100%;
  text-align: end;
  font-size: smaller;
`;

const PostContentsContainer = styled.div`
  p,
  br,
  li {
    margin-bottom: 10px;
  }
  ol {
    list-style: decimal;
  }
  ul {
    list-style: unset;
  }
  li > ol {
    list-style: inside;
    list-style-type: decimal;
  }

  table {
    background-color: rgb(226, 220, 220);
    border-radius: 10px;
    display: block;
    padding: 10px 10px 0 10px;
  }
  table ul {
    list-style: inside;
  }
`;

const PostContents = styled.div`
  padding: 100px 0;
`;
const Section = styled.div``;

const PhotoContainer = styled.div`
  margin-bottom: 100px;
`;

const PhotoCaption = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const PhotoImg = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;

const PhotoDescription = styled.div`
  padding-top: 10px;
`;

const PostPresenter = ({ post, photos }) => {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <CreatedAt>
        <Moment format="YYYY년 MM월 DD일">{post.createdAt}</Moment>
      </CreatedAt>
      <PostContentsContainer>
        <PostContents dangerouslySetInnerHTML={{ __html: post.content }} />
        <Section>
          {photos.map((photo) => (
            <PhotoContainer key={photo.id}>
              <PhotoCaption>{photo.caption}</PhotoCaption>
              <PhotoImg bgUrl={`${photo.file}`} />
              <PhotoDescription
                dangerouslySetInnerHTML={{ __html: photo.content }}
              />
            </PhotoContainer>
          ))}
        </Section>
      </PostContentsContainer>
    </PostContainer>
  );
};

export default PostPresenter;
