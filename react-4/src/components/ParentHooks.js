import {useEffect, useState} from 'react';
import useWindowSize from '../hooks/useWindowSize';

function ParentHooks (){
    const [originValue, setOriginValue] = useState(1);
    const windowSize = useWindowSize();
    /* const [fruit, setFruit] = useState('banana');
    const [checkList, setCheckList] = useState([
        {
            title: 'Check 1',
            checked: false,
        },
        {
            title: 'Check 2',
            checked: true,
        }
    ]) 
    
    useEffect(callBack, array args) - до завантаження ДОМ
    useLayoutEffect - після завантаження ДОМ
    
    
    */

    /* useEffect(() => {
        console.log('componentDidMount')

        function updateWindowSize(){
            setWindowSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', updateWindowSize)

        updateWindowSize()
        return()=>{
            console.log('componentWillUnmount')
            window.removeEventListener('resize', updateWindowSize)
        }
        return() => window.removeEventListener('resize', updateWindowSize)
        
    }, [])
 */
    

    useEffect(()=>{
        console.log('componentDidUpdate')
    }, [originValue])

    return(
     <div>
        <div>
            ParentHooks
        </div>
        <div>
            Value is {originValue}
        </div>
        <button onClick = {()=> setOriginValue(originValue + 1) }>
            Increase value 
        </button>
        <div>
            Window width: {windowSize[0]}
        </div>
        <div>
            Window height: {windowSize[1]}
        </div>

        {windowSize[0] > 1024 ? <p>Desktop</p> : <p>Mobile</p>}
     </div>
    )
}
export default ParentHooks;
