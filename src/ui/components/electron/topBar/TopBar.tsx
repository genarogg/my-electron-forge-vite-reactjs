import React from "react";

import { MenuChannels } from "src/channels/menuChannels";
import { useRendererListener, useThemeListener } from "src/ui/components/electron/hooks";
import Menu from "./Menu";
import Titlebar from "./Titlebar";
import WindowControls from "./WindowControls";

interface TopBarProps {}

const onMenuEvent = (
  _: Electron.IpcRendererEvent,
  channel: string,
  ...args: any[]
) => {
  electron.ipcRenderer.invoke(channel, args);
};

const TopBar: React.FC<TopBarProps> = () => {
  useRendererListener(MenuChannels.MENU_EVENT, onMenuEvent);

  useThemeListener();
  return (
    <>
      <Titlebar>
        {(windowState) => (
          <>
            {__WIN32__ && (
              <>
                <Menu />
                <WindowControls windowState={windowState} />
              </>
            )}
          </>
        )}
      </Titlebar>
    </>
  );
};

export default TopBar;
