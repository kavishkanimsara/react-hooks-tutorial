

import React, { Component ,createContext } from 'react'

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isDarkMode: true,
        light : {syntax : '#555', ui: '#ddd', bg: '#eee'},
        dark : {syntax : '#ddd', ui: '#333', bg: '#555'},
        
    }

    //update state
    toggleTheme = () => {
        this.setState({isDarkMode: !this.state.isDarkMode})}
  render() {
    return (
      <ThemeContext.Provider value={{...this.state ,toggleTheme :this.toggleTheme}}>
        {this.props.children}
        </ThemeContext.Provider>
    )
  }
}

