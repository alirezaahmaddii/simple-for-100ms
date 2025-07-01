import { DeviceType, useDevices } from '@100mslive/react-sdk'
import { SelectDevice } from '@/apps/frontend/app/src/pages/index/components/SelectDevice'

const DeviceSettings = () => {
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices()
  const { videoInput, audioInput, audioOutput } = allDevices
  return (
    <div>
      <h1>Device Settings</h1>
      <SelectDevice
        title="Camera"
        value={selectedDeviceIDs.videoInput}
        list={videoInput}
        onChange={async (e) => {
          return updateDevice({
            deviceId: e.target.value,
            deviceType: DeviceType.videoInput,
          })
        }}
      />
      <SelectDevice
        title="Microphone"
        value={selectedDeviceIDs.audioInput}
        list={audioInput}
        onChange={async (e) => {
          return updateDevice({
            deviceId: e.target.value,
            deviceType: DeviceType.audioInput,
          })
        }}
      />
      <SelectDevice
        title="Speaker"
        value={selectedDeviceIDs.audioOutput}
        list={audioOutput}
        onChange={async (e) => {
          return updateDevice({
            deviceId: e.target.value,
            deviceType: DeviceType.audioOutput,
          })
        }}
      />
    </div>
  )
}

export default DeviceSettings
