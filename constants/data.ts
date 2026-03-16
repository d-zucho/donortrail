import { Nav_Link, TFeatureCard, THome_Data_Point } from '@/lib/types';

export const NAV_LINKS: Nav_Link[] = [
  {
    href: "/members",
    label: "Members",
  },
  {
    href: "/votes",
    label: "Votes",
  },
  {
    href: "/donors",
    label: "Donors",
  },
  {
    href: "/about",
    label: "About",
  },
];

export const HOME_DATA_POINTS: THome_Data_Point[] = [
  {
    stat: 535,
    description: "Congress members tracked"
  },
  {
    stat: 12400,
    description: "Votes tracked this session"
  },
  {
    stat: 98,
    description: "Donor categories analyzed"
  }
]

export const FEATURED_CARDS: TFeatureCard[] = [
  {
    title: "Money-Vote Connections",
    description: "Our algorithm surfaces statistically significant patterns between donation sources and voting behavior. The receipts are all there.",
    icon: "🔗",
    src: "/chain.png"
  },
  {
    title: "Donor Mapping",
    description: "See every major contribution, broken down by industry, PAC, and individual donor — updated with each FEC filing.",
    icon: "💰",
    src: "/cashbag.png"
  },
  {
    title: "Vote Tracking",
    description: "Every floor vote logged and searchable. Filter by topic, date, party line, or how it relates to a member's top donors.",
    icon: "🗳️",
    src: "/votebox.png"
  },
  {
    title: "Custom Alerts",
    description: "Follow any member, issue, or donor and get notified the moment something changes. Stay informed, not overwhelmed.",
    icon: "🔔",
    src: "/bell.png"
  },
  {
    title: "Visual Dashboard",
    description: "Intuitive charts and timelines that make complex financial data readable for anyone, not just policy wonks.",
    icon: "📊",
    src: "/bargraph.png"
  },
  {
    title: "Shareable Profiles",
    description: "Every member gets a public URL. Share their record on social media with one click — accountability travels far.",
    icon: "🌐" ,
    src: "/globe.png"
  }
]