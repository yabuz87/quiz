import React, { useEffect, useState } from 'react';
import { adminDb } from './firebaseConfig'; // Ensure you import the admin database reference correctly
import { collection, getDocs, query, where } from 'firebase/firestore';

const Questions = ({ selectedCourse, selectedChapter }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const courseDocRef = collection(adminDb, 'courses', selectedCourse, 'chapters', selectedChapter, 'questions');
      const questionSnapshot = await getDocs(courseDocRef);
      const questionList = questionSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(questionList);
    };

    if (selectedCourse && selectedChapter) {
      fetchQuestions();
    }
  }, [selectedCourse, selectedChapter]);

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h4>{question.question}</h4>
          <p>A. {question.optionA}</p>
          <p>B. {question.optionB}</p>
          <p>C. {question.optionC}</p>
          <p>D. {question.optionD}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
