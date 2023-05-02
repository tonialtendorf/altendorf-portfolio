import React from 'react';
import resumeExample from '../assets/resumeexample.jpg'

const ResumeLink = () => {
  return (
    <a href={resumeExample} download>
      Download Resume (example)
    </a>
  );
};

export default ResumeLink;