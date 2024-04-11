import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function DiwasakiButton() {
    const [count, setCount] = useState(0);
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), children: ["Lajwinder's  count is ", count] }));
}
