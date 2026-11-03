import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const GameItem = styled.li`
  list-style: none;
`

export const GameLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const GameThumbnail = styled.img`
  width: 100%;
  object-fit: cover;
`

export const GameTitle = styled.p`
  margin: 10px 0 4px 0;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const GameViews = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`
