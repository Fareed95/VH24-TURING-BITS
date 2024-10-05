import React, { useEffect } from "react";

<<<<<<< HEAD
 const useOutsideClick = (
=======
export const useOutsideClick = (
>>>>>>> origin/main
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
<<<<<<< HEAD
export default useOutsideClick;
=======
>>>>>>> origin/main
