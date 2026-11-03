import styled from 'styled-components'

export const DetailsContainer = styled.div`
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 24px 40px;
  }
`

export const PlayerWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`

export const VideoTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 12px 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const StatsRow = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewsText = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
  padding: 0;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`

export const ButtonIcon = styled.span`
  display: flex;
  font-size: 18px;
  margin-right: 6px;
`

export const Divider = styled.hr`
  margin: 12px 0 16px 0;
  border: none;
  border-top: 1px solid ${props => (props.isDarkTheme ? '#313131' : '#cbd5e1')};
`

export const ChannelRow = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 16px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  margin: 0 0 4px 0;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const Subscribers = styled.p`
  margin: 0 0 16px 0;
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#475569')};
`
