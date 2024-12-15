/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';

// Social media icons
import { socialLinks } from '../constants/index'; // Import your socialLinks data from the previous section

const Contact = () => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault(); // to block refresh after submit
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: 'success',
        });
        console.log('Successfully executed');

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle');
          setEmail('');
          setName('');
          setSuccess(true);
          setMessage('');
        }, 1000);
      })
      .catch((error) => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: 'I did not received your message',
          type: 'danger',
        });
        console.log(error);
        setEmail('');
        setName('');
        setError(true);
        setMessage('');
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* Get in Touch Section */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="flex flex-col w-full gap-7 mt-14"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="from_name"
              className="input"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="from_email"
              className="input"
              placeholder="johndoe@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your message
            <textarea
              type="text"
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how can i help you?"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            disabled={isLoading}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Grouped Social Media and Fox Canvas */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] flex flex-col lg:flex-row items-center justify-between lg:gap-4 mt-8 lg:mt-0">
        {/* Social Media Icons */}
        <div className="flex lg:flex-col flex-row items-center gap-4 p-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-500 transition duration-300 cursor-pointer"
            >
              <img src={link.iconUrl} alt={link.name} className="w-8 h-8" />
            </a>
          ))}
        </div>

        {/* Fox Canvas */}
        <div className="lg:w-[60%] w-full lg:h-[450px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fav: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                className="h-[350px]"
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Alert Messages */}
      {success && (
        <div className="flex justify-center">
          <div className="bg-[#E6FAF5] border-l-4 border-[#28C76F] text-[#155724] p-6 rounded-md shadow-md text-center">
            <h1 className="text-5xl font-bold mb-4">Thank You!</h1>

            <p className="text-3xl">
              Your message has been sent successfully. Someone from our team
              will get back to you soon.
            </p>
            <p className="mt-4 text-xl text-gray-600">
              Feel free to explore more on our website or connect via social
              media!
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex justify-center">
          <div className="bg-[#FDEDED] border-l-4 border-[#E53935] text-[#721C24] p-6 rounded-md shadow-md text-center">
            <h1 className="text-5xl font-bold mb-4">Something Went Wrong!</h1>
            <p className="text-2xl">
              We couldnot send your email. Please try again later or reach out
              directly at{' '}
              <span className="text-[#E85A71]">ridhipriya4503@gmail.com</span> .
            </p>
            <p className="mt-4 text-xl text-gray-600">
              We apologize for the inconvenience!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;



// /* eslint-disable no-unused-vars */
// import { Suspense } from 'react';
// import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Canvas } from '@react-three/fiber';
// import Fox from '../models/Fox';
// import Loader from '../components/Loader';
// import useAlert from '../hooks/useAlert';

// const Contact = () => {
//   const formRef = useRef(null);

//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const [currentAnimation, setCurrentAnimation] = useState('idle');

//   const { alert, showAlert, hideAlert } = useAlert();

//   const handleFocus = () => setCurrentAnimation('walk');
//   const handleBlur = () => setCurrentAnimation('idle');
//   const handleSubmit = (e) => {
//     e.preventDefault(); // to block refresh after submit
//     setIsLoading(true);
//     setCurrentAnimation('hit');

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         {
//           publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
//         }
//       )
//       .then(() => {
//         setIsLoading(false);
//         showAlert({
//           show: true,
//           text: 'Message sent successfully!',
//           type: 'success',
//         });
//         console.log('Successfully executed');

//         setTimeout(() => {
//           hideAlert();
//           setCurrentAnimation('idle');
//           setEmail('');
//           setName('');
//           setSuccess(true);
//           setMessage('');
//         }, 1000);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         showAlert({
//           show: true,
//           text: 'I did not received your message',
//           type: 'danger',
//         });
//         console.log(error);
//         setEmail('');
//         setName('');
//         setError(true);
//         setMessage('');
//       });
//   };

//   return (
//     <section className='relative flex lg:flex-row flex-col max-container'>
//       {success && (
//         <div className='flex justify-center'>
//           <div className='bg-[#E6FAF5] border-l-4 border-[#28C76F] text-[#155724] p-6 rounded-md shadow-md text-center'>
//             <h1 className='text-5xl font-bold mb-4'>Thank You!</h1>

//             <p className='text-3xl'>
//               Your message has been sent successfully. Someone from our team
//               will get back to you soon.
//             </p>
//             <p className='mt-4 text-xl text-gray-600'>
//               Feel free to explore more on our website or connect via social
//               media!
//             </p>
//           </div>
//         </div>
//       )}

//       {error && (
//         <div className='flex justify-center'>
//           <div className='bg-[#FDEDED] border-l-4 border-[#E53935] text-[#721C24] p-6 rounded-md shadow-md text-center'>
//             <h1 className='text-5xl font-bold mb-4'>Something Went Wrong!</h1>
//             <p className='text-2xl'>
//               We couldn't send your email. Please try again later or reach out
//               directly at{' '}
//               <span className='text-[#E85A71]'>ridhipriya4503@gmail.com</span>.
//             </p>
//             <p className='mt-4 text-xl text-gray-600'>
//               We apologize for the inconvenience!
//             </p>
//           </div>
//         </div>
//       )}

//       {!success && !error && (
//         <div className='flex-1 min-w-[50%] flex flex-col '>
//           <h1 className='head-text'>Get in Touch</h1>
//           <form
//             className='flex flex-col w-full gap-7 mt-14'
//             ref={formRef}
//             onSubmit={handleSubmit}
//           >
//             <label className='text-black-500 font-semibold'>
//               Name
//               <input
//                 type='text'
//                 name='from_name'
//                 className='input'
//                 placeholder='John Doe'
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//             </label>
//             <label className='text-black-500 font-semibold'>
//               Email
//               <input
//                 type='email'
//                 name='from_email'
//                 className='input'
//                 placeholder='johndoe@email.com'
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//             </label>
//             <label className='text-black-500 font-semibold'>
//               Your message
//               <textarea
//                 type='text'
//                 name='message'
//                 rows={4}
//                 className='textarea'
//                 placeholder='Let me know how can i help you?'
//                 required
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//             </label>
//             <button
//               type='submit'
//               className='btn'
//               onFocus={handleFocus}
//               disabled={isLoading}
//               onBlur={handleBlur}
//             >
//               {isLoading ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>
//       )}

//       <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
//         <Canvas
//           camera={{
//             position: [0, 0, 5],
//             fav: 75,
//             near: 0.1,
//             far: 1000,
//           }}
//         >
//           <directionalLight intensity={2.5} position={[0, 0, 1]} />
//           <ambientLight intensity={0.5} />
//           <Suspense fallback={<Loader />}>
//             <Fox
//               currentAnimation={currentAnimation}
//               className='h-[350px]'
//               position={[0.5, 0.35, 0]}
//               rotation={[12.6, -0.6, 0]}
//               scale={[0.5, 0.5, 0.5]}
//             />
//           </Suspense>
//         </Canvas>
//       </div>
//     </section>
//   );
// };

// export default Contact;
