import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
let variable = 0;
export default function KylaButton() {
    const [count, setCount] = useState(0);
    variable++;
    return (_jsxs("button", { onClick: () => setCount((count) => count + 1), style: { backgroundColor: 'purple' }, children: ["Kyla's count is ", count, " ", variable] }));
}
