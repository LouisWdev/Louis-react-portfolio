import React, { useState } from 'react';
import styled from 'styled-components';

// Define the card data (you can replace this with your own data)
const cardData = [
  { title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
  { title: 'Card 2', content: 'Consectetur adipiscing elit.' },
  { title: 'Card 3', content: 'Sed do eiusmod tempor incididunt.' },
  // Add more cards as needed
];

const CardSliderContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  max-width: 600px; /* Adjust the width as needed */
  margin-top: 10%;
  margin-left: 20%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  margin: 0 10px;
  padding: 16px;
  width: 300px; /* Adjust the card width as needed */
`;

const Slider = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handlePrev = () => {
    setActiveCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setActiveCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, cardData.length - 1)
    );
  };

  return (
    <div>
      <h2>Card Slider</h2>
      <CardSliderContainer>
        {cardData.map((card, index) => (
          <Card
            key={index}
            style={{
              transform: `translateX(${(index - activeCardIndex) * 320}px)`, // Adjust the card width
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </Card>
        ))}
      </CardSliderContainer>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slider;
