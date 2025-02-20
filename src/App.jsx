import { Background } from './components';
import { useState } from 'react';

const App = () => {
  const sections = ['catalog', 'blog', 'account', 'payment', 'help'];
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <Background>
      <h1 className='text-8xl font-bold underline'>
        Hello world!
      </h1>
    </Background>
  )
}

export default App
