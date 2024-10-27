import React, { useState } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    return (
      <div className="about">
        <div className="collapse">
          <h2 className="collapse-title">{title}</h2>
          <span
            onClick={toggleCollapse}
            className={isOpen ? "" : "chevronOpen"}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>

        <div className={isOpen ? "collapse-child open" : "collapse-child"}>
          {children}
        </div>
      </div>
    );
  };
}

export default Collapse;
