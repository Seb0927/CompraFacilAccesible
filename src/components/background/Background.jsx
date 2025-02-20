import React from 'react'

const Fondo = ({ children, sections, currentSection, setCurrentSection }) => {
  
  const handleSection = (section) => {
    if (section !== undefined) {
      let indexSection = sections.indexOf(section)
      setCurrentSection(sections[indexSection])
    }
  }

  return (
    <>
      {/* Background */}
      <div className='bg-blue-lightest min-h-screen w-full'>
        { children }
      </div>
    </>
  )
  
}

export default Fondo