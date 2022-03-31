/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import { RecentlyMusicItem, RightBarItem } from 'components';
import { FaPauseCircle } from 'react-icons/fa';

export function RecentlyPlayed() {
    const { theme } = useTheme();
    return (
      <div css={{ marginTop: 40 }}>
        <div css={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
          <span css={{ marginRight: 10 }}>RecentlyPlayed</span>
          <FaPauseCircle color={theme.colors.RedAutumn} />
        </div>
        {[1, 1, 1].map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
          <RecentlyMusicItem />
          ))}
      </div>

    );
}
