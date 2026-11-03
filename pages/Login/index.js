import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  InputGroup,
  Label,
  Input,
  CheckboxRow,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

const LIGHT_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const DARK_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  static contextType = NxtWatchContext

  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onToggleShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => this.setState({showError: true, errorMsg})

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    try {
      const response = await fetch('https://apis.ccbp.in/login', options)
      const data = await response.json()
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      this.onSubmitFailure('Something went wrong. Please try again.')
    }
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }

    const {isDarkTheme} = this.context
    const {username, password, showPassword, showError, errorMsg} = this.state

    return (
      <LoginContainer isDarkTheme={isDarkTheme}>
        <LoginCard isDarkTheme={isDarkTheme} onSubmit={this.onSubmitForm}>
          <LoginLogo
            src={isDarkTheme ? DARK_LOGO : LIGHT_LOGO}
            alt="website logo"
          />

          <InputGroup>
            <Label htmlFor="username" isDarkTheme={isDarkTheme}>
              USERNAME
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
              isDarkTheme={isDarkTheme}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password" isDarkTheme={isDarkTheme}>
              PASSWORD
            </Label>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
              isDarkTheme={isDarkTheme}
            />
          </InputGroup>

          <CheckboxRow>
            <Checkbox
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={this.onToggleShowPassword}
            />
            <CheckboxLabel htmlFor="showPassword" isDarkTheme={isDarkTheme}>
              Show Password
            </CheckboxLabel>
          </CheckboxRow>

          <LoginButton type="submit">Login</LoginButton>
          {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
