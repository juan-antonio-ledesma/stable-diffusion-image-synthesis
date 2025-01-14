type Props = {
  children: React.ReactNode
}

export default function Main({ children }: Readonly<Props>) {
  return <main className="main">{children}</main>
}
