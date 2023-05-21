import { STUDIES, UNI } from '../constants'
import { useFilters } from '../hooks/useFilters'
import { Skills } from './Skills.jsx'

export function ItemStudies ({ item }) {
  const { name, place, dates, duration } = item
  return (
    <article className='grid gap-1'>
      <strong className='text-kanagawa-roninYellow text-base font-bold'>{name}</strong>
      <section className='font-bold text-sm'>
        <span>{place}</span>{duration ? ' - ' : ''}<span>{duration}</span>
      </section>
      <span className='font-bold text-sm'>{dates}</span>
    </article>
  )
}

export function Studies () {
  const { filterStudies } = useFilters()

  const filteredStudies = filterStudies(STUDIES)

  return (
    <section className='flex flex-col gap-6 h-screen' id='studies'>
      <section className='grid gap-4'>
        <h2 className='text-kanagawa-autumnRed text-xl font-bold mb-6'>
          ACADEMIC BACKGROUND
        </h2>
        <h3 className='text-base text-kanagawa-autumnGreen font-bold'>UNIVERSITY EDUCATION</h3>
        <ItemStudies item={UNI} />
      </section>

      <section className='grid gap-5'>
        <h3 className='text-base text-kanagawa-autumnGreen font-bold'>COMPLEMENTARY ACADEMIC TRAINING</h3>
        <Skills />
        <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {filteredStudies.map((item, index) => (
            <li key={index}>
              <ItemStudies item={item} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
