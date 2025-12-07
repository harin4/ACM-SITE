import React, { useState } from 'react';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  UsersIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Import poster images from assets - one per event
import futureReadyImg from '../assets/future-ready-ai-awareness.jpg';
import neuralFrontiersImg from '../assets/neural-frontiers.jpg';
import aiOdysseyImg from '../assets/ai-odyssey.jpg';
import newMemberInductionImg from '../assets/sigai-recruitment.jpg';
import visionQuestImg from '../assets/visionquest.jpg';
import ventureVerseFinaleImg from '../assets/venture-verse-finale.jpg';
import sdgSolveFinaleImg from '../assets/solvathon-finale.jpg';
import innoTechInaugurationImg from '../assets/innotech-inaug.jpg';
import ventureVersePitchImg from '../assets/ventureverse.jpg';
import sdgSolvePrototypeImg from '../assets/sdg-prototype.jpg';
import ventureVerseConceptImg from '../assets/ventureverse-concept.jpg';
import sdgSolveIdeationImg from '../assets/solveathon.jpg';
import stringCraftImg from '../assets/stringcraft.jpg';
import branchQuestImg from '../assets/branchquest-python.jpg';
import aiPathfinderImg from '../assets/ai-pathfinder.jpg';
import gridQuestImg from '../assets/gridquest-castle.jpg';
import minimaxShowdownImg from '../assets/tic-tac-toe.jpg';
import redKnightImg from '../assets/red-knight.jpg';
import hackGridTechImg from '../assets/hackgrid-tech-exhibit.jpg';
import aiUnravelImg from '../assets/ai-robotics-workshop.jpg';
import turingGamesImg from '../assets/turing-games.jpg';
import sigaiMechanicalImg from '../assets/sigai-mechanical.jpg';
import codeCruxQueryImg from '../assets/codecrux-query.jpg';
import codeCruxOopsImg from '../assets/codecrux-OOPS.jpg';
import quizizzDevCycleImg from '../assets/quizizz-devcycle.jpg';
import agileArenaImg from '../assets/agile-arena.jpg';
import hackGridReadyPlayerImg from '../assets/hackgrid-tech-exhibit.jpg';
import hackGridWebWeaveImg from '../assets/hackgrid-webweave.jpg';
import netStormQuizizzImg from '../assets/netstorm-quizizz.jpg';
import netStormImg from '../assets/netstorm-2025.jpg';
import javaSprintImg from '../assets/java-sprint.jpg';
import quizizzIntroAiImg from '../assets/intro-to-ai.jpg';
import hackerRankAiImg from '../assets/ai-problem-solving.jpg';
import quizizzOsImg from '../assets/os-concepts.jpg';
import hackerRankProcessImg from '../assets/process-synchronization.jpg';
import techTalkProductImg from '../assets/tech-talk.jpg';
import aiRedefiningFutureImg from '../assets/ai-redefining.jpg';
import quizizzCloudImg from '../assets/cloud-computing.jpg';
import hackerRankAwsImg from '../assets/aws-basics.jpg';
import eminentSpeakerImg from '../assets/eminent-speaker.jpg';
import cybersecurityAwarenessImg from '../assets/cybersecurity-awareness.jpg';
import cyberQuestImg from '../assets/cyber-quest.jpg';
import dynamicDashQuizizzImg from '../assets/dynamic-dash-quizziz.jpg';
import dynamicDashImg from '../assets/dynamic-dash.jpg';
import quizizzMlBasicsImg from '../assets/ml-basics.jpg';
import mlCodeSprintImg from '../assets/ml-codesprint.jpg';
import reinforcementLearningImg from '../assets/reinforcement-learning.jpg';
import dataQuestImg from '../assets/dataquest.jpg';
import dataSprintImg from '../assets/python-datasprint.jpg';
import webDevQuestImg from '../assets/web-dev-quest.jpg';
import webSprintImg from '../assets/websprint.jpg';
import graphQuestImg from '../assets/graph-quest.jpg';
import graphExplorersImg from '../assets/graph-explorers.jpg';
import mysqlMasteryImg from '../assets/mysql-mastery.jpg';
import sqlChallengeImg from '../assets/sql-challenge.jpg';
import aiEvolutionImg from '../assets/ai-evolution.jpg';
import codeCombatImg from '../assets/code-combat.jpg';
import stackUpChallengeImg from '../assets/stack-up.jpg';
import conceptQuestImg from '../assets/concept-quest.jpg';
import codeSprintArraysImg from '../assets/codesprint.jpg';
import noCodeSeminarImg from '../assets/no-code-no-problem.jpg';
import aiEthicsImg from '../assets/AI-with-integrity.jpg';
import placementTalkImg from '../assets/placement-talk.jpg';
import chapterInaugurationImg from '../assets/acm_sigai_inauguration.jpg';
import PageWrapper from '../components/PageWrapper';
import ScrollButtons from '../components/ScrollButtons';
import ParallaxHero from "../components/ParallaxHero";
import { Users, Award, Briefcase, GraduationCap, BookOpen, Linkedin, Mail, Github, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Static events data
const EVENTS = [
  {
    id: 'future-ready-2025',
    title: 'Future Ready: AI Awareness for School Children',
    type: 'Community Service/Outreach',
    status: 'Completed',
    date: '2025-11-11',
    displayDate: 'Nov 11, 2025',
    description: 'Community outreach program introducing AI concepts and awareness to school children, fostering early interest in technology and artificial intelligence.',
    imageUrl: futureReadyImg,
    location: 'Local Schools',
    attendees: 150
  },
  {
    id: 'neural-frontiers-25',
    title: 'NeuralFrontiers\'25',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-10-11',
    displayDate: 'Oct 11, 2025',
    description: 'Advanced neural network competition showcasing cutting-edge AI research and innovative applications by students.',
    imageUrl: neuralFrontiersImg,
    attendees: 200
  },
  {
    id: 'ai-odyssey-25',
    title: 'AI Odyssey\'25 – AI Concepts & Applications',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-10-05',
    displayDate: 'Oct 05, 2025',
    description: 'Comprehensive AI competition covering fundamental concepts and real-world applications of artificial intelligence.',
    imageUrl: aiOdysseyImg,
    attendees: 180
  },
  {
    id: 'new-member-induction-2025',
    title: 'New Member Induction – SRMIST ACM SIGAI',
    type: 'Other',
    status: 'Completed',
    date: '2025-10-05',
    displayDate: 'Oct 05, 2025',
    description: 'Welcome ceremony for new members joining the SRMIST ACM SIGAI student chapter.',
    location: 'SRMIST Campus',
    imageUrl: newMemberInductionImg,
    attendees: 120
  },
  {
    id: 'vision-quest-25',
    title: 'VisionQuest\'25 – AI for Video Generation',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-10-04',
    displayDate: 'Oct 04, 2025',
    description: 'Innovative competition focused on AI-powered video generation technologies and creative applications.',
    imageUrl: visionQuestImg,
    attendees: 160
  },
  {
    id: 'venture-verse-finale',
    title: 'VentureVerse\'25 – Grand Finale (Demo Day)',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-08-22',
    displayDate: 'Aug 22, 2025',
    description: 'Final showcase of entrepreneurial ventures and innovative tech solutions by student teams.',
    imageUrl: ventureVerseFinaleImg,
    attendees: 250
  },
  {
    id: 'sdg-solve-finale',
    title: 'SDG Solve-a-Thon – Grand Finale',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-08-21',
    displayDate: 'Aug 21, 2025',
    description: 'Final round of hackathon focused on creating solutions for UN Sustainable Development Goals.',
    imageUrl: sdgSolveFinaleImg,
    attendees: 200
  },
  {
    id: 'innotech-inauguration',
    title: 'Inauguration of InnoTech\'25 – National Level Hackathon',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-08-20',
    displayDate: 'Aug 20, 2025',
    description: 'Opening ceremony of the national-level hackathon promoting innovation and technological solutions.',
    imageUrl: innoTechInaugurationImg,
    attendees: 300
  },
  {
    id: 'venture-verse-pitch',
    title: 'VentureVerse\'25 – Pitch & Networking',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-08-17',
    displayDate: 'Aug 17, 2025',
    description: 'Pitch competition and networking event for aspiring entrepreneurs and tech innovators.',
    imageUrl: ventureVersePitchImg,
    attendees: 150
  },
  {
    id: 'sdg-prototype',
    title: 'SDG Solve-a-Thon – Prototype Development',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-08-16',
    displayDate: 'Aug 16, 2025',
    description: 'Prototype development phase of the SDG-focused hackathon event.',
    imageUrl: sdgSolvePrototypeImg,
    attendees: 120
  },
  {
    id: 'venture-verse-concept',
    title: 'VentureVerse\'25 – Concept Submission',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-08-15',
    displayDate: 'Aug 15, 2025',
    description: 'Initial concept submission phase for the VentureVerse entrepreneurship competition.',
    imageUrl: ventureVerseConceptImg,
    attendees: 100
  },
  {
    id: 'sdg-ideation',
    title: 'SDG Solve-a-Thon – Ideation Round',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-08-15',
    displayDate: 'Aug 15, 2025',
    description: 'Brainstorming and ideation session for sustainable development solutions.',
    imageUrl: sdgSolveIdeationImg,
    attendees: 140
  },
  {
    id: 'stringcraft-2025',
    title: 'StringCraft 2025',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-07-09',
    displayDate: 'Jul 09, 2025',
    description: 'String manipulation and text processing programming competition.',
    imageUrl: stringCraftImg,
    attendees: 90
  },
  {
    id: 'branch-quest-python',
    title: 'BranchQuest – Python Decision Battle',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-07-08',
    displayDate: 'Jul 08, 2025',
    description: 'Python programming competition focusing on decision-making algorithms and control structures.',
    imageUrl: branchQuestImg,
    attendees: 85
  },
  {
    id: 'ai-pathfinder-2025',
    title: 'AI Pathfinder Challenge 2025',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-07-07',
    displayDate: 'Jul 07, 2025',
    description: 'AI and machine learning challenge testing pathfinding algorithms and optimization techniques.',
    imageUrl: aiPathfinderImg,
    attendees: 110
  },
  {
    id: 'gridquest-castle',
    title: 'GridQuest – Castle Challenge',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-06-29',
    displayDate: 'Jun 29, 2025',
    description: 'Grid-based algorithmic challenge with castle-themed problem solving.',
    imageUrl: gridQuestImg,
    attendees: 75
  },
  {
    id: 'minimax-showdown',
    title: 'Minimax Showdown – Tic Tac Toe Tactics',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-06-28',
    displayDate: 'Jun 28, 2025',
    description: 'Game theory competition implementing minimax algorithms for Tic Tac Toe strategies.',
    imageUrl: minimaxShowdownImg,
    attendees: 65
  },
  {
    id: 'red-knight-challenge',
    title: 'The Red Knight Challenge',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-06-27',
    displayDate: 'Jun 27, 2025',
    description: 'Chess-inspired algorithmic challenge focusing on knight movement patterns.',
    imageUrl: redKnightImg,
    attendees: 80
  },
  {
    id: 'hackgrid-tech-exhibit',
    title: 'HackGrid – Tech Exhibit',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-23',
    displayDate: 'Apr 23, 2025',
    description: 'Technology exhibition showcasing innovative projects and hackathon solutions.',
    imageUrl: hackGridTechImg,
    attendees: 200
  },
  {
    id: 'ai-unravel-robotics',
    title: 'AI Unravel: Robotics Workshop',
    type: 'Workshop',
    status: 'Completed',
    date: '2025-04-22',
    displayDate: 'Apr 22, 2025',
    description: 'Hands-on robotics workshop exploring AI integration in robotic systems.',
    imageUrl: aiUnravelImg,
    attendees: 60
  },
  {
    id: 'turing-games',
    title: 'Turing Games',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-22',
    displayDate: 'Apr 22, 2025',
    description: 'Multi-round programming competition inspired by Alan Turing\'s computational theories.',
    imageUrl: turingGamesImg,
    attendees: 130
  },
  {
    id: 'sigai-mechanical-collab',
    title: 'SRMIST ACM SIGAI x Mechanical Engg.',
    type: 'Workshop',
    status: 'Completed',
    date: '2025-04-21',
    displayDate: 'Apr 21–25, 2025',
    description: 'Interdisciplinary workshop collaboration between AI and Mechanical Engineering departments.',
    imageUrl: sigaiMechanicalImg,
    attendees: 80
  },
  {
    id: 'codecrux-query-quest',
    title: 'CodeCrux – Query Quest',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-21',
    displayDate: 'Apr 21, 2025',
    description: 'Database query optimization and SQL programming competition.',
    imageUrl: codeCruxQueryImg,
    attendees: 95
  },
  {
    id: 'codecrux-oops',
    title: 'CodeCrux – OOPS Odyssey',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-21',
    displayDate: 'Apr 21, 2025',
    description: 'Object-oriented programming principles and design patterns competition.',
    imageUrl: codeCruxOopsImg,
    attendees: 105
  },
  {
    id: 'quizizz-devcycle',
    title: 'Quizizz – DevCycle Quest',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-20',
    displayDate: 'Apr 20, 2025',
    description: 'Software development lifecycle quiz competition covering various methodologies.',
    imageUrl: quizizzDevCycleImg,
    attendees: 70
  },
  {
    id: 'agile-arena-2025',
    title: 'AgileArena 2025 – Code the Agile Way',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-19',
    displayDate: 'Apr 19, 2025',
    description: 'Agile development methodology competition with practical coding challenges.',
    imageUrl: agileArenaImg,
    attendees: 85
  },
  {
    id: 'hackgrid-ready-player',
    title: 'HackGrid – Ready Player Hack',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-19',
    displayDate: 'Apr 19–21, 2025',
    description: 'Gaming-themed hackathon with virtual reality and game development challenges.',
    imageUrl: hackGridReadyPlayerImg,
    attendees: 180
  },
  {
    id: 'hackgrid-webweave',
    title: 'HackGrid – WebWeave',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-17',
    displayDate: 'Apr 17, 2025',
    description: 'Web development competition focusing on modern frameworks and responsive design.',
    imageUrl: hackGridWebWeaveImg,
    attendees: 120
  },
  {
    id: 'netstorm-quizizz',
    title: 'NetStorm 2025 – Quizizz',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-13',
    displayDate: 'Apr 13, 2025',
    description: 'Network and internet technologies quiz competition.',
    imageUrl: netStormQuizizzImg,
    attendees: 90
  },
  {
    id: 'netstorm-2025',
    title: 'NetStorm 2025',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-12',
    displayDate: 'Apr 12, 2025',
    description: 'Comprehensive networking and cybersecurity competition.',
    imageUrl: netStormImg,
    attendees: 110
  },
  {
    id: 'java-sprint',
    title: 'JAVA SPRINT',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-07',
    displayDate: 'Apr 07, 2025',
    description: 'Fast-paced Java programming competition testing coding speed and accuracy.',
    imageUrl: javaSprintImg,
    attendees: 100
  },
  {
    id: 'quizizz-intro-ai',
    title: 'Quizizz – Introduction to AI',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-06',
    displayDate: 'Apr 06, 2025',
    description: 'Foundational AI concepts and terminology quiz competition.',
    imageUrl: quizizzIntroAiImg,
    attendees: 120
  },
  {
    id: 'hackerrank-ai-problem',
    title: 'HackerRank – AI Problem Solving',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-04-05',
    displayDate: 'Apr 05, 2025',
    description: 'AI-focused algorithmic problem solving competition on HackerRank platform.',
    imageUrl: hackerRankAiImg,
    attendees: 95
  },
  {
    id: 'quizizz-os-concepts',
    title: 'Quizizz – Operating System Concepts',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-30',
    displayDate: 'Mar 30, 2025',
    description: 'Operating system fundamentals and concepts quiz competition.',
    imageUrl: quizizzOsImg,
    attendees: 85
  },
  {
    id: 'hackerrank-process-sync',
    title: 'HackerRank – Process Synchronization',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-29',
    displayDate: 'Mar 29, 2025',
    description: 'Process synchronization and concurrent programming challenges on HackerRank.',
    imageUrl: hackerRankProcessImg,
    attendees: 75
  },
  {
    id: 'tech-talk-product',
    title: 'Tech Talk: Path to Product-Based Companies',
    type: 'Lecture/Tech Talk',
    status: 'Completed',
    date: '2025-03-28',
    displayDate: 'Mar 28, 2025',
    description: 'Career guidance session on landing roles at top product-based technology companies.',
    imageUrl: techTalkProductImg,
    attendees: 200
  },
  {
    id: 'ai-redefining-future',
    title: 'AI: Redefining the Future of Tech',
    type: 'Seminar',
    status: 'Completed',
    date: '2025-03-27',
    displayDate: 'Mar 27, 2025',
    description: 'Comprehensive seminar on AI\'s transformative impact on technology and society.',
    imageUrl: aiRedefiningFutureImg,
    attendees: 180
  },
  {
    id: 'quizizz-cloud-basics',
    title: 'Quizizz – Cloud Computing Basics',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-23',
    displayDate: 'Mar 23, 2025',
    description: 'Cloud computing fundamentals and concepts quiz competition.',
    imageUrl: quizizzCloudImg,
    attendees: 95
  },
  {
    id: 'hackerrank-aws-basics',
    title: 'HackerRank – AWS Basics',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-22',
    displayDate: 'Mar 22, 2025',
    description: 'Amazon Web Services fundamentals and basic cloud services challenges.',
    imageUrl: hackerRankAwsImg,
    attendees: 80
  },
  {
    id: 'eminent-speaker-program',
    title: 'Eminent Speaker Program',
    type: 'Lecture/Tech Talk',
    status: 'Completed',
    date: '2025-03-21',
    displayDate: 'Mar 21, 2025',
    description: 'Distinguished speaker series featuring industry leaders and tech innovators.',
    imageUrl: eminentSpeakerImg,
    attendees: 250
  },
  {
    id: 'cybersecurity-awareness',
    title: 'Cybersecurity Awareness',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-16',
    displayDate: 'Mar 16, 2025',
    description: 'Cybersecurity awareness competition promoting best practices and threat recognition.',
    imageUrl: cybersecurityAwarenessImg,
    attendees: 130
  },
  {
    id: 'cyberquest-2025',
    title: 'CyberQuest 2025',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-15',
    displayDate: 'Mar 15, 2025',
    description: 'Comprehensive cybersecurity competition with ethical hacking challenges.',
    imageUrl: cyberQuestImg,
    attendees: 140
  },
  {
    id: 'dynamic-dash-quizizz',
    title: 'Dynamic Dash 2025 – Quizizz Edition',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-09',
    displayDate: 'Mar 09, 2025',
    description: 'Fast-paced programming concepts quiz competition.',
    imageUrl: dynamicDashQuizizzImg,
    attendees: 70
  },
  {
    id: 'dynamic-dash-2025',
    title: 'Dynamic Dash 2025',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-08',
    displayDate: 'Mar 08, 2025',
    description: 'Dynamic programming and algorithmic problem solving competition.',
    imageUrl: dynamicDashImg,
    attendees: 90
  },
  {
    id: 'quizizz-ml-basics',
    title: 'Quizizz – Machine Learning Basics',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-02',
    displayDate: 'Mar 02, 2025',
    description: 'Machine learning fundamentals and concepts quiz competition.',
    imageUrl: quizizzMlBasicsImg,
    attendees: 110
  },
  {
    id: 'ml-codesprint-2025',
    title: 'ML CodeSprint 2025',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-03-01',
    displayDate: 'Mar 01, 2025',
    description: 'Machine learning coding competition with practical implementation challenges.',
    imageUrl: mlCodeSprintImg,
    attendees: 95
  },
  {
    id: 'rl-seminar',
    title: 'Reinforcement Learning – AI\'s Next Big Lead',
    type: 'Seminar',
    status: 'Completed',
    date: '2025-02-27',
    displayDate: 'Feb 27, 2025',
    description: 'Deep dive into reinforcement learning algorithms and their future applications.',
    imageUrl: reinforcementLearningImg,
    attendees: 160
  },
  {
    id: 'dataquest-ds-basics',
    title: 'DataQuest: Data Science Basics',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-23',
    displayDate: 'Feb 23, 2025',
    description: 'Data science fundamentals and exploratory data analysis competition.',
    imageUrl: dataQuestImg,
    attendees: 85
  },
  {
    id: 'datasprint-python',
    title: 'DataSprint: Python Edition',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-22',
    displayDate: 'Feb 22, 2025',
    description: 'Python programming competition focused on data manipulation and analysis.',
    imageUrl: dataSprintImg,
    attendees: 100
  },
  {
    id: 'web-dev-quest',
    title: 'Web Dev Quest',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-16',
    displayDate: 'Feb 16, 2025',
    description: 'Web development fundamentals and frontend technologies competition.',
    imageUrl: webDevQuestImg,
    attendees: 120
  },
  {
    id: 'websprint-challenge',
    title: 'WebSprint Challenge',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-15',
    displayDate: 'Feb 15, 2025',
    description: 'Fast-paced web development challenge with modern frameworks.',
    imageUrl: webSprintImg,
    attendees: 105
  },
  {
    id: 'graph-quest',
    title: 'Graph Quest',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-09',
    displayDate: 'Feb 09, 2025',
    description: 'Graph theory and network algorithms programming competition.',
    imageUrl: graphQuestImg,
    attendees: 75
  },
  {
    id: 'graph-explorers',
    title: 'Graph Explorers',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-08',
    displayDate: 'Feb 08, 2025',
    description: 'Graph traversal and exploration algorithms competition.',
    imageUrl: graphExplorersImg,
    attendees: 80
  },
  {
    id: 'mysql-mastery-quiz',
    title: 'The MySQL Mastery: Quiz Quest',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-02',
    displayDate: 'Feb 02, 2025',
    description: 'MySQL database management and optimization quiz competition.',
    imageUrl: mysqlMasteryImg,
    attendees: 65
  },
  {
    id: 'sql-challenge',
    title: 'The SQL Challenge',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-02-01',
    displayDate: 'Feb 01, 2025',
    description: 'SQL query writing and database design competition.',
    imageUrl: sqlChallengeImg,
    attendees: 85
  },
  {
    id: 'ai-evolution-seminar',
    title: 'Exploring the Evolution & Future of AI',
    type: 'Seminar',
    status: 'Completed',
    date: '2025-01-29',
    displayDate: 'Jan 29, 2025',
    description: 'Historical perspective on AI development and predictions for future breakthroughs.',
    imageUrl: aiEvolutionImg,
    attendees: 190
  },
  {
    id: 'code-combat',
    title: 'The Code Combat',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-01-12',
    displayDate: 'Jan 12, 2025',
    description: 'Competitive programming battle with algorithmic challenges.',
    imageUrl: codeCombatImg,
    attendees: 110
  },
  {
    id: 'stackup-challenge',
    title: 'StackUp Challenge',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-01-11',
    displayDate: 'Jan 11, 2025',
    description: 'Data structures and stack-based algorithm competition.',
    imageUrl: stackUpChallengeImg,
    attendees: 90
  },
  {
    id: 'concept-quest-basics',
    title: 'Concept Quest: Basic Programming Fundamentals',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-01-05',
    displayDate: 'Jan 05, 2025',
    description: 'Programming fundamentals and basic concepts competition for beginners.',
    imageUrl: conceptQuestImg,
    attendees: 150
  },
  {
    id: 'codesprint-arrays-strings',
    title: 'CodeSprint: Arrays and Strings',
    type: 'Student Competitions',
    status: 'Completed',
    date: '2025-01-04',
    displayDate: 'Jan 04, 2025',
    description: 'Array manipulation and string processing programming competition.',
    imageUrl: codeSprintArraysImg,
    attendees: 95
  },
  {
    id: 'no-code-seminar',
    title: 'No Code? No Problem!',
    type: 'Seminar',
    status: 'Completed',
    date: '2024-12-26',
    displayDate: 'Dec 26, 2024',
    description: 'Introduction to no-code development platforms and their potential for innovation.',
    imageUrl: noCodeSeminarImg,
    attendees: 110
  },
  {
    id: 'ai-ethics-seminar',
    title: 'AI with Integrity – Ethics in AI',
    type: 'Seminar',
    status: 'Completed',
    date: '2024-11-11',
    displayDate: 'Nov 11, 2024',
    description: 'Critical discussion on ethical considerations and responsible AI development.',
    imageUrl: aiEthicsImg,
    attendees: 170
  },
  {
    id: 'placement-talk',
    title: 'Placement Talk',
    type: 'Job Related',
    status: 'Completed',
    date: '2024-10-09',
    displayDate: 'Oct 09, 2024',
    description: 'Career guidance and placement preparation session for students.',
    imageUrl: placementTalkImg,
    attendees: 150
  },
  {
    id: 'chapter-inauguration',
    title: 'ACM SIGAI Student Chapter Inauguration + Tech Talk',
    type: 'Lecture/Tech Talk',
    status: 'Completed',
    date: '2024-10-04',
    displayDate: 'Oct 04, 2024',
    description: 'Official launch of the SRMIST ACM SIGAI student chapter with inaugural tech talk.',
    imageUrl: chapterInaugurationImg,
    attendees: 300
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('past');

  const EventCard = ({ event }) => (
    <div className="glass-card rounded-xl overflow-hidden hover:glow-cyan transition-all duration-300">
      {/* Event Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        
        {/* Event Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
            {event.type}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-muted/80 text-muted-foreground px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            {event.status}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">
          {event.title}
        </h3>

        {event.description && (
          <p className="text-muted-foreground text-sm mb-4">
            {event.description}
          </p>
        )}

        {/* Event Details - Only show non-empty fields */}
        <div className="space-y-2">
          {event.displayDate && (
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4 mr-2 text-accent" />
              {event.displayDate}
            </div>
          )}
          {event.time && (
            <div className="flex items-center text-sm text-muted-foreground">
              <ClockIcon className="h-4 w-4 mr-2 text-accent" />
              {event.time}
            </div>
          )}
          {event.location && (
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPinIcon className="h-4 w-4 mr-2 text-accent" />
              {event.location}
            </div>
          )}
          {event.attendees > 0 && (
            <div className="flex items-center text-sm text-muted-foreground">
              <UsersIcon className="h-4 w-4 mr-2 text-accent" />
              {event.attendees} attendees
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const pastEvents = EVENTS.filter(event => event.status === 'Completed');
  const upcomingEvents = EVENTS.filter(event => event.status !== 'Completed');

  return (
    <PageWrapper>
      <ScrollButtons />
      <div className="min-h-screen bg-background" style={{ backgroundColor: 'hsl(215, 80%, 9%)' }}>
        {/* Header */}
        <div className="gradient-hero py-16">
          <div className="container mx-auto px-4">
            <ParallaxHero>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
                  <div className="text-center">
                    <div className="mb-10">
                      <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-card animate-glow-pulse">
                        <Users className="w-5 h-5 text-cyan" />
                        <span className="text-cyan/80 text-sm font-medium tracking-wider uppercase">
                          our events  
                        </span>
                      </div>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
                      <span className="text-gradient letter-spacing-animate inline-block">
                        Events
                      </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-cyan/70 font-light tracking-widest uppercase max-w-3xl mx-auto">
                      Discover What’s Happening in ACM SIGAI
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-16">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
                      <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                      <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
                      <div
                        className="w-2 h-2 rounded-full bg-cyan animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
                    </div>
                  </div>
                </div>
              </ParallaxHero>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex space-x-1 glass-card rounded-lg p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'upcoming' 
                    ? 'bg-accent text-accent-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'past' 
                    ? 'bg-accent text-accent-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'upcoming' ? (
              upcomingEvents.length > 0 ? (
                upcomingEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="glass-card rounded-xl p-8 max-w-md mx-auto">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CalendarIcon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No Upcoming Events
                    </h3>
                    <p className="text-muted-foreground">
                      No upcoming events scheduled at the moment. Check back soon for new announcements!
                    </p>
                  </div>
                </div>
              )
            ) : (
              pastEvents.length > 0 ? (
                pastEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="glass-card rounded-xl p-8 max-w-md mx-auto">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CalendarIcon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No Past Events
                    </h3>
                    <p className="text-muted-foreground">
                      No completed events to display.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Events;