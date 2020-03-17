import React, { Component } from 'react'
import { Globalstyle } from './style'
import IconFontStyle from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle/>
        <IconFontStyle/>
        <Header/>
      </Provider>
    )
  }
}
