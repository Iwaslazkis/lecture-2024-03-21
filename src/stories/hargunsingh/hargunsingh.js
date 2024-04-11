import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
function HargunsinghButton() {
    const [count, setCount] = useState(0);
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), style: { color: 'brown', backgroundColor: 'white', height: '50px', fontSize: '18px', border: 'solid black 5px', borderRadius: '20px', padding: '10px' }, children: ["Hargun's count is ", count] }));
}
export default function HargunsinghContainer() {
    return (_jsxs("section", { children: [_jsx(HargunsinghButton, {}), _jsx(HargunsinghButton, {})] }));
}
