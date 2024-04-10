import React from 'react'
import Header from "../components/Header";
import Courosel from "../components/Courosel";

function Home() {
  return (
    <div>
      <Header />

     {/* <>--------------------------------------------------------------------------</> */}
      <div 
        className='intro flex-with-center' 
        style={{backgroundImage:`url('./images/introbg.svg')`}}
      >

        <div>
            <h1>Trev Dev HQ</h1>

            <div className="intro-content d-flex justify-content-between">
              <p>Trevor Pawlewicz <br/> <i>Senior Software Engineer</i></p>
              <button className="primary-button">
                <a href="#tech-stack">GET STARTED</a>
              </button>
            </div>
        </div>
      </div>

      <div id="tech-stack">
        <Courosel />
      </div> 


     {/* <>--------------------------------------------------------------------------</> */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#001220"
              fill-opacity="1"
              d="M0,224L21.8,197.3C43.6,171,87,117,131,101.3C174.5,85,218,107,262,144C305.5,181,349,235,393,240C436.4,245,480,203,524,160C567.3,117,611,75,655,64C698.2,53,742,75,785,96C829.1,117,873,139,916,176C960,213,1004,267,1047,240C1090.9,213,1135,107,1178,85.3C1221.8,64,1265,128,1309,176C1352.7,224,1396,256,1418,272L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
            ></path>
          </svg>
      </div>
      
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos='fade-right'>
              <h1>Allow me to introduce myself...</h1>
              <br />
              <p>
                I am a highly accomplished Lead Software Engineer who achieves 
                exceptional results through leadership and technical expertise. 
                I have a proven track record of leading the design and 
                development of complex software projects, resulting in significant 
                improvements in system performance, and optimized user experience. 
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img src="./images/jsbuff.svg" alt="" height="200" className="w-100" data-aos='fade-up'/>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos='fade-left'>
              <p>
                Skilled in mentoring and guiding junior engineers, 
                resulting in notable enhancements in coding skills, productivity, 
                and motivation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <>--------------------------------------------------------------------------</> */}

      <div className="devstack container my-5 n-box2 py-5" id="engineer-stats">
        <div className="text-center">
          <h3 className="font-bold text-center">My Engineering Approach</h3>

          <hr />

          <img
            src="./images/developer.svg"
            alt=""
            height="200"
            width="200"
            className="text-center"
          />
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className='font-bold'>
              <h3 className="font-bold">Engineer</h3>
              <hr />
              <p>Frontend Development </p>
              <p>Full Stack Development</p>
              <p>DevOps Engineer</p>
              <p>Team Lead Engineer</p>
              <p>Software Design</p>
              <p>Software Architecture</p>
              <p>APIs</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className='font-bold text-center'>
              <h3 className="font-bold">UX/UI</h3>
              <hr />
              <p></p>
              <p>UX Research</p>
              <p>UI Design</p>
              <p>Qualitative/Quantitative Data Analysis</p>
              <p>Wireframing and Prototyping</p>
              <p>Information Architecture</p>
              <p>Evidence-based Design Thinking Practice</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className='font-bold text-end'>
              <h3 className="font-bold">Leadership</h3>
              <hr />
              <p>Planning and Requirement Analysis</p>
              <p>Defining Requirements</p>
              <p>Designing Product Architecture</p>
              <p>Leading Product Development</p>
              <p>Leading Agile Teams</p>
              <p>Overseeing CD/CI Pipelines</p>
            </div>
          </div>
        </div>
      </div>

       {/* <>--------------------------------------------------------------------------</> */}

      <div>
        <h2 className='font-bold text-center'><i>Who is Trev?</i></h2>
        <div className="who-is flex-with-center" style={{backgroundImage:`url('/images/whois.svg')`}}>
          
          <div>
              <h3>My Interests and</h3>
              <h3>Passions...</h3>
              <hr />
              <p><pre>
                {JSON.stringify({
                  musician:["guitar, bass"],
                  sport: ["running, cycling"],
                  art: ["painting, drawing"],
                  volunteer: ["Special Olympics"],
                }, null, 2)}
              </pre></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home