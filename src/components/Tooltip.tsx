import { useEffect, useState } from 'react'

type Props = {
  text: string
  isVisible: boolean
  direction?: string
}

export default function Tooltip({
  text,
  isVisible,
  direction = 'right',
}: Readonly<Props>) {
  const [isHiding, setIsHiding] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      setIsHiding(true)
      const timeout = setTimeout(() => setIsHiding(false), 200)
      return () => clearTimeout(timeout)
    }
  }, [isVisible])

  let tooltipClass = `tooltip is-${direction}`
  if (isVisible) tooltipClass += ' is-visible'
  if (isHiding) tooltipClass += ' is-hiding'

  return (
    <span className={tooltipClass} aria-hidden={isVisible ? 'false' : 'true'}>
      {text}
    </span>
  )
}
