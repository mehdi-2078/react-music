/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { Button } from 'components';
import { theme } from './configs/theme';

function App() {
    const propsButton = { buttonType: 'RedAutumn' };
    return (
      <ThemeProvider theme={{ theme }}>
        <div css={{ borderRadius: theme.borderRadius[5] }}>
          <Button {...propsButton}>Button</Button>
        </div>
      </ThemeProvider>
    );
}

export default App;
