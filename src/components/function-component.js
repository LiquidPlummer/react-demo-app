import { React, useState } from 'react';
// return JSX


function FunctionComponent(props) {
    const [name, setName] = useState(props.name);
    const [message, setMessage] = useState(props.message);

    return (
        <>
            <p>Hello, {name}. {message}</p>
        </>
    )
}

export default FunctionComponent;