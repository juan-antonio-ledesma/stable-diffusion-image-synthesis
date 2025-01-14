import { useState } from 'react'

import Tooltip from './Tooltip'

import IconCopy from '@icons/IconCopy'

type Props = {
  text: string
}

export default function CopyTextButton({ text }: Readonly<Props>) {
  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false)

  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
    setIsVisibleTooltip(true)
    setTimeout(() => setIsVisibleTooltip(false), 1500)
  }

  return (
    <button
      className="copyTextButton"
      aria-label="Copy text"
      onClick={handleCopyText}
    >
      <IconCopy />
      <Tooltip text="Copied!" isVisible={isVisibleTooltip} />
    </button>
  )
}
