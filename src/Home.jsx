import React, { useEffect, useState } from "react";
import Task from "./Task";

function Home() {
  const [task, setTask] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        title,
        des,
      },
    ]);
  };

  const deleteTask = (index) => {
    const filterArr = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filterArr);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  return (
    <div class="container">
      <h2 style={{ margin: "5px", textAlign: "center" }}>Daily Goals</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      {task.map((item, index) => {
        return (
          <Task
            key={index}
            title={item.title}
            description={item.des}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Home;
