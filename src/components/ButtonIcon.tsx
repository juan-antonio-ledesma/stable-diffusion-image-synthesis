type Props = {
  onClick: VoidFunction
  ariaLabel: string
  icon: React.ReactNode
  type?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  children?: React.ReactNode
  extraClass?: string
}

export default function ButtonIcon({
  onClick,
  ariaLabel,
  icon,
  type,
  size = 'sm',
  children,
  extraClass,
}: Readonly<Props>) {
  return (
    <button
      className={`buttonIcon is-${type} is-${size}${
        extraClass ? ' ' + extraClass : ''
      }`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
      {icon}
    </button>
  )
}
