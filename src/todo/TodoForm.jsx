import React from 'react'
import Button from '../template/Button'

export default props =>(
   <div role='form' className='todoForm'>
        <div className='col-xs-11 col-sm-9 col-md-10'>
            <input id='description' className='form-control' placeholder='Adiciona uma tarefa'
            value={props.description} onChange={props.handleChange}></input>
        </div>   

        <div className='col-xs-1 col-sm-3 col-md-2'>
            <Button stylize='primary' icon='plus' onClick={props.handleAdd}></Button>
            <Button stylize='info' icon='search' onClick={props.handleSearch}></Button>
        </div>
   </div>
)