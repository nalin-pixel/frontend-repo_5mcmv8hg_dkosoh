import React from 'react';
import Hero3D from './components/Hero3D';
import StoryScroller from './components/StoryScroller';
import ProjectsGrid from './components/ProjectsGrid';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Hero3D />
      <StoryScroller />
      <ProjectsGrid />
      <ContactCTA />
    </div>
  );
}

export default App;
