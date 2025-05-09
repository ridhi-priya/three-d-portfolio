/* eslint-disable react/no-unescaped-entities */
import CTA from '../components/CTA.jsx';
import { skills, experiences } from '../constants/index.js';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{' '}
        <span className='blue-gradient_text font-semibold drop-shadow '>
          Ridhi
        </span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
           Frontend Developer with 3+ years of experience building fast, scalable, and accessible web applications using React.js, JavaScript, and TypeScript. I specialize in performance optimization, multilingual solutions, and crafting intuitive user experiences.
        </p>
      </div>
      <div className='py-5 flex flex-col'>
  <h3 className='subhead-text'>My Skills</h3>
  <div className='mt-10 flex flex-wrap gap-12'>
    {skills.map((skill) => (
      <div key={skill.id} className='block-container w-20 h-20 rounded-xl'>
        <div className='btn-front rounded-xl flex justify-center items-center relative group '>
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className='w-1/2 h-1/2 object-contain'
          />
          <span className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            {skill.text}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* experiences */}
      <div className=' py-16 '>
        <h1 className='subhead-text'>Work Experiences</h1>
        {/* <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leaving up my skills and
            teaming up with smart people. Here is the rundown:
          </p>
        </div> */}
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience,index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  // <-- Changed: Directly pass JSX element here
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium font-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2 '>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point -${index}`}
                      className='text-black-500/60 font-normal pl-1 text-sm '
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default About;
