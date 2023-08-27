import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  height: 500px;
  margin: 0 auto;
  position: relative;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const SlideCard = styled.div`
  flex: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: black;
`;

const SliderButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
`;

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <SliderContainer>
      <SliderButton onClick={prevSlide}>&larr;</SliderButton>
      <SliderTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <SlideCard key={index}>{card}</SlideCard>
        ))}
      </SliderTrack>
      <SliderButton onClick={nextSlide}>&rarr;</SliderButton>
    </SliderContainer>
  );
};

export default Slider;