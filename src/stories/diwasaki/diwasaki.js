import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styled, { css } from 'styled-components';
let badCount = 0;
const Button = styled.button `
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;


  ${props => props.$pink &&
    css `
      background: '#BF4F74';
      color: white;
    `};
`;
function DiwasakiButton({ count, setCount }) {
    badCount++;
    return (_jsxs(Button, { "$pink": true, onClick: () => setCount((count) => count + 1), children: ["Diogo's count is ", count, ", but variable is ", badCount] }));
}
export default function DiwasakiContainer() {
    const [count, setCount] = useState(0);
    return (_jsxs("section", { className: "diogo-section", children: [_jsx(DiwasakiButton, { count: count, setCount: setCount }), _jsx(DiwasakiButton, { count: count, setCount: setCount })] }));
}
