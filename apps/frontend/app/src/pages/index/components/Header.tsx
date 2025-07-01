import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'
import { Button } from 'antd'
import { ExitIcon } from '@100mslive/react-icons'
import { useCallback } from 'react'

export const Header = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const hmsActions = useHMSActions()

  const leaveRoom = useCallback(() => {
    hmsActions.leave()
  }, [hmsActions])

  if (!isConnected) {
    return null
  }

  return (
    <Button
      onClick={leaveRoom}
      variant="solid"
    >
      <ExitIcon />
      Leave Room
    </Button>
  )
}
