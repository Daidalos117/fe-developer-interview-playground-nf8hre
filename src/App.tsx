import styled from 'styled-components';
import { ChallengeCards } from 'components/ChallengeCards';
import { GlobalStyle } from 'GlobalStyle';

const StyledApp = styled.div`
    max-width: 990px;
    margin: auto;
`;

export default function App() {
    return (
        <StyledApp>
            <GlobalStyle />
            <h1>Hi there :)</h1>
            <p>Nice to see you again.</p>
            <hr />
            <ChallengeCards />
        </StyledApp>
    );
}
