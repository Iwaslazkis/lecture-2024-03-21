import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
// let badCount = 0
function MyButton() {
    const [count, setCount] = useState(0);
    //badCount++
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), style: { backgroundColor: "palevioletred" }, children: ["Prabh's count is ", count] }));
}
export default function MyContainer() {
    return (_jsxs("section", { className: "container", children: [_jsx(MyButton, {}), _jsx(MyButton, {})] }));
}
