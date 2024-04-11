import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Content = styled.div `
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'}; /* Here, backgroundColor prop is used */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const DropdownContent = ({ backgroundColor, children, isVisible }) => {
    return _jsx(Content, { backgroundColor: backgroundColor, isVisible: isVisible, children: children });
    { /* Pass backgroundColor prop */ }
};
export default DropdownContent;
