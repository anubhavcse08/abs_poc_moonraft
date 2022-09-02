import React from 'react'

const Abs_SelectFields = ({onSelectValue, classProperties, data}) => {
    return (
        <select className={classProperties} onChange={onSelectValue}>
            {data.map(item => {
                return <option value={item}>{item}</option>
            })}
        </select>
    )
}

export default Abs_SelectFields;