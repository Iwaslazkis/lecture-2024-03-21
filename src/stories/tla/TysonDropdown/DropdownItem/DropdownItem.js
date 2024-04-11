import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Item = styled.div `
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
const DropdownItem = ({ children }) => {
    return _jsx(Item, { children: children });
};
export default DropdownItem;
