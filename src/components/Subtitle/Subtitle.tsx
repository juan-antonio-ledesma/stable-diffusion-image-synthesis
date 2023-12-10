type Props = {
  text: string
}

export default function MainTitle({ text }: Props) {
  return <p className="subtitle">{text}</p>
}
