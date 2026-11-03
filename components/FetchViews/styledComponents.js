import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50vh;
`

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  min-height: 50vh;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Roboto';
`

export const StatusImage = styled.img`
  width: 100%;
  max-width: 360px;
`

export const StatusHeading = styled.h1`
  font-size: 22px;
  margin: 24px 0 8px 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const StatusText = styled.p`
  font-size: 14px;
  max-width: 400px;
  margin: 0 0 16px 0;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#475569')};
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 24px;
  font-size: 14px;
  cursor: pointer;
`
