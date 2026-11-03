import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css'

import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Gaming from './pages/Gaming'
import SavedVideos from './pages/SavedVideos'
import VideoDetails from './pages/VideoDetails'
import NotFound from './pages/NotFound'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
  }

  toggleTheme = () =>
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))

  toggleSaveVideo = video =>
    this.setState(prevState => {
      const isSaved = prevState.savedVideos.some(item => item.id === video.id)
      return {
        savedVideos: isSaved
          ? prevState.savedVideos.filter(item => item.id !== video.id)
          : [...prevState.savedVideos, video],
      }
    })

  render() {
    const {isDarkTheme, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedVideos,
          toggleSaveVideo: this.toggleSaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
