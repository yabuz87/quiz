import React, { useState, useEffect } from 'react';
import fetchCourses from '../Exam/ExamFetched'; // Ensure correct import

const CoursesAndChapters = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const courseList = await fetchCourses();
      setCourses(courseList);
    };

    fetchData();
  }, []);

  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    const selectedCourse = courses.find(c => c.id === course);
    setChapters(selectedCourse?.chapters || []);
  };

  const handleChapterChange = (e) => {
    setSelectedChapter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Course: ", selectedCourse);
    console.log("Selected Chapter: ", selectedChapter);
    // Fetch and display questions based on the selection
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Course:</label>
        <select value={selectedCourse} onChange={handleCourseChange}>
          <option value="">Select a course</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.courseName}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Chapter:</label>
        <select value={selectedChapter} onChange={handleChapterChange} disabled={!selectedCourse}>
          <option value="">Select a chapter</option>
          {chapters.map(chapter => (
            <option key={chapter} value={chapter}>{chapter}</option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={!selectedChapter}>Get Questions</button>
    </form>
  );
};

export default CoursesAndChapters;
