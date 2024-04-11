import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
export function SquitiaquezButton() {
    const [count, setCount] = useState(0);
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), style: { backgroundColor: "black", color: "white", fontFamily: "Arial" }, children: ["Sebastian's count ", count] }));
}
export default function SquitiaquezContainer() {
    return (_jsxs(_Fragment, { children: [_jsx(SquitiaquezButton, {}), _jsx(SquitiaquezButton, {})] }));
}
