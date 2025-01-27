import React, { useState } from 'react';
import styled from 'styled-components';
import { Product } from './model';
import ButtonComponent from './ButtonComponent';
import TotalComponent from './TotalComponent';

const AppComponent = styled.div`
  background-color: #000000;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media (orientation: portrait) {
    flex-wrap: wrap;
  }
  @media (orientation: landscape) {
    height: 100vh;
  }
  border: none;
  padding: 0;
`

const ButtonContainer = styled.div`
  flex: 2 1 auto;
    background-color: #e26464;

  @media (orientation: landscape) {
    height: 100%;
    max-width: 60vw;
  }
  @media (orientation: portrait) {
    height: 600px;
  }

  border: none;
  font-weight: bold;
`

function App() {

    const [selectedProducts, setSelectedProducts] = useState<Map<Product, number>>(new Map());

    const addProduct = (product: Product) => {
        const newSelectedProducts = new Map(selectedProducts);
        const currentAmount = newSelectedProducts.get(product) || 0;
        newSelectedProducts.set(product, currentAmount + 1);
        setSelectedProducts(newSelectedProducts);
    }

    const removeProduct = (product: Product) => {
        const newSelectedProducts = new Map(selectedProducts);
        const currentAmount = newSelectedProducts.get(product) || 0;
        const newAmount = currentAmount - 1;
        if (newAmount > 0) {
            newSelectedProducts.set(product, newAmount);
            setSelectedProducts(newSelectedProducts);
        } else {
            newSelectedProducts.delete(product);
            setSelectedProducts(newSelectedProducts);
        }
    }

    const resetProducts = () => {
        setSelectedProducts(new Map());
    }

    return (
    <AppComponent>
        <ButtonContainer>
            <ButtonComponent
                addProduct={addProduct}
                selectedProducts={selectedProducts}
            />
        </ButtonContainer>
        <TotalComponent
            addProduct={addProduct}
            removeProduct={removeProduct}
            resetProducts={resetProducts}
            selectedProducts={selectedProducts}
        />
    </AppComponent>
    );
}

export default App;
