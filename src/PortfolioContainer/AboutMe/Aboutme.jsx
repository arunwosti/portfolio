import React from 'react';
import './Aboutme.css';

export default function Aboutme() {
  return (
      <div className='about-me-container'>
    <div className='about-me-parent'>
        <div className='heading-container'>
           <div className='screen-heading'><span>About Me</span></div>
           <div className='screen-sub-heading'><span>Why choose me ?</span></div>
           <div className='heading-seperater'>
             <div className='seperate-line'></div>
             <div className='seperate-blob'></div>
            </div>
        </div>
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
             <span className='about-me-description'>
             Front-End web and mobile developer with background knowledge of HTML, CSS, SASS, BOOTSTRAP, React JS & Flutter mobile app developer along with a knack of building applications with utmost efficiency. Strong professional with a BSc willing to be an asset for an organization.
             </span> 
             <div class="about-me-highlights">
                 <div class="highlight-heading">
                     <span>Here are a Few Highlights:</span>
                     </div>
                     
                         <div class="highlight">
                             <div class="highlight-blob"></div>
                             <span>Interactive Front End as per the design</span>
                             </div>
                             <div class="highlight">
                                 <div class="highlight-blob"></div>
                                 <span>React and React Native</span>
                                 </div>
                                 <div class="highlight">
                                     <div class="highlight-blob"></div>
                                     <span>HTML, CSS and BOOTSTRAP</span>
                                     </div>
                                     
                                         <div class="highlight">
                                             <div class="highlight-blob">
                                                 </div>
                                                 <span>Flutter App Development</span>
                                           </div>
            </div> 
            <div class="about-me-options">
                <button class="btn primary-btn "> Hire Me </button>
                <a href="ArunWosticv.docx" download="Arun Wosticv.docx">
                    <button class="btn highlighted-btn">Get Resume</button>
                    </a>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
