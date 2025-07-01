import { HMSRoomProvider } from '@100mslive/react-sdk'
import { RuntimeConfig } from '@umijs/max'
import {App} from "antd";
import {StyleProvider} from "antd-style";

export const rootContainer: RuntimeConfig['rootContainer'] = (container) => {
  return (
      <StyleProvider>
        <App>
          <HMSRoomProvider>
            {container}
          </HMSRoomProvider>
        </App>
      </StyleProvider>
  )
}
