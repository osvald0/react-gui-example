import { useState } from 'react';
import { useHover } from 'react-gui/dist/exports/use-hover';

function useHoverState() {
  const [hovered, onHoverChange] = useState(false);
  const ref = useHover({ onHoverChange });
  return [ref, hovered];
};

export default useHoverState;