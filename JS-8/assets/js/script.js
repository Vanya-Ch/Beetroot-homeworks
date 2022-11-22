document.addEventListener('DOMContentLoaded', ()=>{

    let main = document.getElementById('main'),
        content = document.getElementById('content');

    let div = document.createElement('div'),
        textarea = document.createElement('textarea');
    
    div.classList.add('default');
    div.textContent = "Ctrl + e";
    content.append(div);
    document.addEventListener("keydown", event =>{
        if(event.ctrlKey && event.key === 'e'){
            event.preventDefault();
            content.innerHTML = "";
            textarea.textContent = div.textContent;
            content.prepend(textarea);
        }else if(event.ctrlKey && event.key === 's'){
            event.preventDefault();
        
            div.textContent = textarea.value;
            
            content.innerHTML = "";
            
            content.prepend(div);
        }
    })

    let change = document.getElementById('change'),
        width = change.offsetWidth,
        height = change.offsetHeight;

    change.addEventListener('mousedown', event =>{
        
        if(event.offsetX > 194 && event.offsetY > 194){
            div.style.cursor = "pointer";
            document.addEventListener('mousemove', e =>{
            
                let difX = e.pageX - event.pageX;
                let difY = e.pageY - event.pageY;
                
                document.addEventListener('mouseup', () =>{
                    return change.style.width = width + difX+"px";
                })
                document.addEventListener('mouseup', () =>{
                    return change.style.height = height + difY + "px";
                })
            })
        }
        

    })

    const table = document.getElementById('table');
    let colIndex = -1;

    const sortTable = function(index, type , isSorted){
        const tbody = table.querySelector('tbody');
        const compare = function(rowA, rowB){
            const rowDataA = rowA.cells[index].innerHTML;
            const rowDataB = rowB.cells[index].innerHTML;
            switch (type){
                case 'number':
                    return rowDataA - rowDataB;
                    break;
                case 'date':
                    const dateA = rowDataA.split('.').reverse().join('-');
                    const dateB = rowDataB.split('.').reverse().join('-');
                    return new Date(dateA).getTime() - new Date(dateB).getTime();
                    break;
                case 'string':
                    if(rowDataA < rowDataB) return -1;
                    else if(rowDataA > rowDataB) return 1;
                    return 0;
                    break;
            }
        }

        let rows = [].slice.call(tbody.rows)
        rows.sort(compare);
        if(isSorted) rows.reverse();
        table.removeChild(tbody)
        for(let i = 0; i < rows.length; i++){
            tbody.appendChild(rows[i]);
        }
        table.appendChild(tbody);
    }

    table.addEventListener('click', event =>{
        const el = event.target;
        if(el.nodeName !== 'TH') return;

        const index = el.cellIndex;
        const type = el.getAttribute('data-type');
        sortTable(index, type, colIndex === index)
        colIndex = (colIndex === index) ? -1 : index;
    })

    
})