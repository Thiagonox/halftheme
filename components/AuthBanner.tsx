import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Gamepad2 } from 'lucide-react';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 10px 40px rgba(255, 0, 200, 0.4); }
  50% { box-shadow: 0 10px 60px rgba(255, 0, 200, 0.6), 0 0 100px rgba(0, 255, 204, 0.3); }
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #ff00c8 0%, #9000ff 50%, #00ffcc 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  animation: ${glow} 3s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #ff00c8 0%, #00ffcc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #8085a6;
  margin: 0;
`;

const AuthBanner: React.FC = () => {
    return (
        <BannerContainer>
            <LogoWrapper>
                <Logo>
                    <Gamepad2 size={48} strokeWidth={1.5} />
                </Logo>
            </LogoWrapper>
            <Title>HalfCraft</Title>
            <Subtitle>Painel de Gerenciamento de Servidores</Subtitle>
        </BannerContainer>
    );
};

export default AuthBanner;
