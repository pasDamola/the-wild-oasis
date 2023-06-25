import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: large;
  font-weight: 500;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <H1>Trying out styled components</H1>;
    </>
  );
};

export default App;
