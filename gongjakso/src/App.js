import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
    return (
        <div className="container">
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Router />
            </ThemeProvider>
        </div>
    );
}
export default App;
