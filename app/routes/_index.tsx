import type { V2_MetaFunction } from "@remix-run/react";
import styled from "styled-components";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

const FancyButton = styled.button`
  background-color: hotpink;
  border-color: black;
  border-radius: 10px;
  font-size: 30px;
  height: 150px;
  width: 300px;

  :hover {
    background-color: lightblue;
  }
`;

const Index = () => (
  <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>Welcome to Remix</h1>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://remix.run/tutorials/blog"
          rel="noreferrer"
        >
          Banana Split
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://remix.run/tutorials/jokes"
          rel="noreferrer"
        >
          Deep Dive Jokes App Tutorial
        </a>
      </li>
      <li>
        <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
          Remix Docs
        </a>
      </li>
    </ul>
    <FancyButton onClick={() => alert("This is fancy button speaking.")}>
      My Fancy Button
    </FancyButton>
  </div>
);

export default Index;
