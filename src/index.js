import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Globalstyle from './style.js';
import IconfontStyle from './statics/iconfont/iconfont';

ReactDOM.render(<Fragment>
  <Globalstyle/>
  <IconfontStyle/>
  <App/>
</Fragment>, document.getElementById('root'));