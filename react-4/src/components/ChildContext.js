import {useContext} from 'react';
import {TextContext} from './ParentContext'

function ChildContext(){
const context = useContext(TextContext)

    return (
        <div>
            Child text {context}
        </div>
    )
}

export default ChildContext; 