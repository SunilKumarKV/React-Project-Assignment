import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
const Counter = () => {
    const [count, setCount] = useState(0);
    const [backgroundLevel, setBackgroundLevel] = useState(50);
    const increment = () => {
        setCount(prev => prev + 1);
        setBackgroundLevel(prev => Math.min(prev + 10, 100));
    };
    const decrement = () => {
        setCount(prev => Math.max(prev - 1, 0));
        setBackgroundLevel(prev => Math.max(prev - 10, 0));
    };
    const reset = () => {
        setCount(0);
        setBackgroundLevel(50);
    };
    return (_jsx("div", { className: "counter-container", children: _jsxs(motion.div, { className: "counter-box", style: { backgroundColor: `hsl(210, 100%, ${backgroundLevel}%)`, padding: '20px', borderRadius: '8px', textAlign: 'center' }, animate: { scale: 1 + count * 0.05 }, transition: { duration: 0.3 }, children: [_jsx("h3", { className: "counter-title", children: "Counter" }), _jsx("div", { className: "counter-display", children: _jsx("h4", { children: count }) }), _jsxs("div", { className: "counter-actions", children: [_jsx("button", { className: "btn", onClick: increment, children: "Increment" }), _jsx("button", { className: "btn", onClick: decrement, children: "Decrement" }), _jsx("button", { className: "btn", onClick: reset, children: "Reset" })] }), _jsx("div", { style: { marginTop: '20px', height: '10px', backgroundColor: '#ddd', borderRadius: '5px' }, children: _jsx("div", { style: { height: '100%',
                            width: `${(count / 100) * 100}%`,
                            backgroundColor: '#3498db',
                            borderRadius: '5px' } }) })] }) }));
};
export default Counter;
