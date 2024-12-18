import React, { useEffect, useState } from 'react';
import { adminDb } from './firebaseConfig'; // Ensure you import the admin database reference correctly
import { collection, getDocs } from 'firebase/firestore';

const CoursesAndChapters = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courseCollection = collection(adminDb, 'courses');
      const courseSnapshot = await getDocs(courseCollection);
      const courseList = courseSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(courseList);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.courseName}</h2>
          <ul>
            {course.chapters.map(chapter => (
              <li key={chapter}>{chapter}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursesAndChapters;
