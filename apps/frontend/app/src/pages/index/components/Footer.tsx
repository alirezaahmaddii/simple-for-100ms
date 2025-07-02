import { Button } from 'antd'
import {
  AudioLevelIcon,
  MicOffIcon,
  MicOnIcon,
  ShareScreenIcon,
  VideoOffIcon,
  VideoOnIcon,
} from '@100mslive/react-icons'
import {
  selectIsLocalScreenShared,
  selectRoom,
  useAVToggle,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'

export const Footer = () => {
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo }
        = useAVToggle()
  const amIScreenSharing = useHMSStore(selectIsLocalScreenShared)
  const actions = useHMSActions()
  const room = useHMSStore(selectRoom)
  return (
    <div>
      <Button
        onClick={toggleAudio}
        variant="solid"
      >
        {isLocalAudioEnabled ? <MicOnIcon /> : <MicOffIcon />}
      </Button>
      <Button
        variant="solid"
        onClick={toggleVideo}
      >
        {isLocalVideoEnabled ? <VideoOnIcon /> : <VideoOffIcon />}
      </Button>
      <Button
        variant="solid"
        title="Screenshare"
        onClick={async () => { return actions.setScreenShareEnabled(!amIScreenSharing) }}
      >
        <ShareScreenIcon />
      </Button>
      {room.isNoiseCancellationEnabled
        ? (
            <Button variant="solid" title="Noise cancellation">
              <AudioLevelIcon />
            </Button>
          )
        : null}
    </div>
  )
}
