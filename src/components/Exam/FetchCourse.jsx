// Fetching data from the admin database
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Initialize admin Firebase app within user project
const adminConfig = {
  apiKey: "AIzaSyChYFHQqi6abS5IpNaD6MxdB0ZQi_XITnE",
  authDomain: "adminofquiz.firebaseapp.com",
  projectId: "adminofquiz",
  storageBucket: "adminofquiz.firebasestorage.app",
  messagingSenderId: "328804395592",
  appId: "1:328804395592:web:65ec32f43285be1f9d067d"
};

const adminApp = initializeApp(adminConfig, 'admin');
const adminDb = getFirestore(adminApp);

// Fetching courses and questions
async function fetchCourses() {
  const courseCollection = adminDb.collection('courses');
  const courseSnapshot = await getDocs(courseCollection);
  const courseList = courseSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(courseList);
}

fetchCourses();
