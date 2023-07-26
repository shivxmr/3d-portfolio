import React, { useEffect, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function AnimazingText() {
  const [hackedText, setHackedText] = useState('SHIVAM RAJ');
  const textValue = 'SHIVAM RAJ';

  useEffect(() => {
    let interval = null;
    let iterations = 0;

    interval = setInterval(() => {
      setHackedText((prevHackedText) => {
        return prevHackedText
          .split('')
          .map((letter, index) => {
            if (index < iterations) {
              return textValue[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');
      });

      if (iterations >= textValue.length) clearInterval(interval);

      iterations += 1 / 8;
    }, 30);

    return () => clearInterval(interval);
  }, [textValue]);

  return (
    <h1 className="text-spotifyWhite text-4xl font-spaceMono sm:text-5xl">
      {hackedText}
    </h1>
  );
}
