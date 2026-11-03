import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const PageContainer = styled.div`
  flex: 1;
  min-width: 0;
  min-height: calc(100vh - 70px);
  font-family: 'Roboto';
  background-color: ${props => {
    if (props.isDarkTheme) return props.isHome ? '#181818' : '#0f0f0f'
    return '#f9f9f9'
  }};
`

export const TitleBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ebebeb')};

  @media screen and (min-width: 768px) {
    padding: 28px 40px;
  }
`

export const TitleIconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  font-size: 24px;
  margin-right: 16px;
  color: #ff0000;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
`

export const TitleText = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const PageContent = styled.div`
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 24px 40px;
  }
`

export const VideosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`
