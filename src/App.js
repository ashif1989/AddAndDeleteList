import "./styles.css";
import { useState } from "react";

export default function App() {
  const names = [
    { cname: "Ashif", id: 1, company: "Dankse IT" },
    { cname: "Lavanya", id: 2, company: "Danske IT" },
    { cname: "Bhasker", id: 3, company: "TCS" }
  ];

  const [delName, setDelName] = useState(names);
  const [addname, setAddname] = useState([]);

  let handleDelete = (name, index) => {
    setAddname([name, ...addname]);
    let list = [...delName];
    list.splice(index, 1);
    setDelName(list);
  };

  let handleAdd = () => {
    let name = addname[0];
    setDelName([name, ...delName]);
    let list = [...addname];
    list.splice(list[0], 1);
    setAddname(list);
  };

  return (
    <div className="App">
      <h1>Delete</h1>
      {delName.map((name, index) => (
        <>
          <span key={name.id}>{name.cname}</span>
          <button onClick={() => handleDelete(name, index)}>Delete</button>
          <br />
        </>
      ))}
      <br />
      <h1>Add</h1>
      {addname.map((name) => (
        <>
          <span key={name.id}>{name.cname}</span>
          <button onClick={() => handleAdd(name.id)}>Add</button>
          <br />
        </>
      ))}
      <br />
    </div>
  );
}
