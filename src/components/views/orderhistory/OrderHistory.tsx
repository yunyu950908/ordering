/**
 * 订单历史
 */

import * as React from 'react';

export interface Props {
  orders: string[];
}

const OrderList = ({orders}: Props) => {
  const orderItems = orders.map(
    (item: string, key: number) => <li key={key}>{item}</li>
  );
  return <ul className="orders">{orderItems}</ul>;
};

const OrderHistory = () => {
  const orders: string[] = ['order-1', 'order-2', 'order-3'];
  return (
    <section id="order-history">
      <div className="history-container">
        <OrderList orders={orders}/>
      </div>
    </section>
  );
};

export default OrderHistory;
