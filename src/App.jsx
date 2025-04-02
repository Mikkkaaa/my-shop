import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Container, Typography } from '@mui/material';
import ProductList from './components/ProductList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" sx={{ my: 4 }}>
        Интернет-магазин
      </Typography>
      


      <ProductList />
    </Container>
  );
}

export default App;