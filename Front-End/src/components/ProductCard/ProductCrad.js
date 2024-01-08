import React from 'react';

const productCard = ({ title, description, price }) => {
    return (
        <div style={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
        </div>
  );
};