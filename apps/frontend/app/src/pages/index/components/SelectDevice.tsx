export const SelectDevice = ({ list, value, onChange, title }) => {
  return (
    <div>
      <span>
        {title}
        :
      </span>
      {list?.length
        ? (
            <select onChange={onChange} value={value}>
              {list.map((device) => {
                return (
                  <option value={device.deviceId} key={device.deviceId}>
                    {device.label}
                  </option>
                )
              })}
            </select>
          )
        : null}
    </div>
  )
}
