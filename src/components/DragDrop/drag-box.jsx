function DragBox(props) {
  function handleDragStart(event) {
    // set data on the drag event to be able to access it in the drop event
    event.dataTransfer.setData("text/plain", event.target.id);
    const dropzone = document.getElementById("dropbox");
    dropzone.addEventListener("dragover", handleDragOver);
    dropzone.addEventListener("drop", handleDrop);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
  }

  return (
    <div
      id="dragbox"
      style={{
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        margin: ".1rem",
      }}
    >
      <img
        id={props.dragItemId}
        src="images/icons8-disk-64-1.png"
        alt="navigation module"
        draggable="true"
        onDragStart={handleDragStart}
        style={{ margin: ".10rem" }}
      />
    </div>
  );
}

export default DragBox;
