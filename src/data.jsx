import Image1 from "../public/images/diploma.png";
import Image2 from "../public/images/athlete.png";
import Image3 from "../public/images/storytelling.png";
import Image4 from "../public/images/corp.png";
import Image5 from "../public/images/class.png";
import Image6 from "../public/images/individual.png";
import Frontend from "../public/images/frontend.jpg";
import Backend from "../public/images/backend.jpg";
import Ethical from "../public/images/ethical.webp";
import Fullstack from "../public/images/fullstack.png";

export const trainingBenefits = [
  {
    title: "Online Training",
    label:
      "As a recent addition to our training platforms, our Online Training is a highly convenient option. Enrolled students can access comprehensive training materials, including well-prepared instructional videos, from the comfort of their chosen learning spaces. Further details are elaborated below.",
    src: Image3,
  },
  {
    title: "Corporate Training",
    label:
      "Designed for employees of corporate institutions engaged in Information Technology fields, this training program equips them to become consummate professionals in their domain.",
    src: Image4,
  },

  {
    title: "Individual Training",
    label:
      "Our exceptional Information Technology Training is tailored for private individuals, affording them the privilege of one-on-one instructions and learning with our facilitators. This approach enables them to acquire their desired IT skills effectively.",
    src: Image6,
  },

  {
    title: "Classroom Training",
    label:
      "With cutting-edge teaching facilities and meticulously curated learning materials, our learning environment at EIT fosters optimal growth and development within the realm of IT.",
    src: Image5,
  },

  {
    title: "Learn with Expert",
    label:
      "With cutting-edge teaching facilities and meticulously curated learning materials, our learning environment at EIT fosters optimal growth and development within the realm of IT.",
    src: Image2,
  },
  {
    title: "Earn Certificates",
    label:
      "With cutting-edge teaching facilities and meticulously curated learning materials, our learning environment at EIT fosters optimal growth and development within the realm of IT.",
    src: Image1,
  },
];

export const courses = [
  {
    name: "Front-End Development",
    src: Frontend,
    online_price: 110.33,
    live_price: 220.66,
    rating: 1.5,
    numReview: 2,
  },
  {
    name: "Back-End Development",
    src: Backend,
    online_price: 110.33,
    live_price: 220.66,
    rating: 2.5,
    numReview: 1,
  },
  {
    name: "Full-Stack Development",
    src: Fullstack,
    online_price: 220.66,
    live_price: 441.32,
    rating: 3.5,
    numReview: 2,
  },
  {
    name: "Ethical Hacking/Penetration Testing",
    src: Ethical,
    online_price: 376.74,
    live_price: 753.48,
    rating: 4.5,
    numReview: 3,
  },
];

export const testimonies = [
  {
    id: 1,
    name: "Uzoma Ekwonye",
    desc: " Emblic Technologies has experienced and knowledgeable instructors who provide guidance and support to students throughout the program. My instructors were approachable and willing to answer questions and provide feedback on assignments and projects. They helped me as a student develop skills and gain practical experience, which is crucial in the web development industry. In general, Emblic Technologies seems to be a reliable and professional software development company that can offer quality services to its clients. As a student, if you are looking for a company to help you grow as a software developer in any area and gain experience, Emblic Technologies would be the best option to consider.",
  },

  {
    id: 2,
    name: "Worlu Amadi",
    desc: " Emblic Technologies opened my eyes to web development. I now understand the concept of front-end and back-end web development using HTML, Css, Javascript, Php, and Mysql. The instructor was superb.",
  },
  {
    id: 3,
    name: "Njoku Blessing",
    desc: "I had an amazing experience with this company and I'm very much impressed. They give you the best at its peak.",
  },
  {
    id: 4,
    name: "Faiz Adepoju",
    desc: "Emblic Technologies is an exceptional IT company! Their expertise and dedication to delivering innovative solutions are truly impressive. I highly recommend their services for anyone seeking reliable and cutting-edge technology solutions.",
  },
];

export const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "All Courses",
    path: "#",
  },
  {
    label: "About",
    path: "#",
  },
  {
    label: "Team",
    path: "#",
  },
  {
    label: "Contaact",
    path: "#",
  },
];

export const faqs = [
  {
    question: "How do i Register?",
    answer: "Click on the register button to start your registration process.",
  },
  {
    question: "How do i Register?",
    answer: "Click on the register button to start your registration process.",
  },
  {
    question: "How do i Register?",
    answer: "Click on the register button to start your registration process.",
  },
  {
    question: "How do i Register?",
    answer: "Click on the register button to start your registration process.",
  },
];
