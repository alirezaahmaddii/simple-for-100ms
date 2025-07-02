import { Button, Input, List } from 'antd'
import {
  selectHMSMessages,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk'
import { useState } from 'react'

export const ChatBox = () => {
  const [message, setMessage] = useState('')
  const hmsActions = useHMSActions()
  const messages = useHMSStore(selectHMSMessages)

  const sendMessage = async () => {
    if (message.trim() !== '') {
      await hmsActions.sendBroadcastMessage(message)
      setMessage('')
    }
  }

  return (
    <div style={{ padding: '1rem', borderTop: '1px solid #ccc', height: '30vh', overflow: 'auto' }}>
      <List
        size="small"
        bordered
        dataSource={messages}
        renderItem={(item) => {
          return (
            <List.Item>
              <strong>
                {item.senderName}
                :
              </strong>
              {' '}
              {item.message}
            </List.Item>
          )
        }}
        style={{ marginBottom: 8, maxHeight: '70%', overflowY: 'auto' }}
      />
      <Input.Group compact>
        <Input
          style={{ width: 'calc(100% - 80px)' }}
          value={message}
          onChange={(e) => { setMessage(e.target.value) }}
          onPressEnter={sendMessage}
          placeholder="Type your message..."
        />
        <Button type="primary" onClick={sendMessage}>
          Send
        </Button>
      </Input.Group>
    </div>
  )
}
