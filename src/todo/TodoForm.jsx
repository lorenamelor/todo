import React from 'react'
import Button from '../template/Button'

export default props =>{

    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return(
        <div role='form' className='todoForm'>
             <div className='col-xs-9 col-sm-10 col-md-10'>
                 <input id='description' className='form-control' placeholder='Adiciona uma tarefa'
                 value={props.description} 
                 onChange={props.handleChange}
                 onKeyUp={keyHandler}></input>
             </div>   
     
             <div className='col-xs-3 col-sm-2 col-md-2'>
                 <Button stylize='primary' icon='plus' onClick={props.handleAdd}></Button>
                 <Button stylize='info' icon='search' onClick={props.handleSearch}></Button>
                 <Button stylize='default' icon='close' onClick={props.handleClear}></Button>
             </div>
        </div>
     )
}