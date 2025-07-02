import {
  selectPeers,
  selectPeersScreenSharing,
  useHMSStore,
} from '@100mslive/react-sdk'
import { ChatBox } from '@/apps/frontend/app/src/pages/index/components/ChatBox'
import { Peer } from './Peer'
import { ScreenTile } from './ScreenTile'

export const Conference = () => {
  const peers = useHMSStore(selectPeers)
  const presenters = useHMSStore(selectPeersScreenSharing)
  return (
    <div>
      <div>
        {peers.map((peer) => { return <Peer key={peer.id} peer={peer} /> },
        )}
        {presenters.map((peer) => { return <ScreenTile key={`screen${peer.id}`} peer={peer} /> },
        )}
      </div>
      <ChatBox />
    </div>
  )
}
