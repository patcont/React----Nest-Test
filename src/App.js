import * as React from "react";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="bt-2">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <Modal></Modal>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default App;
