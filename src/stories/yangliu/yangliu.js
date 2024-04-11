import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react'; // Import React
function YangliuButton({ onClick, count }) {
    return (_jsxs("button", { onClick: onClick, children: ["Yliu's count is ", count] }));
}
export default function YangliuContainer() {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (_jsxs("section", { className: 'y_section', style: { fontFamily: "cursive" }, children: [_jsx(YangliuButton, { count: count, onClick: handleClick }), _jsx(YangliuButton, { count: count, onClick: handleClick })] }));
}
