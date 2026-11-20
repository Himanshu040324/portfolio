export const profile = {
  name: "Himanshu",
  headline: "I build backend systems, and the full-stack products that sit on top of them.",
  bio: "I’m a final-year Mathematics & Computing student at Delhi Technological University. I like event-driven pipelines, real-time interfaces and the unglamorous work of making them reliable. Right now I’m building an incident analyzer on Kafka and Elasticsearch.",
  email: "himanshu.040324@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Himanshu040324" },
    { label: "LinkedIn", href: "https://linkedin.com/in/himanshu040324" },
    { label: "LeetCode", href: "https://leetcode.com/u/user1203Rs" },
  ],
};

export type Project = {
  name: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string;
  repo?: string; // TODO: add GitHub repo URL
  live?: string; // TODO: add live URL
  pipeline?: { name: string; note: string }[];
};

export const projects: Project[] = [
  {
    name: "Production Incident Analyzer",
    period: "July 2026 – present",
    summary:
      "A distributed log platform that ingests service logs, spots error spikes and turns them into incidents a team can act on.",
    pipeline: [
      { name: "Kafka", note: "Logs from 4 services" },
      { name: "Elasticsearch", note: "Indexed for search" },
      { name: "Detector", note: "60s window opens incidents in MongoDB" },
      { name: "Dashboard", note: "Live over Socket.IO" },
    ],
    highlights: [
      "Event-driven ingestion with Apache Kafka, indexing logs from 4 simulated production services into Elasticsearch.",
      "A 60-second rolling error window with configurable thresholds creates incident records in MongoDB automatically.",
      "Redis fingerprint keys with a 5-minute TTL deduplicate alerts and count the repeats they suppress.",
      "Elasticsearch mappings support full-text search, service and severity filters, time ranges, and trace or request ID lookups.",
      "React dashboard with live logs, Slack webhook alerts, acknowledge and resolve actions, and MTTR analytics, all orchestrated with Docker Compose.",
    ],
    stack: "Node.js, Express.js, Kafka, MongoDB, Elasticsearch, Redis, Socket.IO, Docker, React.js",
    repo: "",
  },
  {
    name: "Reddit-style Social Platform",
    period: "December 2025",
    summary:
      "A full-stack community platform with posts, voting, threaded discussion, live notifications and moderation.",
    highlights: [
      "Communities, memberships, posts, profiles and moderation workflows on the Next.js App Router and Supabase PostgreSQL.",
      "Hot, New and Top feeds with community filtering and server-side data retrieval.",
      "Optimistic voting on posts and comments, backed by conflict-aware upserts so scores stay in sync without a refresh.",
      "Live notifications through Supabase Realtime for upvotes, comments, replies and mentions, with timestamp-based pagination.",
      "Tiptap rich-text editor and moderation tools: post removal, pinning and user bans.",
    ],
    stack: "Next.js 16, Supabase, PostgreSQL, Tailwind CSS, Shadcn UI, JavaScript",
    repo: "",
    live: "",
  },
];

export const skills = [
  { group: "Languages", items: "C++, JavaScript, TypeScript, SQL" },
  { group: "Backend", items: "Node.js, Express.js, REST APIs, Apache Kafka, Socket.IO, Clerk, Arcjet" },
  { group: "Data", items: "PostgreSQL, MongoDB, Supabase, Redis, Elasticsearch, Prisma" },
  { group: "Frontend", items: "React.js, Next.js, Tailwind CSS, Shadcn UI" },
  { group: "Tooling", items: "Git, GitHub, Docker, Postman, Vercel, Google GenAI" },
  { group: "Fundamentals", items: "Data structures and algorithms, system design, OOP, DBMS, operating systems, computer networks" },
];

export const achievements = [
  {
    title: "LeetCode Knight",
    text: "Peak rating of 1800+, in the top 4% globally. 800+ problems solved across LeetCode, Code360 and GeeksforGeeks.",
  },
  {
    title: "Smart India Hackathon",
    text: "Led the team’s final project presentation under pressure.",
  },
  {
    title: "NPTEL Elite certification",
    text: "Cloud Computing, IIT Kharagpur. A 12-week course completed in 2025.",
  },
];

export const education = {
  school: "Delhi Technological University",
  degree: "B.Tech, Mathematics & Computing",
  period: "2023 – 2027",
};
