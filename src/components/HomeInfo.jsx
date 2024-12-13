/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { arrow } from '../../public/assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box w-[400px] h-24'>
    <p className='font-medium sm:text-md text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn underline'>
      {btnText} <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue text-white px-2 py-2 mx-5'>
      Hi, I am <span className='font-semibold'>Ridhi</span>👋
      <br />A Frontend developer .
    </h1>
  ),
  2: (
    <InfoBox
      text='Building new projects and picking up many skills along the way'
      link='/about'
      btnText='Learn More'
    />
  ),
  3: (
    <InfoBox
      text='View my amazing portfolio projects'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'am just a few keystrokes away"
      link='/contact'
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
