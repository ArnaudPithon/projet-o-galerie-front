"use client";

interface AlphabetFilterProps {
  onLetterClick?: (letter: string) => void;
}

export default function AlphabetFilter({onLetterClick} : AlphabetFilterProps) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  return (
      <div className="flex flex-wrap justify-center space-x-5">
            {alphabet.map(letter => (
              <button
                key={letter}
                className="text-xl transform transition-transform duration-200 focus:outline-none"
                style={{ transition: 'transform 200ms', transform: 'scale(1)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(2)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => onLetterClick && onLetterClick(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
  );
}