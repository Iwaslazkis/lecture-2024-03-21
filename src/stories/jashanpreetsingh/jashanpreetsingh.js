import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
function JashanpreetButton({ name }) {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    return (_jsxs("button", { onClick: incrementCount, style: {
            color: 'Red',
            backgroundColor: 'Black',
            height: '50px',
            fontSize: '18px',
            border: 'solid black 5px',
            borderRadius: '20px',
            padding: '10px',
            cursor: 'pointer',
            boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            marginRight: '0px',
        }, children: [name, " buyers: ", count] }));
}
export default function JashanpreetContainer() {
    return (_jsx("section", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }, children: _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("h1", { style: { marginBottom: '30px', color: 'red' }, children: "Welcome to Big Boy Toyz" }), _jsxs("div", { style: { display: 'flex', gap: '20px' }, children: [_jsx(JashanpreetButton, { name: "Hellcat" }), _jsx(JashanpreetButton, { name: "Shelby" })] })] }) }));
}
