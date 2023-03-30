import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        background-color: #1d1d1d;
        color: #fff;
        font-size: 1.6rem;
        line-height: 1.5;
        display: block;
        min-width: 320px;
        font-family: -apple-system, BlinkMacSystemFont,
        'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Home />
        </>
    );
}

export default App;
