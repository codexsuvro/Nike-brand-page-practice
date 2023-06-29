import { useState } from 'preact/hooks'
import './app.css';
import HeroSection from './assets/components/Hero';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo"/>
        </div>
        <ul>
          <li href='#'>Menu</li>
          <li href='#'>Location</li>
          <li href='#'>About</li>
          <li href='#'>Contact</li>
        </ul>
        <button>login</button>
      </nav>
      <HeroSection/>
      </div>
    </>
  )
}
