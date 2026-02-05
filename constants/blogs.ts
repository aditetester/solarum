export type Blog = {
  id: string;
  title: string;
  desc: string;
  image: any;
  author: string;
  authorImage: any;
  authorPosition: string;
  date: string;
  time: string;
};

export const BLOGS: Blog[] = [
  {
    id: "1",
    title: "Solar for a Better Tomorrow",
    desc: "Solar panels convert sunlight into electricity helping reduce power bills.",
    image: require("@/assets/images/service/blog-1.png"),
    author: "Julius Cooper",
    authorImage: require("@/assets/images/panel/people-1.png"),
    authorPosition: "CEO, Solarum",
    date: "25 Dec, 2025",
    time: "1 hr ago",
  },
  {
    id: "2",
    title: "Go Green with Solar Energy",
    desc: "Solar power provides renewable and sustainable energy for homes.",
    image: require("@/assets/images/service/blog-2.png"),
    author: "lusi jofer",
    authorImage: require("@/assets/images/panel/people-2.png"),
    authorPosition: "Manager, Solarum",
    date: "24 Dec, 2025",
    time: "3 hr ago",
  },
  {
    id: "3",
    title: "Save More with Solar",
    desc: "Switch to solar and enjoy long-term savings with clean energy.",
    image: require("@/assets/images/service/blog-3.png"),
    author: "john doe",
    authorImage: require("@/assets/images/panel/people-3.png"),
    authorPosition: "Engineer, Solarum",
    date: "23 Dec, 2025",
    time: "1 day ago",
  },
];
