import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function DsharmaButton() {
    const [count, setCount] = useState(0);
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), style: { color: 'beige', backgroundColor: 'black' }, children: ["Poutine - ", count, " / junior chicken 1"] }));
}
