import { SKILLS } from '../constants'
import { useFilters } from '../hooks/useFilters'
import { ClearFiltersIcon } from './Icons'

export function Skills () {
  const { setFilters, filters } = useFilters()

  const handleFilter = (value) => {
    const newFilter = value
    setFilters({ type: newFilter, active: !filters.active })
  }

  return (
    <section className='flex gap-3 items-center'>
      <ul className='flex flex-wrap justify-around gap-5'>
        <button
          className='hover:cursor-pointer hover:bg-kanagawa-winterRed/30 shadow shadow-kanagawa-winterRed w-[90px] py-1 rounded-xl flex flex-col gap-1 items-center justify-center'
          onClick={() => {
            handleFilter('all')
          }}
        >
          <div className='flex-grow flex items-end'>
            <ClearFiltersIcon />
          </div>
          <small className='flex-grow flex items-end'>Show All</small>
        </button>
        {SKILLS.map((skill) => {
          const { id, name, img } = skill
          return (
            <li key={id}>
              <button
                className='hover:cursor-pointer hover:bg-kanagawa-winterRed/30 shadow shadow-kanagawa-winterRed w-[90px] py-1 rounded-xl flex flex-col gap-1 items-center'
                onClick={() => {
                  handleFilter(name)
                }}
              >
                <img
                  src={img}
                  alt={name}
                  className='w-[50px] aspect-square object-contain'
                />
                <small>{name}</small>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
