import { QuestionType } from "@/components/QuizQuestion";

// Junior Level Questions
const juniorQuestions: QuestionType[] = [
  // Multiple choice questions
  {
    id: 1,
    type: "multiple-choice",
    question: "What is the correct greeting for morning?",
    options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
    correctAnswer: "Good morning",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Which phrase is used to ask someone's name?",
    options: [
      "How do you do?",
      "What is your name?",
      "Where are you from?",
      "How old are you?",
    ],
    correctAnswer: "What is your name?",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Which is the correct question to ask about someone's job?",
    options: [
      "Why do you work?",
      "What do you do?",
      "Where do you do?",
      "How do you do your job?",
    ],
    correctAnswer: "What do you do?",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Choose the correct sentence to ask for help:",
    options: [
      "Could you help me, please?",
      "You help me, please?",
      "Help to me, please?",
      "Do me help, please?",
    ],
    correctAnswer: "Could you help me, please?",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "What is the polite way to thank someone?",
    options: [
      "Thank",
      "Many thanks",
      "Thank you very much",
      "Thanks a many",
    ],
    correctAnswer: "Thank you very much",
  },

  // Essay questions
  {
    id: 6,
    type: "essay",
    question: "Write a short introduction about yourself (name, age, and hobby).",
    correctAnswer: ["My name is", "I am", "years old", "I like", "My hobby"],
    exampleAnswer: "My name is John. I am 25 years old. My hobby is reading books.",
  },
  {
    id: 7,
    type: "essay",
    question: "Write a sentence asking someone where they live.",
    correctAnswer: ["Where do you live", "Where are you living", "Where is your house", "Where is your home"],
    exampleAnswer: "Where do you live?",
  },
  {
    id: 8,
    type: "essay",
    question: "Write a short paragraph about your daily routine in the morning.",
    correctAnswer: ["wake up", "breakfast", "brush", "shower", "morning"],
    exampleAnswer: "I wake up at 6 AM. Then, I take a shower and brush my teeth. After that, I have breakfast before going to school or work.",
  },
  {
    id: 9,
    type: "essay",
    question: "How would you ask for directions to the nearest restaurant?",
    correctAnswer: ["Where", "restaurant", "How", "get to", "nearest", "Excuse me"],
    exampleAnswer: "Excuse me, could you tell me where the nearest restaurant is?",
  },
  {
    id: 10,
    type: "essay",
    question: "Write a sentence to express that you don't understand something.",
    correctAnswer: ["don't understand", "I'm sorry", "Could you", "explain", "again", "not clear"],
    exampleAnswer: "I'm sorry, I don't understand. Could you explain again?",
  },

  // Converting video questions to text-based listening comprehension
  {
    id: 11,
    type: "listening",
    question: "Read the following conversation:\n\nJohn: Hi there!\nEmma: Hello! I'm Emma. Nice to meet you.\nJohn: Nice to meet you too!\n\nWhat is the woman's name?",
    options: ["Sarah", "Mary", "Emma", "Laura"],
    correctAnswer: "Emma",
  },
  {
    id: 12,
    type: "listening",
    question: "Read the dialogue:\n\nPeter: Where should we go for dinner?\nMary: How about that new Italian restaurant downtown?\nPeter: Sounds great! Let's go.\n\nWhere are they going?",
    options: ["Restaurant", "Cinema", "Park", "Museum"],
    correctAnswer: "Restaurant",
  },
  {
    id: 13,
    type: "listening",
    question: "Read the conversation:\n\nTom: When shall we meet tomorrow?\nJane: Is 5:00 PM good for you?\nTom: Perfect, see you then!\n\nWhat time will they meet?",
    options: ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
    correctAnswer: "5:00 PM",
  },
  {
    id: 14,
    type: "listening",
    question: "Read the text:\n\nHi, I'm Jack. I love staying active and healthy. Every morning, I go to the pool for my daily exercise. Swimming helps me stay fit and relaxed.\n\nWhat is Jack's hobby?",
    correctAnswer: ["swimming", "swim"],
    exampleAnswer: "His hobby is swimming.",
  },
  {
    id: 15,
    type: "listening",
    question: "Read the conversation:\n\nCustomer: Good morning! I'd like a coffee please.\nBarista: What would you like to order?\nCustomer: I'll have a cappuccino.\nBarista: One cappuccino coming right up!\n\nWhat does the customer order?",
    options: ["Black coffee", "Cappuccino", "Latte", "Espresso"],
    correctAnswer: "Cappuccino",
  },
  {
    id: 16,
    type: "multiple-choice",
    question: "Which of these is a fruit?",
    options: ["Carrot", "Apple", "Potato", "Broccoli"],
    correctAnswer: "Apple",
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "What do you say when you leave someone at night?",
    options: ["Good morning", "Good night", "Good afternoon", "Hello"],
    correctAnswer: "Good night",
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Which animal barks?",
    options: ["Cat", "Dog", "Bird", "Fish"],
    correctAnswer: "Dog",
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "What color is the sky on a clear day?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correctAnswer: "Blue",
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Which one is used to write?",
    options: ["Pencil", "Spoon", "Plate", "Cup"],
    correctAnswer: "Pencil",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "What do you wear on your feet?",
    options: ["Shoes", "Hat", "Shirt", "Gloves"],
    correctAnswer: "Shoes",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Which is a day of the week?",
    options: ["January", "Monday", "Summer", "Morning"],
    correctAnswer: "Monday",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "What do you drink in the morning?",
    options: ["Juice", "Coffee", "Milk", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Which is a vegetable?",
    options: ["Banana", "Carrot", "Apple", "Orange"],
    correctAnswer: "Carrot",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "What do you use to call someone?",
    options: ["Phone", "Book", "Table", "Chair"],
    correctAnswer: "Phone",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Which is a family member?",
    options: ["Teacher", "Mother", "Doctor", "Nurse"],
    correctAnswer: "Mother",
  },
  {
    id: 27,
    type: "multiple-choice",
    question: "What do you do when you are hungry?",
    options: ["Eat", "Sleep", "Run", "Read"],
    correctAnswer: "Eat",
  },
  {
    id: 28,
    type: "essay",
    question: "Describe your favorite food and why you like it.",
    correctAnswer: ["favorite food", "like", "because", "delicious", "taste"],
    exampleAnswer: "My favorite food is fried rice because it is delicious and easy to make.",
  },
  {
    id: 29,
    type: "essay",
    question: "Write a sentence to invite a friend to your birthday party.",
    correctAnswer: ["invite", "birthday", "party", "come", "please"],
    exampleAnswer: "Would you like to come to my birthday party?",
  },
  {
    id: 30,
    type: "essay",
    question: "Write a short paragraph about your school.",
    correctAnswer: ["school", "students", "teachers", "classroom", "study"],
    exampleAnswer: "My school is big. There are many students and teachers. I study in a nice classroom.",
  },
  {
    id: 31,
    type: "essay",
    question: "Write a sentence to ask someone about their favorite sport.",
    correctAnswer: ["favorite sport", "What", "do you like", "play"],
    exampleAnswer: "What is your favorite sport?",
  },
  {
    id: 32,
    type: "essay",
    question: "Describe your house in a few sentences.",
    correctAnswer: ["house", "rooms", "living room", "bedroom", "kitchen"],
    exampleAnswer: "My house has three rooms. There is a living room, a bedroom, and a kitchen.",
  },
  {
    id: 33,
    type: "essay",
    question: "Write a sentence to ask someone what time it is.",
    correctAnswer: ["What time", "is it", "please"],
    exampleAnswer: "What time is it, please?",
  },
  {
    id: 34,
    type: "essay",
    question: "Write a short paragraph about your best friend.",
    correctAnswer: ["best friend", "name", "kind", "funny", "together"],
    exampleAnswer: "My best friend is Anna. She is kind and funny. We play together every day.",
  },
  {
    id: 35,
    type: "essay",
    question: "Write a sentence to ask for the price of something.",
    correctAnswer: ["How much", "cost", "price", "is this"],
    exampleAnswer: "How much does this cost?",
  },
  {
    id: 36,
    type: "essay",
    question: "Describe your favorite animal and why you like it.",
    correctAnswer: ["favorite animal", "like", "because", "cute", "pet"],
    exampleAnswer: "My favorite animal is a cat because it is cute and friendly.",
  },
  {
    id: 37,
    type: "essay",
    question: "Write a short paragraph about what you do on weekends.",
    correctAnswer: ["weekends", "play", "family", "friends", "relax"],
    exampleAnswer: "On weekends, I play with my friends and spend time with my family. I also relax at home.",
  },
  {
    id: 38,
    type: "listening",
    question: "Read the conversation:\n\nLisa: What do you want to eat for lunch?\nTom: I want a sandwich.\nLisa: Me too!\n\nWhat do they want to eat?",
    options: ["Pizza", "Sandwich", "Rice", "Soup"],
    correctAnswer: "Sandwich",
  },
  {
    id: 39,
    type: "listening",
    question: "Read the dialogue:\n\nMother: Did you finish your homework?\nChild: Yes, I did.\nMother: Good job!\n\nWhat did the child finish?",
    options: ["Homework", "Dinner", "Chores", "Game"],
    correctAnswer: "Homework",
  },
  {
    id: 40,
    type: "listening",
    question: "Read the conversation:\n\nAnna: Where is your school?\nBen: It is near the park.\n\nWhere is Ben's school?",
    options: ["Near the park", "Near the hospital", "Near the market", "Near the library"],
    correctAnswer: "Near the park",
  },
  {
    id: 41,
    type: "listening",
    question: "Read the text:\n\nMy name is Mia. I have a little brother. His name is Max. We play together every day.\n\nWho is Max?",
    options: ["Mia's brother", "Mia's friend", "Mia's father", "Mia's cousin"],
    correctAnswer: "Mia's brother",
  },
  {
    id: 42,
    type: "listening",
    question: "Read the conversation:\n\nTeacher: What is the capital of Indonesia?\nStudent: Jakarta.\n\nWhat is the capital of Indonesia?",
    options: ["Bali", "Jakarta", "Surabaya", "Bandung"],
    correctAnswer: "Jakarta",
  },
  {
    id: 43,
    type: "listening",
    question: "Read the dialogue:\n\nFather: Let's go to the zoo this Sunday.\nChild: Yay! I want to see the elephants.\n\nWhere are they going?",
    options: ["Zoo", "Beach", "Mall", "Market"],
    correctAnswer: "Zoo",
  },
  {
    id: 44,
    type: "listening",
    question: "Read the conversation:\n\nSara: What is your favorite color?\nLily: My favorite color is blue.\n\nWhat is Lily's favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Blue",
  },
  {
    id: 45,
    type: "listening",
    question: "Read the text:\n\nI have a pet cat. Her name is Kitty. She likes to sleep and play with a ball.\n\nWhat is the cat's name?",
    options: ["Kitty", "Milo", "Bella", "Lucy"],
    correctAnswer: "Kitty",
  },
  {
    id: 46,
    type: "listening",
    question: "Read the conversation:\n\nBoy: What do you want to be when you grow up?\nGirl: I want to be a doctor.\n\nWhat does the girl want to be?",
    options: ["Teacher", "Doctor", "Nurse", "Chef"],
    correctAnswer: "Doctor",
  },
  {
    id: 47,
    type: "listening",
    question: "Read the dialogue:\n\nMother: Please clean your room.\nChild: Okay, Mom.\n\nWhat does the mother ask the child to do?",
    options: ["Clean the room", "Do homework", "Eat dinner", "Go to bed"],
    correctAnswer: "Clean the room",
  },
  {
    id: 48,
    type: "listening",
    question: "Read the text:\n\nMy father drives a car to work every day.\n\nHow does my father go to work?",
    options: ["By car", "By bike", "By bus", "By train"],
    correctAnswer: "By car",
  },
  {
    id: 49,
    type: "listening",
    question: "Read the conversation:\n\nTom: Let's play football after school.\nSam: Great idea!\n\nWhat will they do after school?",
    options: ["Play football", "Do homework", "Go shopping", "Watch TV"],
    correctAnswer: "Play football",
  },
  {
    id: 50,
    type: "listening",
    question: "Read the dialogue:\n\nTeacher: What day is it today?\nStudent: It is Friday.\n\nWhat day is it today?",
    options: ["Monday", "Wednesday", "Friday", "Sunday"],
    correctAnswer: "Friday",
  },
];

// Intermediate Level Questions
const intermediateQuestions: QuestionType[] = [
  // Multiple choice questions
  {
    id: 101,
    type: "multiple-choice",
    question: "Which phrase is best for suggesting an alternative plan?",
    options: [
      "How about we go to the museum instead?",
      "We go to museum, yes?",
      "I am wanting go museum.",
      "Museum is good I think so.",
    ],
    correctAnswer: "How about we go to the museum instead?",
  },
  {
    id: 102,
    type: "multiple-choice",
    question: "Choose the best response to: 'I'm sorry I'm late.'",
    options: [
      "It's not a problem at all.",
      "Yes, you are very late.",
      "You always doing this!",
      "I am waiting so much time.",
    ],
    correctAnswer: "It's not a problem at all.",
  },
  {
    id: 103,
    type: "multiple-choice",
    question: "Which sentence uses the Present Perfect correctly?",
    options: [
      "I have been to Paris last year.",
      "I have never been to Paris.",
      "I have go to Paris tomorrow.",
      "I have went to Paris many times.",
    ],
    correctAnswer: "I have never been to Paris.",
  },
  {
    id: 104,
    type: "multiple-choice",
    question: "What's the appropriate response to a compliment on your presentation?",
    options: [
      "Yes, I know I did well.",
      "No, it was terrible.",
      "Thank you, I put a lot of work into it.",
      "You're wrong, it wasn't good.",
    ],
    correctAnswer: "Thank you, I put a lot of work into it.",
  },
  {
    id: 105,
    type: "multiple-choice",
    question: "Which idiom means something is very expensive?",
    options: [
      "It costs an arm and a leg",
      "It costs a head and shoulders",
      "It costs a hand and foot",
      "It costs a finger and toe",
    ],
    correctAnswer: "It costs an arm and a leg",
  },

  // Essay questions
  {
    id: 106,
    type: "essay",
    question: "Write a paragraph giving someone directions from the train station to the library.",
    correctAnswer: ["turn right", "turn left", "walk", "blocks", "street", "across", "next to", "between", "opposite"],
    exampleAnswer: "Exit the train station and turn right. Walk two blocks and then turn left on Oak Street. The library is on the right side, opposite the park, about 100 meters ahead.",
  },
  {
    id: 107,
    type: "essay",
    question: "Write a short email to your boss requesting a day off next Friday.",
    correctAnswer: ["request", "day off", "would like", "consider", "available", "thank you", "appreciate", "regards"],
    exampleAnswer: "Dear Mr. Johnson,\n\nI am writing to request a day off on Friday, May 15th for personal reasons. I have already completed my pending tasks and will ensure all my responsibilities are covered.\n\nThank you for your consideration.\n\nBest regards,\nYour Name",
  },
  {
    id: 108,
    type: "essay",
    question: "Describe your ideal vacation destination and explain why you would like to go there.",
    correctAnswer: ["would like", "because", "enjoy", "beautiful", "interesting", "favorite", "dream", "visit"],
    exampleAnswer: "My ideal vacation destination is Kyoto, Japan. I would like to visit there because of the beautiful temples and gardens. I enjoy learning about different cultures, and Japan has such a rich history. The food also looks amazing, especially sushi and ramen, which are my favorites.",
  },
  {
    id: 109,
    type: "essay",
    question: "Write a paragraph giving your opinion about social media and its impact on society.",
    correctAnswer: ["opinion", "think", "believe", "positive", "negative", "impact", "society", "people", "however", "although"],
    exampleAnswer: "In my opinion, social media has both positive and negative impacts on society. On one hand, it helps people connect and share information globally. However, it can also lead to privacy issues and addiction problems. I believe we need to use social media responsibly while being aware of its limitations and potential dangers.",
  },
  {
    id: 110,
    type: "essay",
    question: "Write about a memorable experience you had with a friend or family member.",
    correctAnswer: ["memorable", "experience", "enjoy", "together", "fun", "special", "remember", "time"],
    exampleAnswer: "One of my most memorable experiences was when my family and I went camping in the mountains last summer. We hiked, fished in the lake, and sat around the campfire telling stories at night. It was special because we rarely get to spend quality time together due to our busy schedules. I'll always remember how peaceful and happy I felt during that trip.",
  },

  // Converting video questions to text-based listening comprehension
  {
    id: 111,
    type: "listening",
    question: "Read the business meeting transcript:\n\nManager: Our biggest challenge this quarter has been meeting deadlines.\nTeam Lead: Yes, we need better time management strategies.\nEmployee: I agree. We're often rushing at the last minute.\n\nWhat is the main issue the team is facing?",
    options: ["Budget constraints", "Time management", "Communication problems", "Technical difficulties"],
    correctAnswer: "Time management",
  },
  {
    id: 112,
    type: "listening",
    question: "Read the job interview excerpt:\n\nInterviewer: Could you tell us about your current role?\nCandidate: I'm currently leading the marketing team at Tech Corp, managing our digital campaigns and brand strategy.\n\nWhat is the speaker's job?",
    options: ["Teacher", "Doctor", "Engineer", "Marketing Manager"],
    correctAnswer: "Marketing Manager",
  },
  {
    id: 113,
    type: "listening",
    question: "Read the podcast transcript:\n\nHost: Today we're discussing how artificial intelligence and smartphones are changing the way we live and work.\nGuest: Yes, digital technology is revolutionizing every aspect of our lives.\n\nWhat is the main topic being discussed?",
    options: ["Climate change", "Digital technology", "Healthcare reform", "Educational systems"],
    correctAnswer: "Digital technology",
  },
  {
    id: 114,
    type: "listening",
    question: "Read the discussion:\n\nSpeaker: Working from home has allowed me to be more productive and maintain a better work-life balance. However, sometimes it's challenging to stay connected with the team and maintain clear communication channels.\n\nExplain the speaker's opinion about remote work.",
    correctAnswer: ["flexible", "productive", "balance", "advantage", "benefit", "challenge"],
    exampleAnswer: "The speaker believes remote work offers flexibility and better work-life balance, but also presents challenges with communication and maintaining team cohesion.",
  },
  {
    id: 115,
    type: "listening",
    question: "Read the presentation excerpt:\n\nPresenter: To address our current efficiency issues, I propose implementing a new project management software. This will streamline our workflows and improve collaboration.\n\nWhat solution does the speaker propose?",
    options: [
      "Implementing a new software system",
      "Hiring more staff",
      "Restructuring the department",
      "Increasing the budget",
    ],
    correctAnswer: "Implementing a new software system",
  },
];

// Expert Level Questions
const expertQuestions: QuestionType[] = [
  // Multiple choice questions
  {
    id: 201,
    type: "multiple-choice",
    question: "Which of the following is an example of a subjunctive mood?",
    options: [
      "I wish I were taller.",
      "I was walking to the store.",
      "I will be there tomorrow.",
      "I have been working here.",
    ],
    correctAnswer: "I wish I were taller.",
  },
  {
    id: 202,
    type: "multiple-choice",
    question: "Which sentence contains a correct use of the third conditional?",
    options: [
      "If I had studied harder, I would have passed the exam.",
      "If I study harder, I will pass the exam.",
      "If I studied harder, I would pass the exam.",
      "If I have studied harder, I would pass the exam.",
    ],
    correctAnswer: "If I had studied harder, I would have passed the exam.",
  },
  {
    id: 203,
    type: "multiple-choice",
    question: "Which of these expressions is NOT an idiom related to business?",
    options: [
      "Cut corners",
      "Break the ice",
      "Spill the beans",
      "Walk on air",
    ],
    correctAnswer: "Walk on air",
  },
  {
    id: 204,
    type: "multiple-choice",
    question: "Which sentence demonstrates correct use of inversion for emphasis?",
    options: [
      "Never have I seen such a beautiful sunset.",
      "Never I have seen such a beautiful sunset.",
      "I have never seen such a beautiful sunset.",
      "I never have seen such a beautiful sunset.",
    ],
    correctAnswer: "Never have I seen such a beautiful sunset.",
  },
  {
    id: 205,
    type: "multiple-choice",
    question: "What does the idiom 'to have a chip on your shoulder' mean?",
    options: [
      "To be easily offended",
      "To have good luck",
      "To be very skilled",
      "To carry a heavy burden",
    ],
    correctAnswer: "To be easily offended",
  },

  // Essay questions
  {
    id: 206,
    type: "essay",
    question: "Write a persuasive paragraph arguing either for or against the statement: 'Technology is making people less sociable.'",
    correctAnswer: ["argue", "perspective", "opinion", "evidence", "research", "contrary", "however", "furthermore", "therefore", "conclusion"],
    exampleAnswer: "From my perspective, the claim that technology is making people less sociable oversimplifies a complex issue. While it's true that smartphones and social media can sometimes replace face-to-face interactions, technology has also created unprecedented opportunities for connection across distances and boundaries. Research suggests that people who use social platforms judiciously often maintain broader social networks and stay connected with geographically distant friends and family. However, the quality of these interactions matters; those who substitute meaningful personal conversations with superficial digital exchanges may indeed experience diminished social skills. Therefore, the impact of technology on sociability depends more on how we use these tools rather than the tools themselves.",
  },
  {
    id: 207,
    type: "essay",
    question: "Describe a situation where you had to resolve a conflict in a professional environment. What strategies did you use?",
    correctAnswer: ["conflict", "resolution", "strategy", "communicate", "compromise", "understand", "perspective", "solution", "agreement", "professional"],
    exampleAnswer: "In my previous role as team leader, I faced a significant conflict between two department heads regarding resource allocation for a critical project. Rather than allowing the dispute to escalate, I first arranged individual meetings with each party to understand their perspectives fully. Then, I facilitated a structured discussion where both could express their concerns without interruption. By acknowledging the validity of both viewpoints and reframing the issue around our shared organizational goals, we were able to identify creative compromises. We ultimately developed a staggered resource schedule that accommodated both teams' core needs while prioritizing client deliverables. This experience reinforced my belief that active listening and focusing on common objectives are essential strategies for professional conflict resolution.",
  },
  {
    id: 208,
    type: "essay",
    question: "Analyze the advantages and disadvantages of implementing artificial intelligence in healthcare systems.",
    correctAnswer: ["advantages", "disadvantages", "efficiency", "accuracy", "diagnosis", "cost", "ethical", "privacy", "data", "implementation", "challenges", "benefits"],
    exampleAnswer: "Implementing artificial intelligence in healthcare systems offers numerous advantages, primarily in enhancing diagnostic accuracy and efficiency. AI algorithms can analyze vast amounts of medical data faster than human practitioners, potentially identifying patterns that might otherwise be missed in medical imaging, test results, and patient histories. This capability could lead to earlier disease detection and more personalized treatment plans. Additionally, AI systems can streamline administrative processes, reducing paperwork and allowing healthcare professionals to dedicate more time to patient care.\n\nHowever, significant disadvantages must be considered. The initial implementation costs can be prohibitive for many healthcare facilities, potentially widening the gap between well-funded and under-resourced institutions. Ethical concerns also arise regarding patient privacy, data security, and the potential for algorithmic bias reflecting historical disparities in healthcare. Furthermore, over-reliance on AI could potentially erode clinical judgment skills among practitioners. The challenge lies in balancing technological advancement with human expertise to create healthcare systems that combine the analytical power of AI with the irreplaceable human elements of care and intuition.",
  },
  {
    id: 209,
    type: "essay",
    question: "Explain how cultural differences might impact international business negotiations and suggest strategies for overcoming these challenges.",
    correctAnswer: ["cultural", "differences", "communication", "international", "business", "negotiation", "strategy", "awareness", "respect", "adapt", "understand", "preparation"],
    exampleAnswer: "Cultural differences significantly impact international business negotiations through varying communication styles, decision-making processes, and value systems. In high-context cultures like Japan or China, implicit communication and relationship-building take precedence, while low-context cultures such as the United States or Germany prioritize explicit, direct information exchange. These differences can lead to misunderstandings when, for instance, an American negotiator perceives Japanese hesitation as disinterest rather than thoughtful consideration.\n\nTime orientation also creates friction; polychronic cultures view schedules as flexible guidelines, while monochronic cultures consider strict adherence to timetables a sign of professionalism. Additionally, hierarchy perceptions affect who makes decisions and how agreements are reached—some cultures require consensus building while others rely on top-down authoritative decisions.\n\nTo overcome these challenges, successful international negotiators employ several strategies. First, thorough pre-negotiation cultural research helps anticipate potential points of friction. Second, employing cultural intelligence consultants or local partners can provide contextual insights unavailable through secondary research. Third, allowing additional time for relationship development when dealing with cultures that prioritize trust-building before business discussions. Finally, developing flexible negotiation approaches that can adapt to cultural expectations rather than rigidly applying one's own cultural norms facilitates more productive outcomes. By approaching international negotiations with cultural awareness, respect, and adaptability, businesses can transform potential obstacles into strategic advantages.",
  },
  {
    id: 210,
    type: "essay",
    question: "Discuss the ethical implications of genetic engineering technologies in agriculture and food production.",
    correctAnswer: ["ethical", "implications", "genetic", "engineering", "agriculture", "food", "production", "environment", "sustainability", "health", "regulation", "biodiversity", "consumers", "transparency"],
    exampleAnswer: "Genetic engineering technologies in agriculture present a complex ethical landscape that extends beyond simple utility calculations. At their most promising, these technologies offer solutions to pressing global challenges—drought-resistant crops could mitigate climate change impacts, while nutrient-enhanced varieties might address malnutrition in vulnerable populations. The potential for reduced pesticide use through pest-resistant varieties also presents environmental benefits.\n\nHowever, these technological capabilities raise profound ethical questions. The ecological implications remain incompletely understood; potential outcomes include unintended gene transfers to wild populations, evolution of resistant pests, and potential biodiversity reduction. These risks highlight the tension between short-term benefits and long-term ecosystem stability—a classic intergenerational ethics challenge.\n\nSocioeconomic considerations further complicate the ethical calculus. Proprietary genetically modified organisms (GMOs) have concentrated agricultural power among a few corporations, potentially disadvantaging small-scale farmers through dependence on patented seeds and accompanying agricultural chemicals. This raises justice concerns about who benefits from and who bears the risks of these technologies.\n\nConsumer autonomy and informed consent principles also emerge as central ethical considerations. Labeling debates reflect fundamental disagreements about consumers' right to know how their food is produced versus concerns that such information might be misinterpreted without proper context.\n\nNavigating these ethical complexities requires governance frameworks that balance innovation with precaution, incorporating diverse stakeholder perspectives and recognizing that values beyond economic efficiency—including cultural relationships with food, environmental stewardship, and social justice—legitimately inform policy decisions about agricultural biotechnology.",
  },

  // Converting video questions to text-based listening comprehension
  {
    id: 211,
    type: "listening",
    question: "Read the technology conference speech:\n\nSpeaker: The future of work isn't about humans versus machines. It's about finding ways for artificial intelligence to enhance human capabilities, not replace them. We need to focus on creating collaborative environments where both humans and AI can contribute their unique strengths.\n\nWhat is the speaker's main argument about artificial intelligence?",
    options: [
      "AI will inevitably replace human workers completely",
      "AI should be regulated to prevent dangerous outcomes",
      "AI and humans should collaborate rather than compete",
      "AI development should be paused until ethical frameworks catch up",
    ],
    correctAnswer: "AI and humans should collaborate rather than compete",
  },
  {
    id: 212,
    type: "listening",
    question: "Read the economics lecture excerpt:\n\nProfessor: The rapid advancement of computing power and digital innovation has fundamentally transformed traditional business models. This technological revolution is the primary driver of current market disruptions and economic shifts.\n\nWhat does the speaker identify as the primary cause of the economic phenomenon described?",
    options: [
      "Government regulation",
      "Technological innovation",
      "Changing consumer behavior",
      "Global supply chain disruptions",
    ],
    correctAnswer: "Technological innovation",
  },
  {
    id: 213,
    type: "listening",
    question: "Read the academic debate transcript:\n\nFirst Speaker: Our initial findings suggest a strong correlation between the variables.\nSecond Speaker: However, when we examine the longitudinal data and control for confounding variables, this correlation disappears. Three independent studies support this conclusion.\n\nSummarize the main counterargument presented by the second speaker.",
    correctAnswer: ["evidence", "research", "studies", "data", "contrary", "however", "challenge", "alternative"],
    exampleAnswer: "The second speaker countered the initial argument by pointing out that the available research data actually shows the opposite trend when examined longitudinally. They cited three independent studies demonstrating that when confounding variables are controlled for, the correlation disappears.",
  },
  {
    id: 214,
    type: "listening",
    question: "Read the medical ethics discussion:\n\nSpeaker 1: We have this valuable patient data that could lead to breakthroughs in treatment.\nSpeaker 2: But using it without explicit consent raises ethical concerns.\nSpeaker 3: We need to balance potential benefits against individual rights, especially for vulnerable populations.\n\nExplain the ethical dilemma presented regarding medical research.",
    correctAnswer: ["ethical", "dilemma", "consent", "research", "benefits", "risks", "autonomy", "justice", "vulnerable"],
    exampleAnswer: "The ethical dilemma centers on balancing the potential benefits of medical research against individual autonomy and informed consent. The speakers discuss whether it's justifiable to use anonymized patient data without explicit consent when the research could lead to significant public health improvements.",
  },
  {
    id: 215,
    type: "listening",
    question: "Read the negotiation transcript:\n\nNegotiator 1: Instead of focusing solely on price, let's discuss what each party needs.\nNegotiator 2: Good point. We both want long-term sustainability.\nNegotiator 1: By understanding our shared goals, we can find a solution that benefits everyone.\n\nWhat strategy did the successful party use to reach an agreement?",
    options: [
      "Aggressive demands and ultimatums",
      "Focusing solely on price points",
      "Finding mutual interests and creating value",
      "Using deadline pressure tactics",
    ],
    correctAnswer: "Finding mutual interests and creating value",
  },
];

// Helper function to get questions by level
export const getLevelQuestions = (level: string): QuestionType[] => {
  switch (level.toLowerCase()) {
    case "junior":
      return juniorQuestions;
    case "intermediate":
      return intermediateQuestions;
    case "expert":
      return expertQuestions;
    default:
      return [];
  }
};
