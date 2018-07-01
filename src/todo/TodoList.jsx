import React from 'react'
import Button from '../template/Button'

export default props => {

    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <Button stylize='success' icon='check' hide={todo.done} 
                    onClick={() => props.handleMarkAsDone(todo)}></Button>
                    <Button stylize='warning' icon='undo' hide={!todo.done}
                    onClick={() => props.handleMarkAsPeding(todo)}></Button>
                    <Button stylize='danger' icon='trash-o' 
                    onClick={() => props.handleRemove(todo)}></Button>
                </td>
            </tr> 
        ))
    }
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>  
            <tbody>
                {renderRows()}
            </tbody> 
        </table>
   )
}