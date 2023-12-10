type Props = {
  author: string
  link: string
}

export default function Authorship({ author, link }: Props) {
  return (
    <p className="authorship">
      Developed by{' '}
      <a href={link} className="authorship-author">
        {author}
      </a>
    </p>
  )
}
