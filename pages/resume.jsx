import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Hanuman | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Hanuman Reddy Solleti</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/hanumanreddy/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/HanumanReddy1212'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Full Stack Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Full Stack Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>SpringBoot
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>RESTAPI
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Fourth Quarter
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Full Stack Developer (2022 May - Aug)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed cross-platform dashboard for vendors using NodeJS, ReactJS, TypeScript, Ruby on Rails, and optimized data retrieval with GraphQL, and NodeJS service resulting in a 13% performance improvement.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Software Engineer
            </span>
            <span className='px-2'>|</span>Bangalore, India
          </p>
          <p className='py-1 italic'>Wipro Limited (2019 Aug - 2021 Jul)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Created a budget estimate and payroll management SPA for a financial organization using React JS, Node.js, HTML, CSS, and PostgreSQL</li>
            <li>Improved build time by 10% with CI/CD tools and optimized system response time by 15% by identifying and rewriting long-running SQL queries.</li>
            <li>Improved server performance by 25% through caching and retrieving index files from AWS S3.</li>
            <li>Single-handedly redeveloped 3+ business-critical mainframe batch applications by building Rest APIs in Java, Spring Boot, and Spring Batch technologies in collaboration with the Business team.</li>
            <li>Automating the commit-to-deploy workflow for Kubernetes in CircleCI will increase defects identification and issue detection by 20%.</li>
            <li>Created stored procedures in Microsoft SQL Server for updating transaction tables on a 12-hour schedule.</li>
            <li>Individually designed and implemented a WCF tool in C# to monitor missing updates for User Stories during an agile sprint, resulting in a 40% improvement in update completion.</li>
            <li>Wrote unit, regression, and performance tests using Jest, Mockito, and JUnit, resulting in a 10% improvement in product quality and easier defect identification</li>
          </ul>
        </div>

        {/*  */}
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}
      
        {/* Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;
