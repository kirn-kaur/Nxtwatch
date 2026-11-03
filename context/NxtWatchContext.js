import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  toggleSaveVideo: () => {},
})

export default NxtWatchContext
