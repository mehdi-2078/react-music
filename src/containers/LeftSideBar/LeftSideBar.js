/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import logo from '../../assets/images/logo.jpg';
import { NavBar } from '../../components/NavBar/NavBar';

export function LeftSideBar() {
    const { theme } = useTheme();
    return (
      <div css={{
            width: '85%',
            margin: 'auto',
            paddingTop: '7%',
        }}
      >
        <div css={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
          <img
            src={logo}
            alt=''
            css={{ width: 30, height: 30, borderRadius: '50%' }}
          />
          <span css={{
                    marginLeft: 7,
                    fontSize: theme.typography.h5.fontSize,
                    fontWeight: 600,
                }}
          >
            Auditico
          </span>
        </div>
        <NavBar name='Home' iconName='FaHome' />
        <NavBar name='Favorite' iconName='FaRegHeart' />

      </div>
    );
}
