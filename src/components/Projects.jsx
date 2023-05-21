import { PROJECTS } from '../constants'
import { ExternalLinkIcon, GithubIcon } from './Icons'

export function ItemProject ({ project }) {
  const { tecnologies, name, img, href, repo, description } = project
  return (
    <li className='rounded-3xl overflow-hidden pb-5 lg:p-5 relative lg:hover:scale-110 ease-out duration-300'>
      <article className='grid gap-2 lg:rounded-3xl lg:overflow-hidden lg:pb-1'>
        <div>
          <img src={img} alt={name} className='lg:w-full lg:aspect-video lg:object-cover' />
        </div>
        <h2 className='font-bold text-kanagawa-autumnGreen'>
          <div className='absolute z-0 scale-95' />
          <a href={href} target='_blank' rel='noreferrer'>
            <span className='absolute z-20 -inset-y-0 -inset-x-0 rounded-3xl' />
            <span className='relative z-10'>{name}</span>
          </a>
        </h2>
        <section className='flex gap-2'>
          {
            tecnologies.map((item, index) => (
              <div key={index} className='flex gap-2'>
                <img className='w-4 aspect-square object-contain' src={item.image} alt='' />
                <span className='text-kanagawa-autumnRed text-sm'>{item.name}</span>
              </div>
            ))
          }
        </section>
        <p className='line-clamp-4'>{description}</p>
        <section className='flex px-1 gap-2 lg:gap-5 [&>a]:flex [&>a]:justify-center [&>a]:shadow [&>a]:shadow-kanagawa-winterRed [&>a]:rounded-3xl
        [&>a]:px-3 [&>a]:py-2 font-bold'
        >
          <a className='w-full flex gap-2 z-40 hover:bg-kanagawa-winterRed/40' href={repo} target='_blank' rel='noreferrer'> <span><GithubIcon /></span> Github</a>
          <a className='w-full flex gap-2 z-40 hover:bg-kanagawa-winterRed/40' href={href} target='_blank' rel='noreferrer'> <span><ExternalLinkIcon /></span> Website</a>
        </section>
      </article>
    </li>
  )
}

export function Projects () {
  return (
    <section className='w-full flex flex-col' id='projects'>
      <h2 className='text-kanagawa-autumnRed text-xl font-bold mb-6'>
        PROJECTS
      </h2>
      <ul className='grid grid-cols-1 gap-8 items-center w-full lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <ItemProject
            key={project.id}
            project={project}
          />
        ))}
      </ul>
    </section>
  )
}
