import {h, Fragment} from 'preact';
import {useState, useCallback} from 'preact/hooks';

export default function App() {
    const [val, changeVal] = useState<number>(11);

    const handleUp = useCallback(
        () => changeVal(val => val + 1),
        [],
    );

    return (
        <>
            <h2>Hello world!</h2>
            <div>Counter: {val}</div>
            <button onClick={handleUp}>toggle</button>
        </>
    );
}
