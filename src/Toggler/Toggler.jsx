import { useState } from "react";

export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleToggle}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          error molestias ipsam beatae possimus veniam ex harum asperiores.
          Tenetur omnis beatae cum suscipit velit laborum quam, pariatur est
          consequatur ut?
        </p>
      )}
    </div>
  );
}
