type Props = {
  children: React.ReactNode
}

export default function MainTitle({ children }: Props) {
  return <h1 className="mainTitle">{children}</h1>
}
