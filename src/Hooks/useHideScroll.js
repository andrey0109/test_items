import React, { useEffect } from 'react'

const useHideScroll = (isOpen) => {
    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "auto"
        
        return () => {
            document.body.style.overflowY = "auto"
        }
    }, [isOpen])
}




export default useHideScroll