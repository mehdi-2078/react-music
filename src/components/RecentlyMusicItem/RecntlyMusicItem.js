/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { Wrapper } from 'utils';
import { FaEllipsisH, FaRegHeart } from 'react-icons/fa';
import bannerImage from '../../assets/images/kevin-britos-PHYgBreyeYc-unsplash-min.jpg';

export function RecentlyMusicItem() {
    const { theme } = useTheme();
    return (
      <Wrapper>
        <div css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: theme.colors.Gray,
                fontWeight: theme.typography.paragraph.fontWeight,
                fontSize: theme.typography.paragraph.fontSize,
                marginBottom: 20,
            }}
        >
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <span css={{ marginRight: 10, color: theme.colors.GreyCloud, fontSize: '15px' }}>1</span>
            <img
              src={bannerImage}
              alt=''
              css={{
                        width: '50px',
                        height: '50px',
                        borderRadius: theme.borderRadius[1],
                        marginRight: 10,
                    }}
            />
            <div>
              <div css={{ fontSize: '13px', marginBottom: 5 }}>Easy On Me</div>
            </div>
          </div>
          <div css={{ color: theme.colors.GreyCloud, fontSize: '13px' }}>Adele</div>
          <div css={{ color: theme.colors.GreyCloud, fontSize: '13px' }}>album</div>
          <div css={{ display: 'flex' }}>
            <span css={{ fontSize: 15 }}>3:45</span>
            <FaRegHeart size={15} css={{ margin: '0 13px', color: theme.colors.Gray }} />
            <FaEllipsisH size={15} css={{ color: theme.colors.GreyCloud }} />
          </div>

        </div>
      </Wrapper>
    );
}
