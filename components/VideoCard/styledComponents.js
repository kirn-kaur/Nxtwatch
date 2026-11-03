import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardItem = styled.li`
  margin-bottom: 24px;
  list-style: none;
`

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    flex-direction: ${props => (props.layout === 'row' ? 'row' : 'column')};
  }
`

export const Thumbnail = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: ${props => (props.layout === 'row' ? '360px' : '100%')};
    max-width: ${props => (props.layout === 'row' ? '45%' : 'none')};
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 16px 0 16px;

  @media screen and (min-width: 768px) {
    padding: ${props => (props.layout === 'row' ? '0 0 0 20px' : '12px 0 0 0')};
  }
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    display: ${props => (props.layout === 'row' ? 'none' : 'block')};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  margin: 0 0 6px 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};

  @media screen and (min-width: 768px) {
    font-size: ${props => (props.layout === 'row' ? '18px' : '15px')};
  }
`

export const MetaText = styled.p`
  margin: 0 0 4px 0;
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`
