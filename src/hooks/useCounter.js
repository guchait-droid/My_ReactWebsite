import { useState, useEffect } from "react";

const useCounter = (end, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration * 10)); 
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 1000 / 10); 
    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};

export default useCounter;
