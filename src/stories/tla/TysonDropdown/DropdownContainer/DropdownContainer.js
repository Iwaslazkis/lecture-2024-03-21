import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Container = styled.div `
  position: relative;
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#aaa' : backgroundColor || 'gray')};
  color: black;
  width: 25px;
  height: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ boxShadow }) => boxShadow || '5px 2px 4px rgba(0, 0, 0, 0.75)'};
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
const DropdownContainer = ({ children, disabled, backgroundColor, boxShadow }) => {
    return (_jsx(Container, { disabled: disabled, backgroundColor: backgroundColor, boxShadow: boxShadow, children: children }));
};
export default DropdownContainer;
