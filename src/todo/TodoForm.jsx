import React from 'react'
import Button from '../template/Button'

export default class TodoForm extends React.Component {

    keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        }else if(e.key === 'Escape'){
            this.props.handleClear()
        }
    }

    render() { 
        return(
            <div role='form' className='todoForm'>
                 <div className='col-xs-9 col-sm-10 col-md-10'>
                     <input id='description' className='form-control' placeholder='Adiciona uma tarefa'
                     value={this.props.description} 
                     onChange={this.props.handleChange}
                     onKeyUp={this.keyHandler}></input>
                 </div>   
         
                 <div className='col-xs-3 col-sm-2 col-md-2'>
                     <Button stylize='primary' icon='plus' onClick={this.props.handleAdd}></Button>
                     <Button stylize='info' icon='search' onClick={this.props.handleSearch}></Button>
                     <Button stylize='default' icon='close' onClick={this.props.handleClear}></Button>
                 </div>
            </div>
         )
    }

}