import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Dropdown.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import DropdownContainer from './DropdownContainer/DropdownContainer';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownContent from './DropdownContent/DropdownContent';
import DropdownItem from './DropdownItem/DropdownItem';
const Dropdown = ({ disabled, backgroundColor, boxShadow }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleDropdown = () => {
        setIsVisible(!isVisible);
    };
    return (_jsxs(DropdownContainer, { disabled: disabled, backgroundColor: backgroundColor, boxShadow: boxShadow, children: [_jsx(DropdownButton, { disabled: disabled, onClick: toggleDropdown, isVisible: isVisible, children: _jsx(FontAwesomeIcon, { icon: isVisible ? faTimes : faBars }) }), _jsxs(DropdownContent, { isVisible: isVisible, children: [_jsx(DropdownItem, { children: "About Me" }), _jsx(DropdownItem, { children: "Skills" }), _jsx(DropdownItem, { children: "Portfolio" })] })] }));
};
export default Dropdown;
