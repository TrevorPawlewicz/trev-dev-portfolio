import React from 'react'
import Header from "../components/Header";
import joblist from "../data/jobdata";
import companyList from "../data/company-data";
// import { FaApple, FaPlaystation, SiWarnerbros, TbBrandDisney } from "react-icons/fa";

function Jobs() {
  return (
    <div>
      <Header />
      <div
        className="jobs-intro"
        style={{ backgroundImage: `url('./images/jobs-background.svg')` }}
      >
        <div className="jobs-intro-content">
          <h1>Trev's Career<br/>Journey</h1>

          <div>
            <p>
              “I have had an incredible journey that began at web development 
              through user experience and application design. Leading teams with 
              innovation and cultivating enthusiasm for product creation is a passion.”
            </p>

            <button className="primary-button"><a href="#jobs-list">GET STARTED</a></button>
          </div>
        </div>
      </div>

      <div className="why-trev-parent">
        <div className="why-trev n-box1 flex-with-center">
          <h1>Why Trev?</h1>
          <div className="why-trev-content">
            <p>Simple..</p>
            <p>I know how to kiss..</p>
            <p>No No No....Not that kiss</p>
            <p>I know how to</p>
            <p>Keep It Straight , Simple</p>
          </div>
        </div>
      </div>

      <div className="container jobs-list mb-5" id='jobs-list'>
        <h3 className="font-bold">My career so far...</h3>
        <hr />

        <div className="row mt-5">
          {joblist.map((job) => {
            return (
              <div className="col-md-6">
                <div className="position-relative jobs">
                  <img src={job.image} alt="" className='w-100'/>
                  <div className="jobs-content w-100">
                    <h3>{job.title}</h3>
                    <hr />
                    <p>{job.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      <hr />


      <div className="container company-list mb-5" id='company-list'>
        <h3 className="font-bold">Other companies I have developed products for...</h3>
        <hr />

        <div className="row mt-5">
          {companyList.map((company) => {
            return (
              <div className="col-md-3">
                <div className="position-relative company">
                  <img src={company.image} alt="" className='w-100'/>
                </div>
              </div>
            );
          })}
        </div>

        </div>
      </div>
  );
}

export default Jobs;