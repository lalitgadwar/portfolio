import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

export const TypingAnimation = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
  className = '',
}: TypingAnimationProps) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    const speed = isDeleting ? backSpeed : typeSpeed;
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          if (loop || currentStringIndex < strings.length - 1) {
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, loop]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
