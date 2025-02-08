const textSamples = [
  "the quick brown fox jumps over the lazy dog multiple times showcasing its agility and speed while the dog remains still and watches in amazement",

  "react is a javascript library for building user interfaces that allows developers to create reusable components and manage state efficiently with hooks",

  "coding is fun and improves problem-solving skills by challenging individuals to think logically debug errors and optimize performance through efficient algorithms",

  "web development includes html css and javascript which work together to create interactive websites that respond dynamically to user input and data updates",

  "software engineering involves designing coding testing and maintaining applications that meet user needs and industry standards for performance and security",

  "artificial intelligence and machine learning are transforming industries by enabling automation predictive analytics and natural language processing capabilities",

  "open-source projects allow developers worldwide to collaborate contribute and improve software by sharing ideas and writing efficient scalable code solutions",

  "database management systems store and retrieve structured data ensuring integrity and security while enabling fast and efficient queries for applications",

  "user experience design focuses on creating intuitive interfaces that enhance usability accessibility and engagement leading to improved customer satisfaction",

  "networking and cybersecurity are critical fields that protect digital systems from threats ensuring data privacy secure communication and resilient infrastructures",
];

export const getRandomText = () => textSamples[Math.floor(Math.random() * textSamples.length)];
