/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { FaEllipsisH, FaRegHeart } from 'react-icons/fa';
import bannerImage from '../../assets/images/kevin-britos-PHYgBreyeYc-unsplash-min.jpg';

export function RightBarItem() {
    const { theme } = useTheme();
    return (
      <div css={{
            display: 'flex', alignItems: 'center', width: '90%', margin: 'auto',
        }}
      >
        <span css={{ marginRight: 5, color: theme.colors.GreyCloud, fontSize: '15px' }}>1</span>
        <div css={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid #313533',
            }}
        >
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={bannerImage}
              alt=''
              css={{
                  width: '50px',
                  height: '50px',
                  borderRadius: theme.borderRadius[1],
                  marginRight: 5,
              }}
            />
            <div>
              <div css={{ fontSize: '13px', marginBottom: 5 }}>Easy On Me</div>
              <div css={{ color: theme.colors.GreyCloud, fontSize: '13px' }}>Adele</div>
            </div>
          </div>
          <div css={{ display: 'flex' }}>
            <span css={{ fontSize: 15 }}>3:45</span>
            <FaRegHeart size={15} css={{ margin: '0 13px', color: theme.colors.Gray }} />
            <FaEllipsisH size={15} css={{ color: theme.colors.GreyCloud }} />
          </div>
        </div>
      </div>
    );
}
