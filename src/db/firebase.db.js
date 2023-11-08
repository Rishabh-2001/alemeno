import db from "../firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  ref,
  listCollections,
  addDoc,
  query,
  where,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

export async function getAllCourses() {
  // Fetch the document
  // const querySnapshot = await getDocs(collection(db, "EdTech", "courses", "Frontend Development"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  // let data=[{
  //     "id":1,
  //     "courseLevel": "Intermediate",
  //     "studentsEnroled": 0,
  //     "catergory": "Frontend",
  //     "totalRatings": 0,
  //     "HoursRequired": 14,
  //     "about": "AFrom the basics of HTML and CSS to mastering Javascript frameworks like React, Angular, and Vue.js, the course has everything you need to be a professional front-end developer. The course also dives deeper into some advanced concepts like creating responsive designs, interactive interfaces, and much more. So get ready to deliver amazing web experiences that attract users and drive you toward success. bout Course ",
  //     "certificationValid": false,
  //     "Instructor": "Rishabh kr",
  //     "whoCanTake": [
  //         "Engineers",
  //         "Graduates",
  //         "Students",
  //         "Working professionals"
  //     ],
  //     "certificateName": "React JS Expertise",
  //     "name": "React js Certification Course",
  //     "courseType": "self-paced",
  //     "numberOfModules": 7,
  //     "skillsAcquired": [
  //         "Web Design",
  //         "HTML",
  //         "CSS",
  //         "Javascript",
  //         "React JS",
  //         "Jest"
  //     ],
  //     "description": "he first impression is the last impression, they say. Get your hands on creating the best front-end interfaces around. DevLabs bring to you a master course on frontend development with the latest skills and development practices. Whether you are a beginner or a professional developer, this course adds weight to your set of skills and opens the door to possibilities for a successful career. "
  // },
  // {
  //     "id":2,
  //     "courseLevel": "Advanced",
  //     "studentsEnroled": 0,
  //     "catergory": "Frontend",
  //     "totalRatings": 0,
  //     "HoursRequired": 19,
  //     "about": "With a median pay of 11 LPA, Full-Stack Development is one of the most in-demand skills in the industry. Organizations heavily rely on full-stack developers for their front-end, back-end, deployment, and debugging requirements. With the help of the latest tools and technologies in this course, design & build user interfaces, manage data flow and state with React, and create dynamic, server-side applications with Node.js.",
  //     "certificationValid": false,
  //     "Instructor": "Raghav Arora",
  //     "whoCanTake": [
  //         "Engineers",
  //         "Graduates",
  //         "Students",
  //         "Working professionals"
  //     ],
  //     "certificateName": "React JS Skill Advanced",
  //     "name": "React js Certification Professionals",
  //     "courseType": "self-paced",
  //     "numberOfModules": 9,
  //     "skillsAcquired": [
  //         "Web Design",
  //         "HTML",
  //         "CSS",
  //         "Javascript",
  //         "React JS",
  //         "Jest",
  //         "Redux",
  //         "REsponsive",
  //     ],
  //     "description": "React Certification Training will train you to build efficient React applications by mastering the concepts of React, Redux, and React Native. In this Advanced React Course, you will learn how to build simple components & integrate them into more complex design components. After completing this React online training, you will be able to build the applications using React concepts such as JSX, Redux, Asynchronous Programming using Redux-Saga middleware, Fetch data using GraphQL, perform Testing using Jest, successively Deploy applications using Nginx and Docker, plus build Mobile applications using React Native."
  // },
  // {
  //  "id":3,
  // "courseLevel": "Advanced",
  // "studentsEnroled": 0,
  // "catergory": "Frontend",
  // "totalRatings": 0,
  // "HoursRequired": 19,
  // "about": "AngularJS is a Javascript open-source front-end structural framework that is mainly used to develop single-page web applications(SPAs). It is a continuously growing and expanding framework which provides better ways for developing web applications. It changes the static HTML to dynamic HTML. Its features like dynamic binding and dependency injection eliminate the need for code that we have to write otherwise.",
  // "certificationValid": false,
  // "Instructor": "Sameer Bansal",
  // "whoCanTake": [
  //     "Engineers",
  //     "Graduates",
  //     "Students",
  //     "Working professionals"
  // ],
  // "certificateName": "Angular JS Skill Advanced",
  // "name": "Angular js Certification Professionals",
  // "courseType": "self-paced, live-paced",
  // "numberOfModules": 12,
  // "skillsAcquired": [
  //     "Web Design",
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Angular JS",
  //     "Jest",
  //     "Redux",
  //     "REsponsive",
  // ],
  // "description": "Edureka's Angular training course is curated by 10+ years of experienced industry experts and will train you to develop efficient Angular applications by mastering the concepts of Angular 12. After completing this training online , you will be able to build dynamic, responsive, and interactive web applications using Angular concepts such as Angular Modules, Components, Databinding, Angular Forms, Angular Directives and Pipes, Services and Dependency Injection (DI), Routing, Communication with backend services over HTTP protocol, Authentication with JWT, and Application Deployment."
  // },{
  //     "id":2,
  //     "courseLevel": "Advanced",
  //     "studentsEnroled": 0,
  //     "catergory": "Frontend",
  //     "totalRatings": 0,
  //     "HoursRequired": 19,
  //     "about": "With a median pay of 11 LPA, Full-Stack Development is one of the most in-demand skills in the industry. Organizations heavily rely on full-stack developers for their front-end, back-end, deployment, and debugging requirements. With the help of the latest tools and technologies in this course, design & build user interfaces, manage data flow and state with React, and create dynamic, server-side applications with Node.js.",
  //     "certificationValid": false,
  //     "Instructor": "Raghav Arora",
  //     "whoCanTake": [
  //         "Engineers",
  //         "Graduates",
  //         "Students",
  //         "Working professionals"
  //     ],
  //     "certificateName": "React JS Skill Advanced",
  //     "name": "React js Certification Professionals",
  //     "courseType": "self-paced",
  //     "numberOfModules": 9,
  //     "skillsAcquired": [
  //         "Web Design",
  //         "HTML",
  //         "CSS",
  //         "Javascript",
  //         "React JS",
  //         "Jest",
  //         "Redux",
  //         "REsponsive",
  //     ],
  //     "description": "React Certification Training will train you to build efficient React applications by mastering the concepts of React, Redux, and React Native. In this Advanced React Course, you will learn how to build simple components & integrate them into more complex design components. After completing this React online training, you will be able to build the applications using React concepts such as JSX, Redux, Asynchronous Programming using Redux-Saga middleware, Fetch data using GraphQL, perform Testing using Jest, successively Deploy applications using Nginx and Docker, plus build Mobile applications using React Native."
  // },
  // {
  //  "id":4,
  // "courseLevel": "Advanced",
  // "studentsEnroled": 0,
  // "catergory": "DSA",
  // "totalRatings": 0,
  // "HoursRequired": 19,
  // "about": "Data Structures are typically used to organize, process, retrieve and store data on computers for efficient use. Having the right understanding and using the right data structures helps software engineers write the right code.",
  // "certificationValid": false,
  // "Instructor": "Rishabh Bansal",
  // "whoCanTake": [
  //     "Engineers",
  //     "Graduates",
  //     "Students",
  //     "Working professionals"
  // ],
  // "certificateName": "DAta Structures & Algorithms: Introductions",
  // "name": "Introduction to DAta Structures & Algorithms",
  // "courseType": "self-paced, live-paced",
  // "numberOfModules": 34,
  // "skillsAcquired": [
  //    "Problem Solving",
  //    "Algorithms",
  //    "Data strucutres",
  //    "Arrays",
  //    "Linked List",
  //    "Graphs"
  // ],
  // "description": "Data structures are a key component of Computer Science and help in understanding the nature of a given problem at a deeper level. They're widely utilized in Artificial Intelligence, operating systems, graphics, and other fields. If the programmer is unfamiliar with data structure and Algorithm, they may be unable to write efficient data-handling code. A strong grasp of this is of paramount significance if you want to learn how to organize and assemble data and solve real-life problems. Almost all product-based companies look at how strong you are at data structures, so it will also help you in your day-to-day work Knowing when to apply the proper data structures is an important step to write efficient code by managing data properly"
  // },
  // {
  //     "id":4,
  //    "courseLevel": "Intermediate",
  //    "studentsEnroled": 0,
  //    "catergory": "DSA",
  //    "totalRatings": 0,
  //    "HoursRequired": 19,
  //    "about": "Data Structures are typically used to organize, process, retrieve and store data on computers for efficient use. Having the right understanding and using the right data structures helps software engineers write the right code.",
  //    "certificationValid": false,
  //    "Instructor": "Shubham Kaushik",
  //    "whoCanTake": [
  //        "Engineers",
  //        "Graduates",
  //        "Students",
  //        "Working professionals"
  //    ],
  //    "certificateName": "DAta Structures & Algorithms: Advanced",
  //    "name": "Deep Dive into DSA",
  //    "courseType": "self-paced, live-paced",
  //    "numberOfModules": 30,
  //    "skillsAcquired": [
  //       "Problem Solving",
  //       "Algorithms",
  //       "Data strucutres",
  //       "Arrays",
  //       "Linked List",
  //       "Graphs"
  //    ],
  //    "description": "Data structures are a key component of Computer Science and help in understanding the nature of a given problem at a deeper level. They're widely utilized in Artificial Intelligence, operating systems, graphics, and other fields. If the programmer is unfamiliar with data structure and Algorithm, they may be unable to write efficient data-handling code. A strong grasp of this is of paramount significance if you want to learn how to organize and assemble data and solve real-life problems. Almost all product-based companies look at how strong you are at data structures, so it will also help you in your day-to-day work Knowing when to apply the proper data structures is an important step to write efficient code by managing data properly"
  //    },
  //    {
  //     "id": 5,
  //     "courseLevel": "Beginner",
  //     "studentsEnroled": 0,
  //     "category": "Testing",
  //     "totalRatings": 0,
  //     "HoursRequired": 12,
  //     "about": "Testing is an essential part of software development that ensures the quality and reliability of the product. Understanding testing principles and techniques is crucial for delivering robust and bug-free software solutions.",
  //     "certificationValid": false,
  //     "Instructor": "Jessica Lee",
  //     "whoCanTake": ["Developers", "Quality Assurance Engineers", "Software Testers"],
  //     "certificateName": "Foundations of Software Testing",
  //     "name": "Software Testing Fundamentals",
  //     "courseType": "self-paced",
  //     "numberOfModules": 20,
  //     "skillsAcquired": ["Manual Testing", "Automation Testing", "Test Planning", "Bug Tracking"],
  //     "description": "Software testing is a systematic process of evaluating a program or application to identify and resolve any errors. It involves the execution of software components using specific test cases to uncover bugs and ensure that the software is functioning as expected."
  //   },
  //   {
  //     "id": 6,
  //     "courseLevel": "Intermediate",
  //     "studentsEnroled": 0,
  //     "category": "Flutter",
  //     "totalRatings": 0,
  //     "HoursRequired": 24,
  //     "about": "Flutter is a popular open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.",
  //     "certificationValid": false,
  //     "Instructor": "Michael Johnson",
  //     "whoCanTake": ["Mobile Developers", "App Developers", "UI/UX Designers"],
  //     "certificateName": "Advanced Flutter Development",
  //     "name": "Mastering Flutter Framework",
  //     "courseType": "self-paced, live sessions",
  //     "numberOfModules": 35,
  //     "skillsAcquired": ["Dart Programming", "UI Design", "State Management", "Platform Integration"],
  //     "description": "Flutter is known for its fast development, expressive and flexible UI, and native performance. It is widely adopted by developers for building high-quality native interfaces on iOS and Android in record time."
  //   },
  //   {
  //     "id": 7,
  //     "courseLevel": "Advanced",
  //     "studentsEnroled": 0,
  //     "category": "Frontend Development",
  //     "totalRatings": 0,
  //     "HoursRequired": 30,
  //     "about": "Frontend development focuses on creating a user-friendly interface that allows users to interact with the application or website. It involves implementing designs and ensuring a seamless user experience across different devices.",
  //     "certificationValid": false,
  //     "Instructor": "Sophie Thompson",
  //     "whoCanTake": ["Web Developers", "UI Designers", "Aspiring Frontend Developers"],
  //     "certificateName": "Advanced Frontend Development",
  //     "name": "Mastering Modern Web Development",
  //     "courseType": "self-paced, instructor-led",
  //     "numberOfModules": 40,
  //     "skillsAcquired": ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Framework Integration"],
  //     "description": "Frontend development is crucial for creating visually appealing and user-friendly websites and applications. It involves implementing the design elements, user interactions, and ensuring a seamless experience across different platforms and devices."
  //   },
  //   {
  //     "id": 8,
  //     "courseLevel": "Advanced",
  //     "studentsEnroled": 0,
  //     "category": "Testing",
  //     "totalRatings": 0,
  //     "HoursRequired": 40,
  //     "about": "Advanced testing techniques and methodologies are essential for ensuring the robustness and reliability of complex software systems. This course covers advanced topics in software testing, including test automation, performance testing, and security testing.",
  //     "certificationValid": false,
  //     "Instructor": "David Smith",
  //     "whoCanTake": ["Quality Assurance Managers", "Software Engineers", "Testing Professionals"],
  //     "certificateName": "Advanced Software Testing Strategies",
  //     "name": "Mastering Advanced Testing Techniques",
  //     "courseType": "self-paced, live sessions",
  //     "numberOfModules": 50,
  //     "skillsAcquired": ["Advanced Test Automation", "Performance Testing", "Security Testing", "Test Management"],
  //     "description": "Advanced software testing is critical for identifying complex issues and ensuring that the software meets the highest standards of quality and performance. This course equips you with the necessary skills and strategies to handle intricate testing scenarios effectively."
  //   },
  //   {
  //     "id": 9,
  //     "courseLevel": "Advanced",
  //     "studentsEnroled": 0,
  //     "category": "DSA",
  //     "totalRatings": 0,
  //     "HoursRequired": 35,
  //     "about": "Advanced data structures and algorithms play a crucial role in developing efficient and scalable software solutions. This course delves deep into complex data structures and advanced algorithmic techniques.",
  //     "certificationValid": false,
  //     "Instructor": "Amanda Johnson",
  //     "whoCanTake": ["Experienced Developers", "Computer Science Graduates", "Algorithm Enthusiasts"],
  //     "certificateName": "Advanced Data Structures and Algorithms",
  //     "name": "Deep Dive into Advanced DSA",
  //     "courseType": "self-paced, live lectures",
  //     "numberOfModules": 45,
  //     "skillsAcquired": ["Dynamic Programming", "Tree Data Structures", "Advanced Sorting Algorithms", "Complex Algorithm Design"],
  //     "description": "In-depth knowledge of advanced data structures and algorithms is essential for solving complex computational problems and developing efficient and optimized software solutions. This course provides comprehensive coverage of advanced topics in data structures and algorithms."
  //   },
  //   {
  //     "id": 10,
  //     "courseLevel": "Intermediate",
  //     "studentsEnroled": 0,
  //     "category": "Flutter",
  //     "totalRatings": 0,
  //     "HoursRequired": 20,
  //     "about": "Flutter is a popular cross-platform framework used for building high-performance and visually appealing mobile applications. This course focuses on intermediate-level Flutter concepts and application development.",
  //     "certificationValid": false,
  //     "Instructor": "Alexandra Garcia",
  //     "whoCanTake": ["Mobile App Developers", "UI Designers", "Flutter Enthusiasts"],
  //     "certificateName": "Intermediate Flutter Development",
  //     "name": "Exploring Intermediate Flutter",
  //     "courseType": "self-paced, interactive sessions",
  //     "numberOfModules": 25,
  //     "skillsAcquired": ["Stateful Widgets", "Advanced UI Design", "Networking with Flutter", "Firebase Integration"],
  //     "description": "Intermediate Flutter development involves mastering advanced widgets, state management, and integrating external APIs for enhanced application functionality. This course provides hands-on experience in building real-world Flutter applications."
  //   },
  //   {
  //     "id": 11,
  //     "courseLevel": "Beginner",
  //     "studentsEnroled": 0,
  //     "category": "Frontend Development",
  //     "totalRatings": 0,
  //     "HoursRequired": 15,
  //     "about": "Frontend development is an essential skill for creating visually appealing and interactive user interfaces for web applications. This beginner-level course introduces the fundamental concepts and tools of modern frontend development.",
  //     "certificationValid": false,
  //     "Instructor": "Christopher Brown",
  //     "whoCanTake": ["Web Designers", "Aspiring Developers", "Tech Enthusiasts"],
  //     "certificateName": "Foundations of Frontend Development",
  //     "name": "Introduction to Modern Web Development",
  //     "courseType": "self-paced, guided learning",
  //     "numberOfModules": 20,
  //     "skillsAcquired": ["HTML Basics", "CSS Fundamentals", "JavaScript Essentials", "Responsive Design Principles"],
  //     "description": "A strong foundation in frontend development is crucial for creating engaging and user-friendly web applications. This course covers the essential concepts and techniques required to build modern and responsive web interfaces."
  //   },
  //   {
  //     "id": 12,
  //     "courseLevel": "Intermediate",
  //     "studentsEnroled": 0,
  //     "category": "Testing",
  //     "totalRatings": 0,
  //     "HoursRequired": 25,
  //     "about": "Intermediate software testing involves implementing various testing methodologies and techniques to ensure the quality and reliability of software products. This course focuses on advanced testing strategies and best practices.",
  //     "certificationValid": false,
  //     "Instructor": "Sarah Patel",
  //     "whoCanTake": ["Software Quality Engineers", "Testing Professionals", "Test Automation Specialists"],
  //     "certificateName": "Intermediate Software Testing Methods",
  //     "name": "Advanced Testing Techniques",
  //     "courseType": "self-paced, instructor-led",
  //     "numberOfModules": 30,
  //     "skillsAcquired": ["Automated Testing Tools", "Test Case Design", "Bug Reporting", "Test Strategy Planning"],
  //     "description": "Intermediate software testing is essential for identifying and resolving potential issues in software applications. This course equips you with the necessary skills and strategies to conduct thorough and efficient software testing."
  //   },
  //   {
  //     "id": 13,
  //     "courseLevel": "Beginner",
  //     "studentsEnroled": 0,
  //     "category": "DSA",
  //     "totalRatings": 0,
  //     "HoursRequired": 15,
  //     "about": "Introduction to data structures and algorithms is fundamental for understanding the basics of problem-solving and algorithmic thinking. This beginner-level course covers essential data structures and basic algorithmic concepts.",
  //     "certificationValid": false,
  //     "Instructor": "John Williams",
  //     "whoCanTake": ["Computer Science Students", "Programming Beginners", "Coding Enthusiasts"],
  //     "certificateName": "Foundations of Data Structures and Algorithms",
  //     "name": "Introduction to DSA Fundamentals",
  //     "courseType": "self-paced, interactive learning",
  //     "numberOfModules": 20,
  //     "skillsAcquired": ["Basic Algorithm Design", "Array Manipulation", "Fundamental Data Structures"],
  //     "description": "Understanding the fundamentals of data structures and algorithms is essential for developing efficient and optimized code. This course provides a comprehensive introduction to key data structures and algorithmic concepts."
  //   },
  //   {
  //     "id": 14,
  //     "courseLevel": "Advanced",
  //     "studentsEnroled": 0,
  //     "category": "Frontend Development",
  //     "totalRatings": 0,
  //     "HoursRequired": 35,
  //     "about": "Advanced frontend development focuses on mastering complex web development concepts and implementing cutting-edge frontend technologies. This course covers advanced topics in frontend architecture and performance optimization.",
  //     "certificationValid": false,
  //     "Instructor": "Emily Watson",
  //     "whoCanTake": ["Experienced Developers", "Web Development Professionals", "UI/UX Designers"],
  //     "certificateName": "Advanced Frontend Development Expertise",
  //     "name": "Advanced Frontend Engineering",
  //     "courseType": "self-paced, live projects",
  //     "numberOfModules": 40,
  //     "skillsAcquired": ["Advanced JavaScript Concepts", "Performance Optimization", "Frontend Frameworks", "Cross-Browser Compatibility"],
  //     "description": "Advanced frontend development requires in-depth knowledge of modern web technologies and best practices. This course is designed to help you master advanced frontend development techniques and build high-performance and interactive web applications."
  //   }
  // ]
  // data.forEach((item, index) => {
  //     item.slugName = item.name.replace(/ /g, '-');
  //   });

  // data.forEach(async(d)=>{
  //     const docRef = await addDoc(collection(db, "allCourses"), d);
  //       console.log("Document written with ID: ", docRef.id);
  // })

  const data = [];
  try {
    const querySnapshot = await getDocs(collection(db, "allCourses"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const docWithId = { ID: doc.id, ...doc.data() };
      data.push(docWithId);
    });
    return { data };
  } catch (error) {
    console.log("ERR:", error);
    return { error };
  }
}

export async function getACourse(id) {
  try {
    const docRef = doc(db, "allCourses", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const docWithId = { ID: docSnap.id, ...docSnap.data() };
      return { data: docWithId };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return { data: "No Such Data" };
    }
  } catch (error) {
    return { error };
  }
}

async function alreadyUser(id) {
  try {
    const q = query(collection(db, "users"), where("email", "==", id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      return { status: true, payload: doc.id };
    });
    return { status: false };
  } catch (error) {
    return { error };
  }
}
export async function addUser(formData) {
  const isAlready = await alreadyUser(formData?.email);
  if (isAlready?.status) {
    console.log("Alredy an user");
    return {
      data: "User Logged In successfuly",
      payload: { id: isAlready?.payload, email: formData?.email },
    };
  } else {
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);
      return {
        data: "User Logged In successfuly",
        payload: { id: docRef.id, email: formData?.email },
      };
    } catch (error) {
      return { error };
    }
  }
}
export async function addUserToCourse(payload) {
  const { email, id, userId } = payload;
  console.log("SS>", email, id, userId);
  try {
    const washingtonRef = doc(db, "users", userId);
    // Atomically add a new region to the "regions" array field.
    await updateDoc(washingtonRef, {
      enrolledCourses: arrayUnion(id),
    });
    return { data: "successfuly enrolled." };
  } catch (error) {
    return { error };
  }
}
// export async function getAllCourseDataUSer(arr)
// {
//     const data=[];

//     arr.forEach(async (a)=>{

//             const docRef = doc(db, "allCourses", a);
//             const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                 console.log("Document X data:", docSnap.data());
//                 data.push(docSnap.data());
//                 return ;
//                 } else {
//                 // docSnap.data() will be undefined in this case
//                 console.log("No such document!");
//                 return {data: "No Such Data"};
//     }

//     })
//     console.log("FFF",data);
//     return data;

// }

export async function getUser(id) {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const enrolledData = await Promise.all(
        docSnap.data().enrolledCourses.map(async (f) => {
          const { data } = await getACourse(f);
          return data;
        })
      );

      const data = {
        userData: docSnap.data(),
        enrolledCourseData: enrolledData,
      };
      // console.log("X data:", data);
      return { data };
    } else {
      console.log("No such document!");
      return { data: "No Such User" };
    }
  } catch (error) {
    return { error };
  }
}

// export default getAllCourses;
