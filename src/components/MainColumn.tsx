type Props = {
  children: React.ReactNode
}

export default function MainColumn({ children }: Readonly<Props>) {
  return <div className="mainColumn">{children}</div>
}
