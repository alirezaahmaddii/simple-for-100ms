import { AppProvider, ErrorProvider, StyleProvider } from '@/apps/frontend/uikit/src/providers'
import { HMSRoomProvider } from '@100mslive/react-sdk'
import { RuntimeConfig } from '@umijs/max'

export const rootContainer: RuntimeConfig['rootContainer'] = (container) => {
  return (
    <ErrorProvider>
      <StyleProvider>
        <AppProvider>
          <HMSRoomProvider>
            {container}
          </HMSRoomProvider>
        </AppProvider>
      </StyleProvider>
    </ErrorProvider>
  )
}
