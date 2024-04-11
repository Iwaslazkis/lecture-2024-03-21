import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function YingqiuButton() {
    const [count, setCount] = useState(0);
    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
    };
    return (_jsxs("button", { style: buttonStyle, onClick: () => setCount((count) => count + 1), children: ["Yingqiu's count is ", count] }));
}
