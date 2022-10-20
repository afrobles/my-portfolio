import { useEffect, useState } from 'react'
import {
  faPython,
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import vid from '../../assets/images/DemoSanitary.mp4'

function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="video-container">
            <video controls width="600px">
              <source src={vid} type="video/mp4" />
            </video>
          </div>

          <h2>Yolo</h2>
          <p>
            Im a civil engineer with a very solid intrest for programming and i
            would like to use it towards the aoutomation of tasks related to
            construction. I believe that the best possible enviroment to do this
            is trough BIM tools, given that is the technology and data
            management side of construction. hhmgvbk,hgvbkjfykv bhkgftdcfjgy
            vrdrtbgbnuyg
          </p>
          <div className="video-container">
            <video controls width="600px">
              <source src={vid} type="video/mp4" />
            </video>
          </div>

          <h2>Yolo</h2>
          <p>
            Im a civil engineer with a very solid intrest for programming and i
            would like to use it towards the aoutomation of tasks related to
            construction. I believe that the best possible enviroment to do this
            is trough BIM tools, given that is the technology and data
            management side of construction. hhmgvbk,hgvbkjfykv bhkgftdcfjgy
            vrdrtbgbnuyg
          </p>
        </div>
      </div>
    </>
  )
}

export default Projects
