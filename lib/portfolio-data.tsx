import type {
  CaseStudy,
  CommunityEntry,
  DetailLink,
  ExperienceRole,
  NavItem,
  RailRow,
  Section,
  ToolkitRow,
} from './types';
import { INLINE_LINK } from './styles';

/* ---------------------------------------------------------------------------
 * Content source of truth — every string on the site lives here.
 * ------------------------------------------------------------------------- */

export const NAME = 'Saurav Kumar';
/* Deliberately not "Software Engineer II": the experience section states the
 * actual employer title, and a self-assigned level is the fastest way to make
 * a reviewer re-audit everything else. The page argues the level; it never
 * claims it. */
export const ROLE = 'Full-Stack + AI Engineer';
export const EMAIL = 'sk729584@gmail.com';
export const LOCATION = 'Mumbai, IN';
export const YEAR = '2026';

// Design links a Drive PDF. Drop public/Saurav-Kumar-Resume.pdf into the repo and
// change this to '/Saurav-Kumar-Resume.pdf' to serve it locally.
export const RESUME_URL =
  'https://drive.google.com/file/d/1dXCSi_ufn4W0W9mrIpKgU_w9ONNmqsWF/view?usp=sharing';

export const SOCIALS: DetailLink[] = [
  { label: 'GitHub', url: 'https://github.com/saurav02022' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saurav02022/' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/Saurav02022/' },
];

/** Numbered sections — the cover index rail and the mobile menu. */
export const SECTIONS: Section[] = [
  { num: '01', label: 'Experience', id: 'experience' },
  { num: '02', label: 'Work', indexLabel: 'Selected Work', id: 'work' },
  { num: '03', label: 'Open source', id: 'open-source' },
  { num: '04', label: 'About', id: 'about' },
  { num: '05', label: 'Toolkit', id: 'toolkit' },
  { num: '06', label: 'Contact', id: 'contact' },
];

/** Top nav — unnumbered, and Toolkit is deliberately not in it. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Index', id: 'top' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'work' },
  { label: 'Open source', id: 'open-source' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const cover = {
  eyebrow: 'Software engineer, 3+ years in production',
  title: (
    <>
      I design the database, build the backend and the frontend, and <em>put it live</em>{' '}
      myself.
    </>
  ),
  support:
    'Right now that is EdTech. My team builds ten products, used by teachers, students, principals and school admins across 117 schools. Four of them are entirely mine — frontend, backend, the database under them, the deploy, and whatever breaks in production afterward. I gather the requirements for those four myself and build from there.',
  /* The four planes of the background scene, in order. Hovering one lights the
   * matching layer in the 3D stack — the labels and the scene share this list,
   * so a rename here moves both. */
  layersLabel: 'Frontend to deploy — hover to trace a layer',
  layers: ['Frontend', 'Backend', 'Database', 'Deploy'],
  stats: [
    { label: 'I OWN', value: 'Frontend, backend, database and deploy — 4 of 10 apps' },
    { label: 'BASED', value: 'Mumbai, open to relocating' },
  ],
};

export const MARQUEE_ITEMS = [
  '4 apps, mine end to end',
  'An Android app, start to finish',
  '8.5 seconds down to 2.5',
  'Records offline, uploads in order',
  'One handler, one outcome',
  'The maths never comes from the model',
  'Mentoring two open-source projects',
  'Nothing lost, nothing saved twice',
];

export const workIntro =
  'These six are mine — I was the only engineer on each one. A few share a stack on purpose, so the thinking went into the problem and not into choosing tools again. Open the claims engine first if you only open one: there is no model anywhere near the part that decides the money. Where something started as a take-home or a hackathon, the card says so.';

/* Six cases, one card. Sorted by how much verifiable engineering each repo
 * holds — tests, architecture, deploy pipeline — not by how shiny the product
 * is. Origin (take-home, hackathon) is stated in the copy on purpose. */
export const cases: CaseStudy[] = [
  {
    feature: 'Feature 01',
    kind: 'Full-stack · Personal tool',
    live: true,
    year: '2026',
    title: 'AI Résumé Builder',
    summary:
      'Rewrites a résumé for one particular job advert, showing every change side by side before anything is exported.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Frontend, API, tests, deploy.',
      },
      {
        label: 'Challenge',
        text: 'A résumé written for everything speaks to nobody. Rewriting it by hand for every job takes forever, and a model left alone will quietly change formatting you needed kept.',
      },
      {
        label: 'Key decision',
        text: 'The model has to return the résumé in one fixed shape — if it returns anything else, the app rejects the answer outright, because a quietly broken résumé is worse than no résumé at all. I also show every change next to the original instead of applying it automatically. That is slower, but the person still owns what their résumé says.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'The tests drive the real app in a browser with the model’s answers faked, so they check my code, not the model’s mood that day. Deploy only happens if they pass on that same commit. I use this for my own job applications.',
      },
    ],
    fig: {
      caption: 'review before export',
      sub: 'upload → rewrite → compare → PDF',
      steps: [
        { n: '01', text: 'Upload résumé and job advert' },
        {
          n: '02',
          text: 'Model returns one fixed shape',
          note: 'anything off that shape is rejected, not patched',
        },
        { n: '03', text: 'Compare each change side by side' },
        { n: '04', text: 'Export the accepted version' },
      ],
    },
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Gemini API', 'Playwright', 'Cloud Run'],
    languages: ['TypeScript', 'Python'],
    repoUrl: 'https://github.com/Saurav02022/resume-builder',
    liveUrl: 'https://resume-builder-saurav02022.vercel.app',
  },
  {
    feature: 'Feature 02',
    kind: 'Full-stack · Take-home, no brief given',
    year: '2026',
    title: 'RTO Shield',
    summary:
      'Rings a customer with an AI voice call to confirm a cash-on-delivery order before the parcel ships, so the seller is not left paying shipping both ways when it is refused at the door.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'I wrote the problem statement, picked the users, picked the stack.',
      },
      {
        label: 'Challenge',
        text: 'When a customer refuses a cash-on-delivery parcel, it travels back to the seller, and the seller pays for both legs of the trip. The trade calls this a return to origin, RTO. Nobody had asked the customer first.',
      },
      {
        label: 'Key decision',
        text: 'The phone service reports the same call more than once — early, again once the details land, and again if an operator pulls the record. I sent all three down one handler keyed on the call ID, so one call produces one outcome and the parcel only ships after a real confirmation arrives. I also kept the database swappable, so the tests run against a fake one held in memory while the live app runs on Firestore. That is one more piece to maintain, and it buys a test run that finishes in seconds.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'Send the same call result twice and the second one is logged as a duplicate instead of applied again. That case is a test, and a push that fails it does not merge. Every order in it is one I made up for testing. No real orders have gone through it, and I am not going to claim otherwise.',
      },
    ],
    fig: {
      caption: 'one call, one outcome',
      sub: 'order → call → match → ship',
      steps: [
        { n: '01', text: 'Order comes in unconfirmed' },
        { n: '02', text: 'AI voice call rings the customer' },
        {
          n: '03',
          text: 'Every report matched on call ID',
          note: 'the same result arrives three times; this collapses it to one',
        },
        { n: '04', text: 'Ship only after a confirmation' },
      ],
    },
    tags: ['FastAPI', 'Python', 'Next.js', 'Bolna', 'Firestore', 'Docker', 'GitHub Actions'],
    languages: ['Python', 'TypeScript'],
    repoUrl: 'https://github.com/Saurav02022/rto-shield',
  },
  {
    feature: 'Feature 03',
    kind: 'Backend · Take-home',
    year: '2026',
    title: 'Claims Adjudication Engine',
    summary:
      'Works out what a health insurance claim should actually pay, and keeps a record of that decision which can be added to but never edited.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Sole engineer. Calculation, API, database, tests.',
      },
      {
        label: 'Challenge',
        text: 'A claim has to be checked against a policy, then reduced by the deductible, the copay and the yearly limit, in that order. Get one step wrong and the payout is wrong. There is no partial credit on money.',
      },
      {
        label: 'Key decision',
        text: 'I kept the money maths as plain Python with nothing from the web framework touching it, so every rule can be tested directly instead of through an API call. That meant writing more setup code by hand rather than letting the framework carry it. Saving a claim and all its line items happens in one database function, so either the whole claim is written or none of it is.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'There is more test code in it than application code, which was deliberate on the part that decides money. The tests run from the rules on their own all the way through to checks against a real database.',
      },
    ],
    fig: {
      caption: 'one calculation path',
      sub: 'claim → rules → amount → record',
      steps: [
        { n: '01', text: 'Check the policy is valid' },
        {
          n: '02',
          text: 'Apply cover, deductible, copay, limit',
          note: 'plain Python here, so each rule is tested on its own',
        },
        { n: '03', text: 'Roll line items into one status' },
        { n: '04', text: 'Write the whole claim at once' },
      ],
    },
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'pytest'],
    languages: ['Python'],
    repoUrl: 'https://github.com/Saurav02022/claims-processing-system',
  },
  {
    feature: 'Feature 04',
    kind: 'Full-stack · Personal project',
    year: '2026',
    title: 'Intervue',
    summary:
      'Lets someone book a mock interview using credits, sit it on a video call, and read written feedback once they hang up.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Booking, credits, video, feedback, deploy.',
      },
      {
        label: 'Challenge',
        text: 'Practising interviews needs a real person on the other side, and the people who need the practice most are the least likely to know one. Feedback afterward is the whole point, and it rarely arrives in writing.',
      },
      {
        label: 'Key decision',
        text: 'The call writes its own transcript, and that transcript goes to Gemini to come back as written feedback. I tied that step to the booking rather than to the message that triggers it, so if the same message arrives twice it updates the same booking instead of paying the interviewer a second time. Each service checks the login for itself rather than trusting whatever called it, and booking and withdrawal are both capped per person.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'The deploy builds the image, starts it, and waits for a real answer from it before anything rolls out, so a broken build never reaches anyone.',
      },
    ],
    fig: {
      caption: 'credits to feedback',
      sub: 'book → call → transcript → feedback',
      steps: [
        { n: '01', text: 'Spend credits to book a slot' },
        { n: '02', text: 'Video call writes its transcript' },
        {
          n: '03',
          text: 'Feedback saved against the booking',
          note: 'a repeat message updates one record, not two payouts',
        },
        { n: '04', text: 'Written feedback after hanging up' },
      ],
    },
    tags: ['Next.js', 'FastAPI', 'Clerk', 'Prisma', 'Stream', 'Gemini API', 'Cloud Run'],
    languages: ['TypeScript', 'Python'],
    repoUrl: 'https://github.com/Saurav02022/ai-interview',
  },
  {
    feature: 'Feature 05',
    kind: 'Frontend and AI · Personal tool',
    live: true,
    year: '2025',
    title: 'LinkedIn Hashtag Refresh Engine',
    summary:
      'Takes an old LinkedIn post, drafts three fresh sets of hashtags aimed at different kinds of reach, and posts the chosen set as a comment.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Frontend, model prompts, login handling, deploy.',
      },
      {
        label: 'Challenge',
        text: 'A post stops travelling once its hashtags go stale. Reposting it looks desperate, so the reach is simply lost.',
      },
      {
        label: 'Key decision',
        text: 'I first tried to read the post automatically. It kept breaking, and the fix that would have held cost money, so I dropped it and let people paste the text in instead. The login turned out to be the real work: LinkedIn expires it every 60 days, so I wrote that renewal by hand, with a fallback that flags the failure rather than silently retrying.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'Failures report to one place, so a broken login shows up as an alert instead of a confused user. Reading the post automatically is still not in it.',
      },
    ],
    fig: {
      caption: 'paste, pick, comment',
      sub: 'paste → 3 sets → pick → comment',
      steps: [
        { n: '01', text: 'Paste the post text in' },
        { n: '02', text: 'Three hashtag sets drafted' },
        { n: '03', text: 'Pick one, posted as a comment' },
        {
          n: '04',
          text: 'Login renewed on a 60-day expiry',
          note: 'renewal written by hand, with failures flagged not hidden',
        },
      ],
    },
    tags: ['Next.js', 'NextAuth', 'Gemini API', 'Zod', 'Sentry', 'Docker'],
    languages: ['TypeScript'],
    repoUrl: 'https://github.com/Saurav02022/linkedin-hashtag-refresh-engine-app',
    liveUrl: 'https://ai-linkedin-hashtag-refresh-engine-app.vercel.app',
  },
  {
    feature: 'Feature 06',
    kind: 'Full-stack · Hackathon · 3 hours',
    year: '2026',
    title: 'Financial Literacy Assistant',
    summary:
      'Explains budgeting, saving and investing to someone who has never done any of it before.',
    facts: [
      {
        label: 'Role',
        tone: 'plain',
        text: 'Built alone, in one sitting.',
      },
      {
        label: 'Challenge',
        text: 'People starting from zero get advice full of terms they do not know, and the numbers in it are rarely explained.',
      },
      {
        label: 'Key decision',
        text: 'Every number is worked out in ordinary code, never by the model. The model only handles the wording. So if it is down or slow the explanation changes but the maths does not, which was worth more to me in three hours than a smarter answer that could quietly be wrong.',
      },
      {
        label: 'Outcome',
        tone: 'strong',
        text: 'The calculation code is tested on its own, away from the wording the model writes. It went on Cloud Run for the judges.',
      },
    ],
    fig: {
      caption: 'maths outside the model',
      sub: 'inputs → maths → wording → plan',
      steps: [
        { n: '01', text: 'Enter income, spending, goal' },
        {
          n: '02',
          text: 'Plain code does the maths',
          note: 'a model outage changes the wording, never the numbers',
        },
        { n: '03', text: 'Model explains it in plain words' },
        { n: '04', text: 'Budget and saving plan out' },
      ],
    },
    tags: ['Next.js', 'Supabase', 'Gemini API', 'Vitest'],
    languages: ['TypeScript'],
    repoUrl: 'https://github.com/Saurav02022/financial-literacy-assistant',
  },
];

export const experienceIntro =
  'Two jobs so far. The first was a video platform for creators in Bengaluru. The second is EdTech, where I am now.';

export const experience: ExperienceRole[] = [
  {
    dates: 'Nov 2024 — Present',
    company: 'Shikha Learning Labs',
    meta: ['Software Engineer', 'Shantilal Shanghvi Foundation', 'EdTech · Mumbai, India'],
    summary: (
      <>
        Shikha Labs builds{' '}
        <a
          className={INLINE_LINK}
          href="https://shikha.ai"
          target="_blank"
          rel="noopener"
          aria-label="Sakhee by Shikha Labs (opens in new tab)"
        >
          Sakhee
        </a>
        , an EdTech platform used by teachers, students, principals and school admins across
        117 schools. On the teaching side that means planning a lesson, building an
        assessment, seeing how a class is doing. Ten products sit in the platform, and four
        are mine end to end: I write the frontend and the backend, design the database,
        deploy it, and I am the one who gets paged when something breaks in production. I
        gather the requirements for those four myself and build from there, and they hold at{' '}
        <b>96%+ crash-free sessions</b>. A change to one table is a change all four have to
        live with, so that database gets argued about before it gets written. Two peer-reviewed papers have
        been published on this work: one on the history chatbots (
        <a
          className={INLINE_LINK}
          href="https://doi.org/10.33965/celda2025_202509l042"
          target="_blank"
          rel="noopener"
          aria-label="Conversations for Learning, CELDA 2025 (opens in new tab)"
        >
          CELDA 2025
        </a>
        ), and one on how the platform was designed with teachers (
        <a
          className={INLINE_LINK}
          href="https://doi.org/10.1007/978-3-032-29791-4_25"
          target="_blank"
          rel="noopener"
          aria-label="AI-Human Synergy, Springer CCIS 2026 (opens in new tab)"
        >
          Springer CCIS 2026
        </a>
        ). My colleagues wrote them, including our founder and my own product manager. My
        part is the engineering.
      </>
    ),
    bullets: [
      <>
        <b>
          I took the AI Teacher Coach from a web app to an installable PWA, then built the
          Android app in React Native and shipped it to the Play Store
        </b>
        , all of it myself. Around <b>200 teachers</b> now record about{' '}
        <b>400 classes a week</b> on it. Before this, judging how a teacher taught meant a
        mentor sitting through the whole class — a sixty-minute class cost a mentor sixty
        minutes, and it only happened when a mentor was free. Feedback now comes back in{' '}
        <b>five to ten minutes</b>, with nobody in the room.
      </>,
      <>
        Eight of the ten products used to feel like eight different apps — a button that
        looked one way here and another way there, and logging into a second product meant
        logging in all over again. I pulled the repeated pieces into{' '}
        <b>one shared component library</b> and built a <b>single login</b> that checks a
        user&rsquo;s role to decide which of the eight they can open.
      </>,
      <>
        I built the portfolio portal end to end, web and Android.{' '}
        <b>300+ students</b> keep a public website of their best work on it, adding up to{' '}
        <b>5,000+ submissions a month</b>, and an AI assessor reads the finished portfolio
        and reports on how their skills are developing, quoting their own work as evidence.
        A submission that fails retries on its own, and a job that runs twice saves the
        result once, not twice.
      </>,
      <>
        Two pieces of Sakhee are mine. One is the school calendar —
        terms, holidays, timetables — which I later moved into its own service, so the rest
        of the platform asks it instead of every app keeping its own copy of the dates. The
        other is the Google Drive link: a teacher&rsquo;s files sync both ways with every
        version kept, and while they are still typing it waits for a pause before saving. An
        hour of editing leaves one version, not forty. The build and deploy pipelines for our
        four services are mine too.
      </>,
      <>
        A state authority is having a platform built to check school quality, and three of us
        built it. I built the front end: signing in, a different dashboard for each kind of
        user, forms that save as you fill them so a bad connection does not cost an hour of
        work, a calendar of what is due, and the school report pages. A colleague wrote the
        part that does the scoring.
      </>,
      <>
        In the <b>50+ rural schools</b> where the connection drops several times a day, class
        recordings were going missing. I built the offline-safe recording twice, once for each
        app. The PWA saves a recording in the browser first, the Android app saves it on the
        device, and both upload in order once the signal returns. A second problem was quieter
        and worse: on Android, unsaved audio was being deleted before it had gone anywhere,
        and nobody reported it, because nobody knew it had happened. Recordings were not failing
        to upload — they were gone before the upload was ever attempted. I traced it, and
        every file now has to prove it exists before anything writes over it.
      </>,
      <>
        I build whole products here too. The institute&rsquo;s new website is mine end
        to end, still in progress: <b>14 pages</b> and an admin area where staff edit their
        own content, with a draft kept separate from what the public sees so a half-finished
        edit never goes out. There is a second one, a content platform for a state education
        department, where I am the only engineer.
      </>,
    ],
    /* Mirrors the "Technologies:" line for this role on the résumé, grouped
     * language → frontend → backend → data → deploy → testing, plus the three
     * the résumé omits but the bullets above earn: React Native (the Play
     * Store app), IndexedDB (the offline recording) and Microservices (the
     * calendar moved out to its own service). */
    tags: [
      'TypeScript',
      'Python',
      'React',
      'React Native',
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'Redis',
      'IndexedDB',
      'Docker',
      'GitHub Actions',
      'Google Cloud Run',
      'Vercel',
      'Cypress',
      'Sentry',
      'Microservices',
      'Monorepo',
    ],
  },
  {
    dates: 'May 2023 — Sep 2024',
    company: 'Nuveb',
    meta: ['Full-Stack Developer', 'Open OTT network for creators', 'Bengaluru, India'],
    summary:
      'I built the creator side of a video platform — video uploads, scheduling and payments — on Next.js and TypeScript, over a Go backend, and worked on the OTT mobile app in React Native. A good part of the job was making pages that already worked load faster.',
    bullets: [
      <>
        Pages were taking <b>8.5 seconds</b> to load for <b>50,000+ visitors a month</b>. The
        browse pages were rebuilding themselves on every request, for content that barely
        changed. I moved those to pre-built pages, keeping the rebuild only where the page
        was personal to the user. Load time came down to <b>2.5 seconds</b>.
      </>,
      <>
        I profiled the image requests, which sat at <b>3.2 seconds</b> across{' '}
        <b>10,000+ items</b>, and the resizing step was the cost. Moving that work to the
        server brought them down to <b>1.9 seconds</b>.
      </>,
      <>
        The platform went from no creators to <b>10,000+</b> while I was there, on a creator
        portal that handled video uploads, scheduling, payments and the REST APIs behind all
        of it.
      </>,
    ],
    /* Not "Go microservices": the Go services were the team's, and consuming
     * their endpoints is REST API work, not Go work. The summary already says
     * the backend was Go, which is the honest way to carry that context. */
    tags: [
      'TypeScript',
      'React',
      'React Native',
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Node.js',
      'REST APIs',
      'Sharp',
      'GitHub Actions',
      'Google Cloud Run',
      'Cypress',
      'Sentry',
    ],
  },
];

export const communityIntro =
  'I have been on both sides of the same programme inside a year — a contributor in January, a mentor from June. Mentoring turned out to be the harder job.';

/* Every number and link here resolves to something a reader can open. Projects
 * without a verified repo carry no count and no link rather than a guess. */
export const community: CommunityEntry[] = [
  {
    dates: 'Jun 2026 — Present',
    org: 'Social Summer of Code',
    meta: ['Mentor', 'Two projects', '41 contributors'],
    summary: (
      <>
        Most of my time goes into the tasks, not the code. A task has to be written well
        enough that a stranger can pick it up, build the right thing, and finish it without
        needing me to explain it twice.
      </>
    ),
    projects: [
      {
        name: 'EduFlow AI',
        stat: '23 contributors · around 100 open tasks',
        blurb: 'A study platform the group is building out.',
        did: 'On the harder tasks, I ask the contributor to write down their approach and the user flow before they start building.',
        url: 'https://github.com/prabhakarshukla/EduFlow-AI',
      },
      {
        name: 'VidyAI++ (jai3546/AI_ROCKERS)',
        stat: '23 contributors · around 68 open tasks',
        blurb: 'An AI tutoring app the group is cleaning up.',
        did: 'I wrote 5 of those tasks myself: a missing import that crashed the app, old pages still being served after a new release, 44 type errors the build was ignoring, and a build that fails when one database setting is missing.',
        url: 'https://github.com/jai3546/AI_ROCKERS',
      },
    ],
    /* Stack per the LinkedIn entry, plus the one word that says what the role
     * actually was — the code matters less here than the mentoring. */
    tags: ['TypeScript', 'React', 'Git', 'GitHub', 'Mentoring'],
  },
  {
    dates: 'Jan — Mar 2026',
    org: 'Social Winter of Code',
    meta: ['Contributor', 'Two projects', '2 PRs merged'],
    summary: (
      <>
        On AlgoFi I started on a beginner-tagged task and ended up on a harder one. Both
        projects were someone else&rsquo;s codebase, which is most of what this programme
        actually teaches.
      </>
    ),
    projects: [
      {
        name: 'AlgoFi',
        stat: '11 contributors · 2 pull requests merged',
        blurb: 'A marketplace for digital collectibles.',
        did: 'I built the dark and light theme for the whole app and made the choice survive a reload — 11 files, +419/−226.',
        url: 'https://github.com/denshaw-09/AlgoFi',
      },
      {
        name: 'BrowsePing',
        stat: '5 contributors · still open for review',
        blurb: 'A browser extension for browsing together.',
        did: 'I added the live typing indicators — 8 files, +365/−123 over 6 commits — and broke their dashboard plan into five smaller tasks other people could pick up.',
        url: 'https://github.com/browseping/browser-extension',
      },
    ],
    tags: ['JavaScript', 'React', 'CSS', 'Tailwind CSS'],
  },
];

export const about = {
  statement:
    'Losing a teacher’s class recording is the worst thing this software can do.',
  p1: 'I start with what breaks. The failures I trust least are the quiet ones — nothing shows an error, nobody files a report, because nobody knows anything went wrong. A file disappears. Or a job runs twice and quietly pays twice, and the only sign is a number that does not add up three weeks later. In two of the products above, I built it so the same message arriving twice cannot do the work twice, instead of just writing a test and hoping.',
  p2: 'The decisions I am proud of are mostly the ones where I gave something up. A feature cut because the version that would have held was out of budget. An extra layer kept because a fast test run is worth more than a tidy one. What I want next is a product company, in India or abroad, where I own a feature all the way down — the screen, the API, and the database under it — for real users on bad connections. I came into engineering from a mathematics degree and learned full stack development at Masai. The weekend MCA at IIIT Ranchi is me going back for the computer science fundamentals, the parts I picked up on the job and want to know properly.',
  rail: [
    { label: 'Based in', value: 'Mumbai, India' },
    {
      label: 'Focus',
      value: 'Full stack · AI · System design · DSA',
      sub: 'TypeScript and Python · Next.js, FastAPI, PostgreSQL',
    },
    /* Sits directly under Focus on purpose: Focus names DSA, this row is the
     * number behind it. Same reason Open source follows — it backs the rest. */
    {
      label: 'DSA',
      value: '1,616 LeetCode contest rating, top 22%',
      sub: '200+ problems solved',
    },
    {
      label: 'Writing',
      value: 'System design, databases and DSA',
      sub: 'Posts on LinkedIn, in plain language',
    },
    {
      label: 'Open source',
      value: 'SSoC 2026 mentor · SWoC 2026 contributor',
      sub: 'EduFlow AI · VidyAI++ · AlgoFi · BrowsePing',
    },
    /* Read top to bottom these three are the route into engineering, newest
     * first: maths degree → Masai → three years shipping → back for the CS
     * degree. Masai is the step that explains the jump; without it the page
     * goes from a maths graduate to a software engineer with no bridge. */
    {
      label: 'Now',
      value: 'MCA, IIIT Ranchi',
      sub: '2026–2028 · weekend · computer science fundamentals',
    },
    {
      label: 'Retrained',
      value: 'Masai School',
      sub: 'Full stack web development · 2022–2023',
    },
    {
      label: 'Before',
      value: 'B.Sc. Mathematics (Hons.)',
      sub: 'Munger University · 2019–2022',
    },
  ] satisfies RailRow[],
};

export const toolkitIntro =
  'The tools I reach for most, listed plainly, with no ratings and no percentages.';

export const toolkit: ToolkitRow[] = [
  {
    num: '01',
    label: 'Building interfaces',
    tools: 'Next.js · React · React Native',
    note: 'Web and Android apps that share one API behind them, including the ones that have to keep working when the connection does not.',
  },
  {
    num: '02',
    label: 'Building services',
    tools: 'FastAPI · Node.js · Python',
    note: 'APIs, and the background workers that do the slow jobs. When these call an AI model, the answer has to come back in a fixed shape, or the call fails loudly instead of quietly passing something broken along.',
  },
  {
    num: '03',
    label: 'Working with data',
    tools: 'PostgreSQL · Redis · Firestore · IndexedDB',
    note: 'Databases I design myself, queues for the slow jobs, and storage on the device that catches up with the server once it can reach it.',
  },
  {
    num: '04',
    label: 'Shipping & maintaining',
    tools: 'Docker · GCP Cloud Run · Vercel · GitHub Actions',
    note: 'The app ships as a container, goes out to a few schools before the rest, and the tests have to pass before any of it moves.',
  },
  {
    num: '05',
    label: 'Workflow',
    tools: 'Playwright · pytest · Git · code review',
    note: 'Tests that drive the real app in a browser, with its own API answers faked, so a failure means my code broke and not somebody else’s server. Small changes, and code review that actually reads the change.',
  },
];

export const LANGUAGES = 'TypeScript · Python · JavaScript · SQL';

export const contact = {
  title: 'Tell me what you are building',
  support:
    'I am looking for a Software Engineer II or full stack role where I can build reliable products and work on AI-backed workflows. I am happy to relocate. Email is the fastest way to reach me, and I reply to everything that lands there.',
};

export const COLOPHON = 'Set in Syne, Instrument Sans & Space Mono.';
