/**
 * Every brand-mutable string on the site lives here, so swapping the name,
 * domain or booking link touches one file and no layout code.
 *
 * COPY RULE: no periods, commas, hyphens, en dashes or em dashes in visible
 * copy. Sentences are written short enough that they do not need them.
 * Question marks and apostrophes are fine.
 *
 * HONESTY RULE: nothing in here claims work that has not happened. There are
 * no client names, no testimonials and no counted-up stats, because the whole
 * funnel rests on being the people who do not do that. The objections below
 * are things owners actually say on calls, and they do the job a testimonial
 * section would have done.
 */

export const site = {
  name: "Asaan Digital",
  /** The footer's giant bleed wordmark — one word reads better at that scale. */
  shortName: "Asaan",
  tagline: "Websites for home service pros",
  description:
    "We build fast websites for home service businesses anywhere in the world, and you talk to the person who builds it.",
  /** ⚠ Cal handle still needs to exist before launch. */
  bookingUrl: "https://cal.com/asaan-digital/15min",
  bookingLabel: "Book a 15 min call",
  email: "Faizan@asaandigital.online",
  serviceAreas: "Working with home service businesses worldwide",
  /** Label on the FAQ's answer bubble, rhyming with the chatbot demo above. */
  aiName: "Asaan AI",
} as const;

/**
 * In-page anchors, not routes — this is a single page. Previously pointed
 * at /work and /contact, neither of which exists, which would have 404'd
 * the moment anyone actually clicked the footer menu.
 */
export const nav = [
  { href: "#services", label: "What we do" },
  { href: "#process", label: "How it goes" },
  { href: "#faq", label: "FAQ" },
] as const;

/** Hero chips. What a sceptical owner needs in four words each. */
export const chips = ["Live in one week", "Fixed price", "You own it"] as const;

/**
 * The trust strip. Tools genuinely used, which is an honest version of the
 * logo wall every agency site runs. Not a client list and never labelled as
 * one.
 *
 * `icon` is a simple-icons slug, inlined at build time and shown monochrome.
 * `src` is a local file under public/logos for brands simple-icons does not
 * carry, masked to the same monochrome so it cannot drag its own colours in.
 * Anything with neither rides as a wordmark, which is the honest fallback:
 * drawing an approximation of someone else's logo is worse than typing their
 * name.
 *
 * Marks that simple-icons has dropped on trademark request (Codex, Lovable,
 * Bolt, Firecrawl) come from svgl.app, and Higgsfield's comes from its own
 * site, all stored locally so the page never calls out to a third party.
 */
export const tools = [
  { name: "Next.js", icon: "nextdotjs", src: null, url: "https://nextjs.org" },
  { name: "Claude", icon: "claude", src: null, url: "https://claude.com" },
  {
    name: "Codex",
    icon: null,
    src: "/logos/codex.svg",
    url: "https://openai.com/codex",
  },
  { name: "n8n", icon: "n8n", src: null, url: "https://n8n.io" },
  { name: "HubSpot", icon: "hubspot", src: null, url: "https://hubspot.com" },
  {
    name: "Lovable",
    icon: null,
    src: "/logos/lovable.svg",
    url: "https://lovable.dev",
  },
  { name: "Vercel", icon: "vercel", src: null, url: "https://vercel.com" },
  { name: "Modal", icon: "modal", src: null, url: "https://modal.com" },
  {
    name: "Higgsfield",
    icon: null,
    src: "/logos/higgsfield.svg",
    url: "https://higgsfield.ai",
  },
  { name: "Supabase", icon: "supabase", src: null, url: "https://supabase.com" },
  { name: "Figma", icon: "figma", src: null, url: "https://figma.com" },
  { name: "Bolt", icon: null, src: "/logos/bolt.svg", url: "https://bolt.new" },
  {
    name: "ElevenLabs",
    icon: "elevenlabs",
    src: null,
    url: "https://elevenlabs.io",
  },
  { name: "Airtable", icon: "airtable", src: null, url: "https://airtable.com" },
  {
    name: "Google Business Profile",
    icon: "google",
    src: null,
    url: "https://business.google.com",
  },
  { name: "Cal.com", icon: "caldotcom", src: null, url: "https://cal.com" },
  { name: "GitHub", icon: "github", src: null, url: "https://github.com" },
  {
    name: "Firecrawl",
    icon: null,
    src: "/logos/firecrawl.svg",
    url: "https://firecrawl.dev",
  },
] as const;

export const problem = {
  eyebrow: "The problem",
  heading: "Most shops lose the call before the phone rings",
  body: "Slow site with no service area listed and no way to book after six so by the time it loads he is already dialling someone else",
} as const;

/**
 * The about statement, set large and filled in character by character as it
 * scrolls. Kept to one sentence because the treatment only works on
 * something short enough to read while it is still filling.
 */
export const about = {
  eyebrow: "How we work",
  statement:
    "You see the mockup before you pay a cent, you own the domain from day one, and you can leave whenever you want.",
  body: "None of that is a promise you have to take on faith. It is just how the build is structured, so leaving well is always the easier option for us too.",
} as const;

/**
 * Six services on the landing page. There is no services route, so `detail`
 * is what the row reveals when it expands in place.
 *
 * `demo` names a proof that renders inside the opened row. A service that
 * can show itself working should, right where it is being described, rather
 * than in a separate section further down the page that a reader has to
 * connect back up for themselves.
 */
export const services = [
  {
    n: "01",
    title: "Websites",
    summary: "Five pages with your photos and your service area",
    demo: null,
    detail: [
      "Built around your trade and not a swapped template",
      "Loads fast on the phone in a driveway",
      "Booking that works at nine at night",
      "You own the site and the domain",
    ],
  },
  {
    n: "02",
    title: "Chatbots",
    summary: "Answers and books the job",
    demo: "chat",
    detail: [
      "Answers the five questions you keep answering",
      "Qualifies before it books",
      "Works on the site and on WhatsApp",
      "Hands over to you when it should",
    ],
  },
  {
    n: "03",
    title: "Automations",
    summary: "The busywork gone",
    demo: null,
    detail: [
      "Enquiry lands where you already look",
      "Follow ups that go out without you",
      "Quotes and invoices off the same job",
      "Only where it earns its keep",
    ],
  },
  {
    n: "04",
    title: "Voice agents",
    summary: "For busy shops",
    demo: null,
    detail: [
      "Picks up when you are under a house",
      "Takes the job and the address",
      "Books straight into the calendar",
      "We will tell you if your volume does not justify it",
    ],
  },
  {
    n: "05",
    title: "Graphics design",
    summary: "Logos brand kits and signage",
    demo: null,
    detail: [
      "Logo and brand kit",
      "Truck and yard signage",
      "Social and ad creative",
      "Files you keep",
    ],
  },
  {
    n: "06",
    title: "AI content",
    summary: "Ads and short films",
    demo: null,
    detail: [
      "Ad creative and video ads",
      "Short films for the brand",
      "Voiceover and editing",
      "Made at a pace a shop can afford",
    ],
  },
] as const;

/** One week from call to live. */
export const process = [
  {
    n: "01",
    title: "The call",
    body: "Fifteen minutes and we ask what you do and where you work",
    when: "Day 1",
  },
  {
    n: "02",
    title: "A mockup",
    body: "A rough concept of your site before you pay anything",
    when: "Day 2",
  },
  {
    n: "03",
    title: "We build",
    body: "Your photos your service area and your words",
    when: "Day 4",
  },
  {
    n: "04",
    title: "Live",
    body: "Seven days from the call and it is yours to keep",
    when: "Day 7",
  },
] as const;

export const terms = [
  "Fixed scope agreed up front",
  "Two rounds of changes",
  "You own the site",
  "Leave whenever",
] as const;

/** Honest checkable contrasts. No competitor is named. */
export const comparison = {
  them: [
    "Same template with a swapped logo",
    "Locked into their platform",
    "A junior does the work after you sign",
    "Unlimited revisions then scope creep",
    "Weeks of silence",
  ],
  us: [
    "Layout built around your trade",
    "You own the site and the domain",
    "You talk to whoever builds it",
    "Fixed scope and two rounds",
    "Live in one week",
  ],
} as const;

/** What one booked job is worth, which is the whole pricing argument. */
export const jobValue = {
  label: "What one job is worth",
  value: "$5,400",
  body: "A single system replacement booked through the site covers the build several times over and the site keeps working after that",
} as const;

/**
 * A compressed recap of the process timeline, ending on the ROI rather than
 * on go live. This deliberately repeats `process` above in shorter form,
 * because that section is about what happens and this one is about why it
 * is worth it, and the last row is the number that answers that.
 */
export const timelineRows = [
  {
    label: "Call booked",
    detail: "You tell us what you do and where you work",
    day: "Day 1",
  },
  {
    label: "Mockup sent",
    detail: "A rough concept before we ask for a cent",
    day: "Day 2",
  },
  {
    label: "Site goes live",
    detail: "Your photos your service area your words",
    day: "Day 7",
  },
  {
    label: "First job booked",
    detail: "One system replacement through the site",
    day: "Week 3",
  },
] as const;

/** A believable exchange, not a testimonial. Shows the update habit itself. */
export const updateThread = [
  { from: "us", text: "Hey the mockup is ready" },
  { from: "us", text: "Tell us if you want anything changed" },
  { from: "them", text: "Can we swap the header photo?" },
  { from: "us", text: "Done Anything else?" },
] as const;

/**
 * Objections we actually hear on calls, and NOT testimonials. We have no
 * clients yet so inventing praise would break the honesty the funnel runs on.
 * Answered objections convert better than praise anyway and this is true
 * today.
 */
export const objections = [
  {
    quote: "The last guy took my money and I never heard from him again",
    answer:
      "You see a mockup before you pay a full invoice and you talk to whoever builds it",
  },
  {
    quote: "I already have a website",
    answer:
      "Most people we call do and the question is whether it loads fast and lets someone book at nine at night",
  },
  {
    quote: "I don't have time for this",
    answer:
      "Fifteen minutes on the phone then about twenty minutes sending photos and your service list",
  },
  {
    quote: "What if I want to leave later?",
    answer:
      "You own the site and the domain so it goes with you and there is nothing to hold hostage",
  },
] as const;

export const founders = [
  {
    name: "Faizan Raza",
    role: "Founder",
    line: "Builds the sites",
    photo: "/team/faizan-raza.jpg",
  },
  {
    name: "Zeeshan Raza",
    role: "Co Founder",
    line: "You will speak to first",
    photo: "/team/zeeshan-raza.jpg",
  },
] as const;

export const faqs = [
  {
    q: "Do I actually own it?",
    a: "Yes it is yours on your domain and it goes with you if you ever leave us",
  },
  {
    q: "What if I don't like what you build?",
    a: "You see a mockup before you pay anything and you get two rounds of changes on the real build",
  },
  {
    q: "I already have a website",
    a: "Most people we call do and the question is whether it loads fast and lets someone book at nine at night",
  },
  {
    q: "How much of my time does this take?",
    a: "The call plus about twenty minutes sending us photos and your service list and we write the rest",
  },
] as const;

/**
 * Chatbot demo script. Runs the full arc from problem to booked appointment,
 * because a two line exchange does not show the thing that matters, which is
 * that it closes without the owner touching the phone. Labelled a
 * demonstration on the page.
 */
export const chatScript = [
  { from: "them", text: "hi my AC is blowing warm air" },
  { from: "us", text: "Sorry to hear it Is the outdoor unit running or silent?" },
  { from: "them", text: "its running but the air inside is warm" },
  {
    from: "us",
    text: "Sounds like low refrigerant or a frozen coil and both are same day fixes",
  },
  { from: "them", text: "how much am i looking at" },
  { from: "us", text: "Diagnostic is $89 and it comes off the repair" },
  { from: "them", text: "ok can someone come today" },
  { from: "us", text: "We have 4:15pm or 6:40pm open Which suits?" },
  { from: "them", text: "6:40 please" },
  { from: "us", text: "Booked for 6:40pm What is the address?" },
  { from: "them", text: "214 Oak St" },
  { from: "us", text: "Got it and Mike will text when he is 20 minutes out 👍" },
] as const;
