/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { theme } from './configs/theme';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
    return (
      <ThemeProvider theme={{ theme }}>
        <MainPage />
      </ThemeProvider>
    );
}

export default App;
