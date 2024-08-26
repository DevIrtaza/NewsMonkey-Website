import React from 'react';
import './Home.css'; // Import the stylesheet
import Footer from './Footer';
import World from './World';
import Sports from './Sports';
import Topstories from './Topstories';

export default function Home() {
  return (
    <div className="hero-section">
    <h1>Global Summit Announces New Climate Action Plan</h1>
      <div className="hero-content">
        
      
        <img className='heroimage' src="https://media.npr.org/assets/img/2021/09/21/ap21264530152454_custom-e6b793f0c29fd1ac821facd49655cadc69d94f32.jpg?s=1100&c=85&f=webp" alt="" />


        <div className="key-points">
          
          <h2>World leaders gather in Paris to unveil a comprehensive strategy at combating climate change and reducing global carbon emissions by 50% by 2030.</h2>
          <p><strong>Technology Focus:</strong> Emphasis on advancing renewable energy technologies and practices.</p>
          <p><strong>Financial Commitment:</strong> An initial $200 billion fund has been allocated for climate projects.</p> 
            <p><strong>New Targets:</strong> The plan sets ambitious targets for reducing greenhouse gas emissions.</p>
            <a href='https://unfccc.int/process-and-meetings/the-paris-agreement' target='_blank' className="read-more">Read More</a>
      
        </div>
        
      </div>
      <Topstories/>
      <World/>
      <Sports/>
      <Footer/>
    </div>
  );
}
