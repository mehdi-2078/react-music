/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { LeftSideBar, RightSideBar, Banner } from '../../containers/Index';
import { theme } from '../../configs/theme';

export function MainPage() {
    return (
      <div css={{
            width: '100%',
            height: '100vh',
            backgroundColor: theme.colors.CynicalBlack,
            color: theme.colors.Doctor,
        }}
      >
        <div css={{
                width: '15%',
                height: '100%',
                position: 'fixed',
                backgroundColor: theme.colors.DireWolf,
            }}
        >
          <LeftSideBar />
        </div>
        <div css={{
              width: '100%',
            display: 'flex',
          }}
        >
          <div css={{ width: '75%', backgroundColor: 'black', margin: 'auto' }}>
            <Banner />
          </div>
          <div css={{ width: '25%', backgroundColor: theme.colors.CynicalBlack }}>
            <RightSideBar />
          </div>
        </div>
      </div>
    );
}
