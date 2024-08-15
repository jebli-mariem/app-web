// src/App.js
import React, { useState } from 'react';
import { Layout, Menu, Typography, Row, Col } from 'antd';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; // Pour les styles personnalisés

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      ));
    } else {
      setCart([...cart, product]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <Title level={2} style={{ color: '#fff', margin: 0 }}>Application de Panier</Title>
        </div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Accueil</Menu.Item>
          <Menu.Item key="2">Produits</Menu.Item>
          <Menu.Item key="3">Panier</Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Row gutter={16}>
          <Col xs={24} md={16}>
            <ProductList addToCart={addToCart} />
          </Col>
          <Col xs={24} md={8}>
            <Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
          </Col>
        </Row>
      </Content>
      <Footer className="footer">
        © 2024 Mon Application de Panier
      </Footer>
    </Layout>
  );
};

export default App;
