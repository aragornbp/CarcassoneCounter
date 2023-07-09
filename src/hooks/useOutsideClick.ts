import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleOutClick(e: MouseEvent) {
      const target = e.target as HTMLButtonElement
      if (!ref.current?.contains(target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleOutClick)

    return () => {
      document.removeEventListener('mousedown', handleOutClick)
    }
  })

  return ref
}
