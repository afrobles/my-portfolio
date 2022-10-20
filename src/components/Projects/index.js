import { useEffect, useState } from 'react'
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
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <Project title="MEP modelling of waste pipelines based on plumbing fixtures, a slope, and a placeholder route"
        video={vid}
        description = {`The functionality of the Dynamo Script is to generate the waste pipeline of a building taking into account all the constraints necessary such as:
- Slope
- Pipe diameters based on the flow passing throug
- Downspout location
- Fixed point location
In addition, the script was able to create the proper connections between pipes at different angles.
Complexity Level 8/10`}/>
      </div>
    </>
  )
}

function Project({ title, video, description, resources }) {
  return (
    <>
      {' '}
      <div className="video-container">
        <video controls width="600px">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <h2>{title}</h2>
      <text className='description'>{description}</text>
      <span className="resources">{resources}</span>
    </>
  )
}

export default Projects
