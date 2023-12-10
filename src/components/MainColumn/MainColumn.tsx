type Props = {
  children: React.ReactNode
}

export default function Main({ children }: Props) {
  return <div className="mainColumn">{children}</div>
}
