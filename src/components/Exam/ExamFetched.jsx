import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, doc } from 'firebase/firestore';

const fetchQuestions = async (course, chapter) => {
  const courseDocRef = doc(db, "courses", course);
  const chaptersCollectionRef = collection(courseDocRef, "chapters");
  const chapterDocRef = doc(chaptersCollectionRef, chapter);
  const questionsCollectionRef = collection(chapterDocRef, "questions");

  const querySnapshot = await getDocs(questionsCollectionRef);
  const questions = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return questions;
};

// Example usage in a React component
const DisplayQuestions = ({ course, chapter }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const fetchedQuestions = await fetchQuestions(course, chapter);
      setQuestions(fetchedQuestions);
    };

    getQuestions();
  }, [course, chapter]);

  return (
    <div>
      <h1 className="text-center">Questions for {course} - {chapter}</h1>
      <div className="questions-container">
        {questions.map(question => (
          <div key={question.id} className="question-item">
            <h3>{question.question}</h3>
            <p>A. {question.optionA}</p>
            <p>B. {question.optionB}</p>
            <p>C. {question.optionC}</p>
            <p>D. {question.optionD}</p>
            <p><strong>Answer:</strong> {question.answer}</p>
            <p><strong>Explanation:</strong> {question.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayQuestions;
