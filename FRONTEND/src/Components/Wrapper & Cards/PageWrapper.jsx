import React from 'react'

function PageWrapper({ className, children }) {
    return (
        <div className={`${className && className} p-2`} >{children}</div>
    )
}

export default PageWrapper