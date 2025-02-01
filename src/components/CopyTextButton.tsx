import { useState } from 'react'

import ButtonIcon from './ButtonIcon'
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
    <ButtonIcon
      ariaLabel="Copy text"
      onClick={handleCopyText}
      icon={<IconCopy />}
      type="secondary"
    >
      <Tooltip text="Copied!" isVisible={isVisibleTooltip} />
    </ButtonIcon>
  )
}
