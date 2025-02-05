import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Integrations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
