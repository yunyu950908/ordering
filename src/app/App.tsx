import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import OrderHistory from '../components/views/orderhistory/OrderHistory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={OrderHistory} />
      </BrowserRouter>
    );
  }
}

export default App;
