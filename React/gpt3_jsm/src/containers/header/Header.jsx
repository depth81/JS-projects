import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>Laboris nisi amet deserunt reprehenderit dolore nostrud exercitation Lorem adipisicing dolore qui ea. Et do et elit officia in ut laboris sunt. Ullamco non adipisicing duis aliqua cillum nulla ex ut veniam laboris cupidatat laborum excepteur. Ipsum Lorem adipisicing exercitation officia dolore anim ipsum eiusmod consequat incididunt sit dolor reprehenderit.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested accesss a visit in the last 24 hours</p>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
      </div>
    </div>
  )
}

export default Header