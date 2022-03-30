/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import { RightBarItem } from 'components';
import { FaAngleDown } from 'react-icons/fa';

export function RightSideBar() {
    const { theme } = useTheme();
    return (
      <div css={{
            width: '94%', margin: 'auto', backgroundColor: 'transparent',
        }}
      >
        <div css={{
                marginTop: 30,
                backgroundColor: theme.colors.EerieBlack,
                borderRadius: theme.borderRadius[2],
                width: '94%',
                paddingTop: 10,
            }}
        >
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
            <RightBarItem />
                ))}
          <div css={{
                    textAlign: 'center',
                    color: theme.colors.GreyCloud,
                    fontSize: theme.typography.small.fontSize,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '5px 0',
                    cursor: 'pointer',
                    marginTop: 10,
                }}
          >
            <span>Expand</span>
            <FaAngleDown />
          </div>

        </div>
      </div>
    );
}
