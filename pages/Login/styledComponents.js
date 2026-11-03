import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  font-family: 'Roboto';
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const LoginCard = styled.form`
  width: 100%;
  max-width: 440px;
  padding: 40px 32px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0 4px 16px 0 rgba(7, 7, 7, 0.08)'};
`

export const LoginLogo = styled.img`
  width: 160px;
  align-self: center;
  margin-bottom: 32px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`

export const Input = styled.input`
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  border-radius: 2px;
  outline: none;
  border: 1px solid #94a3b8;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  font-size: 14px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const LoginButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: #ffffff;
  background-color: #3b82f6;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin: 8px 0 0 0;
`
