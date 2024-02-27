import { useState } from "react";
import Model from "./model";

export default function ModelTest() {
  const [showModelPopup, SetShowModelPopup] = useState(false);

  function handleTogglePopup() {
    SetShowModelPopup(!showModelPopup);
  }

  function onClose() {
    SetShowModelPopup(false);
  }
  return (
    <div className="pp">
      <button onClick={handleTogglePopup}>Open Model Pop-up!</button>
      {showModelPopup && (
        <Model
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          body={"pp"}
          footer={<h1>Customizid Footer</h1>}
          onclose={onClose}
        />
      )}
    </div>
  );
}
