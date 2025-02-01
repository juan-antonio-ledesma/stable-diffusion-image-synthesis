import LinkIcon from './LinkIcon'

import IconGitHub from '@icons/IconGitHub'
import IconLinkedIn from '@icons/IconLinkedIn'

const currentYear = new Date().getFullYear()

export default function Header() {
  return (
    <footer className="footer">
      <div className="footer-innerWrapper">
        <p>
          © {currentYear}{' '}
          <span className="footer-author">Juan Antonio Ledesma</span>
        </p>

        <nav className="footer-socialLinks">
          <LinkIcon
            type="ghost"
            href="https://github.com/juan-antonio-ledesma"
            ariaLabel="GitHub"
            blank
            icon={<IconGitHub />}
          />
          <LinkIcon
            type="ghost"
            href="https://www.linkedin.com/in/juan-antonio-ledesma/"
            ariaLabel="LinkedIn"
            blank
            icon={<IconLinkedIn />}
          />
        </nav>
      </div>
    </footer>
  )
}
