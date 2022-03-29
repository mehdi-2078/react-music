/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { FaEllipsisH, FaRegHeart, FaSearch } from 'react-icons/fa';
import bannerImage from '../../assets/images/kevin-britos-PHYgBreyeYc-unsplash-min.jpg';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components';

export function Banner() {
    const { theme } = useTheme();

    const Container = styled.div({
        position: 'relative',
        backgroundColor: 'transparent',
        width: '80%',
        height: '454px',
        margin: 'auto',
        display: 'flex',
        borderRadius: theme.borderRadius[3],
        marginTop: 10,
        border: 0,
    });

    const Image = styled.img({
        position: 'absolute',
        width: '100%',
        height: 'inherit',
        borderRadius: theme.borderRadius[3],

    });

    const Overlay = styled.div`
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      position: absolute;
      height: 454px;
      width: 100%;
      border-radius: 8px;
    `;
    const ButtonStyles = {
        height: 36, width: 96,
    };

    return (
      <Container>
        <Image
          src={bannerImage}
          alt=""
        />
        <Overlay />

        <div css={{
                marginTop: '3%',
                width: '50%',
                height: '48px',
                margin: '30px auto 0',
                boxShadow: theme.boxShadow.light,
                opacity: 0.9,
                backgroundColor: theme.colors.White,
                textAlign: 'left',
                borderRadius: theme.borderRadius[3],
                display: 'flex',
                alignItems: 'center',
            }}
        >
          <FaSearch css={{ margin: 10 }} color={theme.colors.DireWolf} size={20} />
          <Input
            placeholder='Search artists, songs, albums...'
          />
        </div>
        <div css={{
                position: 'absolute', top: '50%', left: '2%', color: '#959D99',
            }}
        >
          <h5 css={{ margin: '10px 0' }}>pop</h5>
          <h5 css={{ margin: '10px 0' }}>jaz</h5>
          <h5 css={{ margin: '10px 0' }}>rock</h5>
          <h5 css={{ margin: '10px 0' }}>rap</h5>
        </div>
        <div css={{
                position: 'absolute', top: '50%', right: '2%', color: '#959D99',
            }}
        >
          <div css={{ display: 'flex', flexDirection: 'column', direction: 'rtl' }}>
            <span css={{
                fontWeight: '700',
                fontSize: theme.typography.h5.fontSize,
                color: theme.colors.Doctor,
            }}
            >
              FEATURED SONGS
            </span>
            <span css={{
                        marginTop: 20,
                        fontSize: theme.typography.h4.fontSize,
                        color: theme.colors.Doctor,
                    }}
            >
              Post Malone
            </span>
            <span css={{
                        marginTop: 5,
                        fontWeight: '700',
                        fontSize: theme.typography.h3.fontSize,
                        color: theme.colors.Doctor,
                    }}
            >
              Circles
            </span>
            <div css={{ display: 'flex', alignItems: 'center', marginTop: 70 }}>
              <Button {...ButtonStyles} buttonType='RedAutumn'>
                play
              </Button>
              <FaRegHeart css={{ margin: '0 30px' }} size={25} />
              <FaEllipsisH size={25} />
            </div>

          </div>
        </div>
      </Container>
    );
}
