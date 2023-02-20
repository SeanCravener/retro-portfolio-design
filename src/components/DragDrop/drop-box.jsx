import React from "react";

function DropBox() {
  function handleDrop(event) {
    const data = event.dataTransfer.getData("text/plain");
    const origin = document.getElementById(data);
    document.getElementById("dropbox").appendChild(origin);
  }

  return <div id="dropbox" onDrop={handleDrop}></div>;
}

export default DropBox;
