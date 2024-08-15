// src/components/ProductList.js
import React, { useState } from 'react';
import { Card, Button, List, Typography, InputNumber } from 'antd';

const { Title } = Typography;

const products = [
  { id: 1, name: 'Produit A', price: 100 },
  { id: 2, name: 'Produit B', price: 150 },
  { id: 3, name: 'Produit C', price: 200 },
];

const ProductList = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: value,
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
  };

  return (
    <div>
      <Title level={2}>Liste des Produits</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>
              <p>Prix: {item.price} TND</p>
              <InputNumber
                min={1}
                defaultValue={1}
                onChange={(value) => handleQuantityChange(item.id, value)}
              />
              <Button 
                type="primary" 
                onClick={() => handleAddToCart(item)} 
                style={{ marginTop: '10px', display: 'block' }}>
                Ajouter au panier
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductList;
