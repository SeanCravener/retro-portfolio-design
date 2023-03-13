import { useState, useContext } from "react";
import { ModulesContext } from "../context/module-context";
import { Modal, List, Frame } from "@react95/core";
import { Computer } from "@react95/icons";

function Window({ module }) {
  const { removeModule } = useContext(ModulesContext);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(650);
  const [x, setX] = useState(0);
  const [y, setY] = useState(20);
  const [title, setTitle] = useState(module.title);
  const [links, setLinks] = useState(module.links);
  const [src, setSrc] = useState(module.src);

  const handleCloseModal = () => {
    removeModule(module);
  };

  return (
    <Modal
      width={width}
      height={height}
      icon={<Computer variant="32x32_4" />}
      title={title}
      defaultPosition={{
        x: 0,
        y: 20,
      }}
      closeModal={handleCloseModal}
      // menu={[
      //   {
      //     name: "File",
      //     list: (
      //       <List>
      //         {links.map((link, index) => {
      //           return (
      //             <List.Item
      //               key={index}
      //               onClick={() => window.open(link.url, "_blank")}
      //             >
      //               View On {link.text}
      //             </List.Item>
      //           );
      //         })}
      //         <List.Item onClick={handleCloseModal}>Close</List.Item>
      //       </List>
      //     ),
      //   },
      // ]}
    >
      <Frame w={width - 20} h={height - 50}>
        <iframe src={src} width="100%" height="100%" title={title}>
          <p>Your browser does not support iframes.</p>
        </iframe>
      </Frame>
    </Modal>
  );
}

export default Window;
