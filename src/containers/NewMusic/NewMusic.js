/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { NewMusicItem } from 'components';
import { FaPlayCircle } from 'react-icons/fa';
import { Wrapper } from 'utils';

export function NewMusic() {
    const { theme } = useTheme();
    return (
      <Wrapper>
        <div css={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <span css={{ marginRight: 10 }}>New Releases</span>
            <FaPlayCircle color={theme.colors.RedAutumn} />
          </div>
          <span css={{
                    fontSize: theme.typography.small.fontSize,
                    color: theme.colors.RedAutumn,
                }}
          >
            see more
          </span>
        </div>
        <div css={{
                margin: '10 0', display: 'flex', overflowX: 'auto',
            }}
        >
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
            <NewMusicItem key={index} />
                ))}
        </div>
      </Wrapper>
    );
}
