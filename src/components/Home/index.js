import './index.scss'

import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from "../Logo"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['n', 'd', 'r', 'é', 's', ' ', 'R', 'o', 'b', 'l', 'e', 's']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    ' ',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={18}
          />
        </h1>
        <h2>
          React-NodeJs app development/ BIM solutions expert /
          Forge-Dynamo-Python expert{' '}
        </h2>
        <Link to="/about" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
  )
}

export default Home
