import { useState, useEffect } from 'react';

const useAnimation = (initialState = false, delay = 0) => {
   const [isActive, setIsActive] = useState(initialState);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setIsActive(true);
      }, delay);

      return () => clearTimeout(timeoutId);
   }, [delay]);

   return isActive;
};

export default useAnimation;
