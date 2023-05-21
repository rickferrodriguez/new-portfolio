import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Studies } from './components/Studies'
import { FiltersProvider } from './context/filters'

function App () {
  return (
    <FiltersProvider>
      <Header />
      <main className='w-full mt-[70px] grid gap-20'>
        <Home />
        <Experience />
        <Projects />
        <Studies />
      </main>
    </FiltersProvider>
  )
}

export default App
