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

  "exploring the depths of the ocean reveals a world of mystery and beauty filled with unique creatures and ecosystems that thrive in extreme conditions",

  "the history of space exploration is marked by groundbreaking achievements and technological advancements that have expanded our understanding of the universe",

  "music has the power to evoke emotions inspire creativity and bring people together across cultures and generations through its universal language",

  "sustainable living practices aim to reduce environmental impact by promoting renewable energy conservation and responsible consumption of resources",

  "the human brain is a complex organ capable of incredible feats of memory learning and creativity making it one of the most studied subjects in science",

  "virtual reality and augmented reality technologies are revolutionizing entertainment education and training by creating immersive and interactive experiences",

  "the art of storytelling has evolved over centuries from oral traditions to digital media captivating audiences with compelling narratives and characters",

  "entrepreneurship drives innovation and economic growth by empowering individuals to turn ideas into successful businesses that solve real-world problems",

  "the study of ancient civilizations provides insights into the development of human societies cultures and technologies that have shaped the modern world",

  "physical fitness and mental well-being are interconnected aspects of a healthy lifestyle that require regular exercise balanced nutrition and stress management",

  "blockchain technology is revolutionizing industries by providing secure transparent and decentralized solutions for data management and financial transactions",

  "the future of transportation lies in electric vehicles autonomous driving and smart infrastructure aimed at reducing emissions and improving urban mobility",

  "climate change is a pressing global issue that requires immediate action to reduce carbon emissions protect ecosystems and promote sustainable development",

  "advancements in biotechnology are paving the way for innovative treatments and cures for diseases improving the quality of life for millions worldwide",

  "the internet of things connects everyday devices to the internet enabling them to collect and exchange data for smarter decision-making and automation",

  "quantum computing promises to revolutionize computing power by solving complex problems that are currently beyond the reach of classical computers",

  "the rise of remote work has transformed the workplace offering flexibility and new opportunities while challenging traditional notions of productivity and collaboration",

  "gamification is being used in education and training to engage learners and enhance motivation by incorporating game-like elements into non-game contexts",

  "the exploration of mars and other planets is a key focus of space agencies aiming to uncover the potential for life and future human colonization",

  "the gig economy is reshaping the labor market by offering flexible work opportunities while raising questions about job security and workers rights",
];

export const getRandomText = () => textSamples[Math.floor(Math.random() * textSamples.length)];