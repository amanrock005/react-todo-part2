// react code is converted to html code
// it gets render inside div with root=id
// functional component return jsx
// jsx is writing javascript code inside html
// go to google fonts pick the font get the embeded code with the link tag and paste it in index.html
// app.js is the root component
// app.js --> main.jsx --> index.html
// to use font copy the link tag from font awesome cdn

import TodoCard from "./TodoCard";

export default function TodoList(props) {
  //   let todos = ["go to the gym", "leran react", "drink water"];
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        // <li className="todoItem" key={todoIndex}>
        //   {todo}
        //   <i class="fa-regular fa-pen-to-square"></i>
        // </li>
        <TodoCard {...props} key={todoIndex} index={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
