import { useState } from "react";

export const UseToogle = (initial = false) => {
  const [state, setState] = useState(initial);

  const Toogle = () => {
    setState(!state);
  };

  return { state, Toogle };
};
