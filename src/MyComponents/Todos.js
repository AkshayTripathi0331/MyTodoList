import React from 'react';

import {TodoItem} from '../MyComponents/TodoItem'

export const Todos = (props) => {
  let myStyle={
    minheight:"70vh",
    margin: "40px auto"

  }
  return (
    <div className="container my=3 " style={myStyle}>
       <h3 className="my-3 ">Todos List</h3>
       {/* {props.todos} */}
       { props.todos.length===0?"No Todos to Display":props.todos.map((todo)=>

         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        
       )
          }
      

    </div>
  )
}

// export default Todos

