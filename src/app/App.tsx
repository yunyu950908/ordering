import * as React from 'react';
import './App.css';
import { Button } from 'antd';
import OrderHistory from '../components/views/orderhistory/OrderHistory';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        hello world
        <div className="btn">
          <Button type="primary">Button</Button>
        </div>
        <OrderHistory/>
      </div>
    );
  }
}

export default App;
