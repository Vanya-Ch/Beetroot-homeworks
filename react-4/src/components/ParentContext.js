import {createContext} from 'react';
import IntermediateContext from './IntermediateContext';

export const TextContext = createContext(null)

function ParentContext(){
    return(
        <div>
            ParentContext
            <TextContext.Provider value="Parent text">
                <IntermediateContext/>
            </TextContext.Provider>
        </div>
    )
}

export default ParentContext; 