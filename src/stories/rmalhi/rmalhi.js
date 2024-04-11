import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
// let badCount = 0
function RmalhiButton() {
    const [count, setCount] = useState(0);
    //badCount++
    return (_jsx("div", { children: _jsxs("button", { onClick: () => setCount((count) => count + 1), style: { backgroundColor: "lightblue", color: "black", fontFamily: "Jazz LET, fantasy" }, children: ["Robin's count is ", count] }) }));
}
export default function RmalhiContainer() {
    return (_jsxs("section", { className: "container", children: [_jsx(RmalhiButton, {}), _jsx(RmalhiButton, {})] }));
}
