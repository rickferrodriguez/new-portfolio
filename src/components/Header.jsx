import { useId } from 'react'
import { Link } from 'react-scroll'
import { MenuIcon } from './Icons'

export function Header () {
  const menuCheckboxId = useId()
  return (
    <header
      className='fixed top-0 left-0 pt-5 px-5 lg:py-2 gap-2 backdrop-blur bg-kanagawa-sumiInko1/70 lg:bg-kanagawa-sumiInko1/80 w-full grid z-50
    min-h-[65px] border-b-2 border-kanagawa-winterYellow'
    >
      <label
        className='lg:hidden shadow shadow-kanagawa-autumnRed ml-2 p-2 h-fit max-w-[40px]'
        htmlFor={menuCheckboxId}
      >
        {' '}
        <MenuIcon />
      </label>
      <input type='checkbox' className='peer' hidden id={menuCheckboxId} />

      <nav className='hidden lg:flex peer-checked:flex lg:justify-center text-kanagawa-roninYellow font-inter text-base h-auto z-10 w-full font-semibold '>
        <ul
          className='w-full lg:w-auto lg:px-4 grid [&>li]:hover:cursor-pointer py-1 lg:py-1 [&>li]:flex [&>li]:justify-center lg:flex lg:gap-2 lg:[&>li]:w-[130px] lg:justify-center'
        >
          <li>
            <Link
              to='home'
              spy
              smooth
              offset={-70}
              duration={500}
              type='button'
              className='hover:bg-kanagawa-winterYellow hover:text-kanagawa-roninYellow lg:flex lg:justify-center
              rounded-3xl w-full p-2'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='experience'
              spy
              smooth
              offset={-80}
              duration={500}
              type='button'
              className='hover:bg-kanagawa-winterYellow hover:text-kanagawa-roninYellow lg:flex lg:justify-center
               rounded-3xl w-full p-2'
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              spy
              smooth
              offset={-80}
              duration={500}
              type='button'
              className='hover:bg-kanagawa-winterYellow hover:text-kanagawa-roninYellow lg:flex lg:justify-center
               rounded-3xl w-full p-2'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='studies'
              spy
              smooth
              offset={-80}
              duration={500}
              type='button'
              className='hover:bg-kanagawa-winterYellow hover:text-kanagawa-roninYellow lg:flex lg:justify-center
               rounded-3xl w-full p-2'
            >
              Studies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
