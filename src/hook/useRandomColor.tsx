import { useState, useCallback } from 'react';

const colors = ['bg-yellow-500', 'bg-purple-500', 'bg-blue-600', 'bg-green-600'];

export const useRandomColor = () => {
  const [lastColor, setLastColor] = useState('');

  const getNextColor = useCallback(() => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastColor);

    setLastColor(newColor);
    return newColor;
  }, [lastColor]);

  return getNextColor;
};
