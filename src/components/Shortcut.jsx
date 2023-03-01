function Shortcut({ module }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
    const desktop = document.getElementById("desktop");
    desktop.addEventListener("drop", handleDrop);
    desktop.addEventListener("dragover", handleDragOver);
  };

  const handleDrop = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={module.projectId}
      className="shortcut"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <img className="shortcut-icon" src={module.icon} alt="module icon" />
      <div className="shortcut-text">{module.title}</div>
    </div>
  );
}

export default Shortcut;
