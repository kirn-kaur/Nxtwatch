import styled from 'styled-components'

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
`

export const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const BannerLogo = styled.img`
  width: 120px;
  margin-bottom: 16px;
`

export const BannerText = styled.p`
  font-size: 16px;
  max-width: 320px;
  margin: 0 0 16px 0;
  color: #1e293b;
`

export const GetItButton = styled.button`
  background: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #1e293b;
`

export const HomeContent = styled.div`
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 24px 40px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  max-width: 480px;
  margin-bottom: 24px;
  border: 1px solid ${props => (props.isDarkTheme ? '#424242' : '#cbd5e1')};
`

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 8px 16px;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  border: none;
  border-left: 1px solid ${props => (props.isDarkTheme ? '#424242' : '#cbd5e1')};
  cursor: pointer;
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#475569')};
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f4f4f4')};
`

export const VideosGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
