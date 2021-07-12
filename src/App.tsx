import styled from 'styled-components';
import {ChallengeCards} from "components/ChallengeCards";

const StyledApp = styled.div`
  max-width: 1280px;
  margin: auto;
`

export default function App() {
  return (
    <StyledApp>
        <h1>Hi there :)</h1>
        <p>Nice to see you again.</p>
        <hr />
        <ChallengeCards />
    </StyledApp>
  );
}
