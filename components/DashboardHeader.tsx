import React from 'react';
import styled from 'styled-components';
import { User, Server, Cpu, HardDrive, Bell, Settings, Activity } from 'lucide-react';

const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(30, 30, 63, 0.8) 0%, rgba(12, 12, 29, 0.9) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 0, 200, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const WelcomeSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

const Greeting = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #eceff4;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    background: linear-gradient(135deg, #ff00c8 0%, #00ffcc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #8085a6;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  background: rgba(21, 21, 48, 0.8);
  border: 1px solid rgba(46, 46, 94, 0.5);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  min-width: 130px;
  text-align: center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #ff00c8;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 0, 200, 0.15);
  }
`;

const StatIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  color: #00ffcc;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ffcc;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #8085a6;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const QuickActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #ff00c8 0%, #d600a8 100%);
  color: white !important;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 0, 200, 0.4);
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: rgba(30, 30, 63, 0.8);
  border: 1px solid rgba(46, 46, 94, 0.8);
  
  &:hover {
    border-color: #00ffcc;
    box-shadow: 0 8px 20px rgba(0, 255, 204, 0.2);
  }
`;

const DashboardHeader: React.FC = () => {
    const hour = new Date().getHours();
    let greeting = 'Olá';
    if (hour < 12) greeting = 'Bom dia';
    else if (hour < 18) greeting = 'Boa tarde';
    else greeting = 'Boa noite';

    return (
        <HeaderContainer>
            <WelcomeSection>
                <Greeting>
                    <Activity size={28} color="#ff00c8" />
                    {greeting}, <span>bem-vindo ao HalfCraft!</span>
                </Greeting>
                <Subtitle>
                    Gerencie seus servidores de forma rápida e intuitiva
                </Subtitle>
            </WelcomeSection>

            <StatsGrid>
                <StatCard>
                    <StatIcon><Server size={24} /></StatIcon>
                    <StatValue>0</StatValue>
                    <StatLabel>Servidores</StatLabel>
                </StatCard>
                <StatCard>
                    <StatIcon><Cpu size={24} /></StatIcon>
                    <StatValue>0%</StatValue>
                    <StatLabel>CPU</StatLabel>
                </StatCard>
                <StatCard>
                    <StatIcon><HardDrive size={24} /></StatIcon>
                    <StatValue>0%</StatValue>
                    <StatLabel>RAM</StatLabel>
                </StatCard>
            </StatsGrid>

            <QuickActions>
                <SecondaryButton href="/account">
                    <User size={18} />
                    Minha Conta
                </SecondaryButton>
                <SecondaryButton href="/account/api">
                    <Settings size={18} />
                    API
                </SecondaryButton>
            </QuickActions>
        </HeaderContainer>
    );
};

export default DashboardHeader;
