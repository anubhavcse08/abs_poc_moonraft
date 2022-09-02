import React from 'react'

const Title = ({ value, type, classProperties, href, iconClassProps, dataNotification }) => {
    return (
        <>
            {type === "heading" && <h1 className={classProperties}>{value}</h1>}
            {type === "span" && <span className={classProperties}>{value}</span>}
            {type === "division" && <div className={classProperties}>{value}</div>}
            {type === "icon" && <i className={classProperties}></i>}
            {type === "anchorIcon" && <a href={href} className={classProperties}><i data-notification={dataNotification} className={iconClassProps}></i>{value}</a>}
        </>
    )
}

export default Title;