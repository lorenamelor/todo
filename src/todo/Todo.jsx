import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    state = {
        description:'',
        list:[],
    }

    componentWillMount(){        
       this.refresh()
    }

   refresh(description = ''){
       const search = description ? `&description__regex=/${description}/` : ''
       axios.get(`${URL}?sort=-createdAt${search}`)
       .then(resp => this.setState({...this.state,description,list:resp.data}))
   }

   handleSearch = () => {
       this.refresh(this.state.description)
   }
   
   handleClear = () => {
       this.refresh()
   }
   handleChange = (e) => {
    this.setState({...this.state, description: e.target.value})
   }
   
    handleAdd = () => {
        const description = this.state.description
        axios.post(URL,{description})
        .then(resp=> this.refresh())
    }

    handleRemove = (todo) => () =>{
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone = (todo) => () => {
        axios.put(`${URL}/${todo._id}`, {...todo, done:true})
        .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending = (todo) => () => {
        axios.put(`${URL}/${todo._id}`, {...todo,done: false})
        .then(resp=> this.refresh(this.state.description))
    }
  
    render(){
        return(
            <div> 
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm 
                    description={this.state.description} 
                    handleAdd={this.handleAdd}
                    handleChange ={this.handleChange}
                    handleSearch = {this.handleSearch} 
                    handleClear = {this.handleClear}/>
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleMarkAsPeding = {this.handleMarkAsPending}/>
            </div>
        )
    }
}