import React, { useContext } from 'react';
import { MyContext } from '../../context'; // Ensure correct import path
import { useNavigate } from 'react-router-dom';
import './exam.css';

const Chapter = () => {
  const { subject, setChapter } = useContext(MyContext);

  const navigate = useNavigate();

  // Create an array to represent chapters
  const chapters = Array.from({ length: 7 }, (_, i) => `Chapter ${i + 1}`);

  const handleSubject = (subject, e) => {
    setChapter(e);
    navigate("/addQuestion");
    console.log(`Selected subject: ${subject}`);
  };
  const handleBack= ()=>{
    navigate("/dashboard");
  }

  return (
    <div style={{marginTop:"140px"}}>
      <div>
        <h1 className="text-center">{subject}</h1>
        <h3 className="text-center">Chapters</h3>
        <div className="home-container container-lg">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="option-container"
              onClick={() => handleSubject(subject, chapter)}
            >
              <div>{chapter}</div>
              <p>Something about {chapter.toLowerCase()}</p>
            </div>
          ))}
        </div>
        <i class="bi bi-caret-left" onClick={handleBack}></i>
      </div>
    </div>
  );
};

export default Chapter;
