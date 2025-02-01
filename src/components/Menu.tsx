import { useEffect, useRef, useState } from 'react'

import { navigation } from '@data/navigation'

import IconFolders from '@icons/IconFolders'
import IconMail from '@icons/IconMail'

type Props = {
  open: boolean
  onClose: VoidFunction
}

export default function Menu({ open, onClose }: Readonly<Props>) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const lastLinkRef = useRef<HTMLAnchorElement>(null)

  const [visible, setVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOpen = () => {
    setVisible(true)
    setTimeout(() => setIsAnimating(true), 50)
    dialogRef.current?.focus()
  }

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => setVisible(false), 200)
    onClose()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  const handleTabNavigation = (e: KeyboardEvent) => {
    if (!dialogRef.current) return

    const focusableLinks = Array.from(
      dialogRef.current.querySelectorAll<HTMLAnchorElement>(
        'a.menu-navigationItem',
      ),
    )

    if (focusableLinks.length === 0) return

    const firstLink = focusableLinks[0]
    const lastLink = focusableLinks[focusableLinks.length - 1]

    if (e.shiftKey && e.key === 'Tab' && document.activeElement === firstLink) {
      e.preventDefault()
      lastLink.focus()
    } else if (
      !e.shiftKey &&
      e.key === 'Tab' &&
      document.activeElement === lastLink
    ) {
      e.preventDefault()
      firstLink.focus()
    }
  }

  useEffect(() => {
    if (open) {
      handleOpen()
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keydown', handleTabNavigation)
    } else {
      handleClose()
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keydown', handleTabNavigation)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keydown', handleTabNavigation)
    }
  }, [open])

  const getLinkRef = (
    index: number,
  ): React.RefObject<HTMLAnchorElement> | undefined => {
    if (index === 0) return firstLinkRef
    if (index === navigation.length - 1) return lastLinkRef
    return undefined
  }

  const iconDictionary: Record<string, JSX.Element> = {
    projects: <IconFolders />,
    mail: <IconMail />,
  }

  return (
    <>
      {visible && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className={`menu${isAnimating ? ' is-open lock-scroll' : ''}`}
          tabIndex={-1}
        >
          <nav className="menu-navigation">
            {navigation.map(({ href, text, icon }, index) => (
              <a
                className="menu-navigationItem"
                href={href}
                key={text}
                ref={getLinkRef(index)}
              >
                {iconDictionary[icon]}
                {text}
              </a>
            ))}
          </nav>
        </div>
      )}
      {visible && (
        <div
          className={`menu-backdrop${isAnimating ? '' : ' is-closing'}`}
          aria-hidden="true"
          onClick={handleClose}
        />
      )}
    </>
  )
}
