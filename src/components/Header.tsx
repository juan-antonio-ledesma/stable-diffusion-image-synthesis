import { useState } from 'react'

import ButtonIcon from '@components/ButtonIcon'
import Menu from '@components/Menu'

import IconMenu from '@icons/IconMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleCloseMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(prevState => !prevState)

  return (
    <header className="header">
      <div className="header-innerWrapper">
        <h1 className="header-title">
          Stable Diffusion. <br />
          Image Synthesis
        </h1>
        <p className="header-subtitle">
          Collection of images generated through Stable Diffusion
        </p>

        <ButtonIcon
          onClick={toggleMenu}
          ariaLabel={menuOpen ? 'Close menu' : 'Open menu'}
          icon={<IconMenu />}
          size="sm"
          type="secondary"
          extraClass="header-menuButton"
        />

        <Menu open={menuOpen} onClose={handleCloseMenu} />
      </div>
    </header>
  )
}
