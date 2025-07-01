import { Button, Flex } from 'antd'
import {
  HMSRoomState,
  selectIsConnectedToRoom,
  selectRoomState,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'
import { Conference } from './components/Conference'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { useEffect } from 'react'

const loadingStates = [HMSRoomState.Connecting, HMSRoomState.Disconnecting]

export const Index = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const roomState = useHMSStore(selectRoomState)
  const hmsActions = useHMSActions()
  console.log(process.env.BROADCASTER_CODE_ROOM, 'BROADCASTER_CODE_ROOM')
  console.log(process.env.COBROADCASTER_CODE_ROOM, 'COBROADCASTER_CODE_ROOM')
  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave()
      }
    }
  }, [hmsActions, isConnected])

  if (loadingStates.includes(roomState)) {
    return (
      <Flex align="center" justify="center">
        <Loader />
      </Flex>
    )
  }

  const joinToVideoConference = async (roomCodeKey, userName) => {
    const authToken = await hmsActions.getAuthTokenByRoomCode({
      roomCode: roomCodeKey,
    })

    try {
      await hmsActions.join({
        userName,
        authToken,
      })
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
    <div style={{ height: '100vh' }}>
      {isConnected
        ? (
            <>
              <Header />
              <Conference />
              <Footer />
            </>
          )
        : (
            <Flex gap={5} justify="center" align="center" style={{ height: '100%' }}>
              <Button
                variant="solid"
                onClick={() => joinToVideoConference(process.env.BROADCASTER_CODE_ROOM, 'broadcaster')}
              >
                Join as broadcaster
              </Button>
              <Button
                variant="solid"
                onClick={() => joinToVideoConference(process.env.COBROADCASTER_CODE_ROOM, 'co-broadcaster')}
              >
                Join as CoBroadcaster
              </Button>
            </Flex>
          )}
    </div>
  )
}

export default Index
