import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export function ToriloyeButton() {
    const [count, setCount] = useState(0);
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), style: { color: 'white', backgroundColor: 'green' }, children: ["Toyyib's count is ", count] }));
}
export default function ToriloyeContainer() {
    return (_jsxs("section", { className: "toyyib-section", children: [_jsx(ToriloyeButton, {}), _jsx(ToriloyeButton, {})] }));
}
