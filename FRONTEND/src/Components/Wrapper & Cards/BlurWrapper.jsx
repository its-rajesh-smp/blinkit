import React from 'react'

function BlurWrapper({ className, children }) {
    return (
        <div className={`${className && className} blurWrapper fixed top-0 left-0 w-screen h-screen  `}>
            {children}
        </div>
    )
}

export default BlurWrapper 