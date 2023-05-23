import me from '../assets/me.webp'
import { CurriculumIcon, GithubIcon, LinkdinIcon } from './Icons'

export function Home () {
  return (
    <div className='lg:flex grid w-full gap-5' id='home'>
      <section className='flex w-full flex-col gap-1 justify-center order-2 lg:order-1'>
        <h1 className='text-5xl font-bold text-winter-700 mb-2'>
          I'm{' '}
          <span className='bg-gradient-to-l from-kanagawa-roninYellow to-kanagawa-autumnRed text-transparent bg-clip-text'>
            RickFeR
          </span>
        </h1>
        <strong className='text-kanagawa-autumnGreen font-bold text-lg'>Web Developer</strong>
        <p className='font-regular'>
          +2 years of experience as a developer. Delivering premium digital
          solutions. Achieving excellent user experience through performance and
          usability. Providing scalable and customized web solutions.
        </p>
        <div className='font-semibold mt-4 flex gap-3 [&>a]:shadow [&>a]:shadow-kanagawa-autumnRed text-winter-100 lg:hover:[&>a]:bg-kanagawa-winterRed/40 [&>a]:hover:cursor-pointer'>
          <a className='flex md:gap-3 gap-1 rounded-3xl md:py-3 md:px-5 p-3' href='https://www.canva.com/design/DAFcc-zuYcU/VlfoBZ5sISVq2qro62-5tw/edit?utm_content=DAFcc-zuYcU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank' rel='noreferrer'>
            <span>
              <CurriculumIcon />
            </span>{' '}
            Review Curriculum
          </a>
          <a className='rounded-full p-3' href='https://github.com/rickferrodriguez' target='_blank' rel='noreferrer'>
            <GithubIcon />
          </a>
          <a className='rounded-full p-3' href='https://www.linkedin.com/in/richrodriguezdev/' target='_blank' rel='noreferrer'>
            <LinkdinIcon />
          </a>
        </div>
      </section>
      <section className='flex w-full grow h-full justify-center items-center order-1 lg:order-2'>
        <img className='lg:w-[250px] w-[210px] aspect-auto object-contain rounded-3xl' src={me} alt='profile photo' />
      </section>
    </div>
  )
}
