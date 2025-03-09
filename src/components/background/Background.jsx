import Blob from './Blob.jsx'
import Header from './Header.jsx'

const Background = (props) => {

  const { children, sections, currentSection, setCurrentSection } = props;
  
  const handleSection = (section) => {
    if (section !== undefined) {
      let indexSection = sections.indexOf(section)
      setCurrentSection(sections[indexSection])
    }
  }

  return (
    <>
      {/* Background */}
      <div className='bg-blue-lightest absolute min-h-screen w-full -z-50'>
        {/* Blob */}
        <div className='absolute -z-40 -left-0 top-0 -translate-y-1/4 -translate-x-1/2'>
          <Blob />
        </div>

        {/* Navbar */}
        <Header />

        {/* Main */}
        {/* Justification:
        https://www.w3.org/WAI/tutorials/page-structure/regions/#main-content */}
        <main className='pt-20 pb-10 px-20'>
          { children }
        </main>
      </div>
    </>
  )
  
}

export default Background