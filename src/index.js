import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycleMethods from './LifeCycleMethods';
import Myapp1 from './Myapp1';
import Myapp2 from './MyApp2';
const s = "Welcome To React "


ReactDOM.render(
  <div>
  {s}
  <LifeCycleMethods/>
  <Myapp1/>
  <Myapp2/>
  </div>
  ,
  document.getElementById('root')
);


