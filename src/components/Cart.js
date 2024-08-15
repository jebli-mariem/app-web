// src/components/Cart.js
import React from 'react';
import { List, Button, InputNumber, Typography } from 'antd';

const { Title } = Typography;

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  // Fonction pour calculer le montant total du panier
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Fonction pour calculer le montant total avec réduction
  const calculateDiscountedTotal = (total) => {
    if (total > 200) {
      return total * 0.9; // 10% de réduction
    } else if (total > 100) {
      return total * 0.95; // 5% de réduction
    } else {
      return total;
    }
  };

  // Calcul du total et du total avec réduction
  const total = calculateTotal();
  const discountedTotal = calculateDiscountedTotal(total);

  return (
    <div>
      <Title level={2}>Votre Panier</Title>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={item => (
          <List.Item
            actions={[
              <InputNumber 
                min={1} 
                defaultValue={item.quantity} 
                onChange={(value) => updateQuantity(item.id, value)} 
              />,
              <Button type="danger" onClick={() => removeFromCart(item.id)}>
                Supprimer
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`${item.price} TND x ${item.quantity}`}
            />
          </List.Item>
        )}
      />
      <div style={{ marginTop: '20px' }}>
        <Title level={3}>Total sans réduction: {total.toFixed(2)} TND</Title>
        <Title level={3}>Total avec réduction: {discountedTotal.toFixed(2)} TND</Title>
      </div>
    </div>
  );
};

export default Cart;
