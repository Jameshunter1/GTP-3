import React from 'react'
import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilities" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilites are beyond our imagination.</h1>
        <p>Artificial Intelligence (AI) is so vast and limitless that it cannot be fully comprehended by the human mind. It suggests that there are endless possibilities and opportunities for AI to be utilized and developed, and that the limits of what can be achieved with AI technology are not yet known.</p>
      </div>
    </div>
  )
}

export default Possibility
