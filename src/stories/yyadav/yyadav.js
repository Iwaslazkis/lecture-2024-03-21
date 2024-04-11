import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function YyadavButton() {
    const [count, setCount] = useState(0);
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), style: { color: 'beige', backgroundColor: 'black' }, children: ["Yash's rep count ", count] }));
}
