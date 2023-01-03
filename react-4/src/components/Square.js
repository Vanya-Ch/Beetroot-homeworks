/* import {useState} from 'react'; */


import {useMemo} from 'react';
function Square(props){
    const sqrt = useMemo(() => props.a * props.a, [props.a]);
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                Side: {props.a}
            </div>
            <div>
                Area: {sqrt}
            </div>
        </div>
    )
}

export default Square