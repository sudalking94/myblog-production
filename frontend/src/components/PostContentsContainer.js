import React from "react";
import styled from "styled-components";

const Contents = styled.div`
  line-height: 2em;
  ol {
    list-style: decimal;
  }
  ul {
    list-style: unset;
  }
  li,
  li > ol {
    list-style: inside;
  }

  table {
    background-color: rgb(226, 220, 220);
    border-radius: 10px;
    display: block;
    padding: 10px;
    overflow-x: scroll;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  table ul {
    list-style: inside;
  }
`;

const PostContentsContainer = ({ children }) => {
  return <Contents>{children}</Contents>;
};

export default PostContentsContainer;
