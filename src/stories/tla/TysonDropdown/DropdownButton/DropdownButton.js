import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Button = styled.button `
  background-color: transparent;
  border: none;
  color: ${({ disabled }) => (disabled ? '#888' : 'white')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.75s ease-in-out;
  }

  &:hover {
    color: ${({ isVisible }) => (isVisible ? 'red' : 'green')};
  }
`;
const DropdownButton = ({ children, disabled, isVisible, onClick }) => {
    return (_jsx(Button, { "data-testid": "TlaDropdown", disabled: disabled, onClick: onClick, isVisible: isVisible, children: children }));
};
export default DropdownButton;
