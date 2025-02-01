type Props = {
  href: string
  ariaLabel: string
  icon: React.ReactNode
  type?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  blank?: boolean
  extraClass?: string
}

export default function LinkIcon({
  href,
  ariaLabel,
  blank,
  icon,
  type,
  size = 'sm',
  extraClass,
}: Readonly<Props>) {
  return (
    <a
      className={`linkIcon is-${type} is-${size}${
        extraClass ? ' ' + extraClass : ''
      }`}
      href={href}
      aria-label={ariaLabel}
      target={blank && '_blank'}
      rel={blank && 'noopener noreferrer'}
    >
      {icon}
    </a>
  )
}
