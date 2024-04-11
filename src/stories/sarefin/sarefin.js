import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
function SarefinButton({ incrementCount, count, label }) {
    return (_jsxs("button", { onClick: incrementCount, style: {
            backgroundColor: "#f0f0f0",
            color: "#000",
        }, children: [label, " - Count is: ", count] }));
}
function SarefinContainer() {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    return (_jsxs("div", { children: [_jsx(SarefinButton, { incrementCount: incrementCount, count: count, label: "Button 1" }), _jsx(SarefinButton, { incrementCount: incrementCount, count: count, label: "Button 2" })] }));
}
export default SarefinContainer;
