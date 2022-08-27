import { useRef, useState, useEffect } from "react";

const useOutside = (value: boolean) => {
  const [isFocus, setIsFocus] = useState<boolean>(value);
  const ref = useRef<any>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return [ref, isFocus, setIsFocus];
};

export default useOutside;
