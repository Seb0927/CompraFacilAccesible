import { Background, Catalog } from './components';
import { useState } from 'react';

const App = () => {
  const sections = ['catalog', 'blog', 'account', 'payment', 'help'];
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <Background>
      <Catalog />
    </Background>
  )
}

export default App
