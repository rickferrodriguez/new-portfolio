import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterStudies = (studies) => {
    return studies.filter(item => {
      return filters.type === 'all' || (
        filters.type === item.type
      )
    })
  }

  return { filters, setFilters, filterStudies }
}
