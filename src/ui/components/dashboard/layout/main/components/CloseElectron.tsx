import React from "react";

import { IoMdClose } from "react-icons/io";
import { Icono } from "@nano";

const CloseElectron: React.FC = () => {
  // const handleClose = (): void =>
  //   electron.ipcRenderer.send("close-window");

  return (
    <div className="electron-btn-closed">
      <button
        onClick={() => {
          /* handleClose */
        }}
      >
        <Icono icono={<IoMdClose />} />
      </button>
    </div>
  );
};

export default CloseElectron;
