import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
// Assuming getRandomColor is defined at the same level as before
const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'pink', 'orange', 'yellow', 'indigo'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};
const StyledButton = styled.button `
  background-color: ${(props) => (props.isHovered ? getRandomColor() : props.initialBgColor)};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
function TysonButton({ backgroundColor = 'blue', count, setCount, }) {
    const [isHovered, setIsHovered] = useState(false);
    return (_jsxs(StyledButton, { isHovered: isHovered, initialBgColor: backgroundColor, onClick: () => setCount(count + 1), onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: ["Tyson's count is: ", count] }));
}
// DiwasakiContainer component definition
function TysonContainer({ backgroundColor }) {
    const [count, setCount] = useState(0);
    return (_jsxs("section", { className: "diogo-section", children: [_jsx(TysonButton, { backgroundColor: backgroundColor, count: count, setCount: setCount }), _jsx(TysonButton, { backgroundColor: "blue", count: count, setCount: setCount })] }));
}
export default TysonContainer;
