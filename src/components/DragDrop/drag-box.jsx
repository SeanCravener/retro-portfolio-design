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
    <div>
      <img
        id={props.dragItemId}
        src="images/icons8-disk-64-1.png"
        alt="navigation module"
        draggable="true"
        onDragStart={handleDragStart}
      />
    </div>
  );
}

export default DragBox;
