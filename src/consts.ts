export const USERNAME = "aruzdh";
export const EMAIL = "aruzdh@gmail.com";

export const SECTIONS = {
  HOME: "Home",
  PROJECTS: "Projects",
  ABOUT: "About",
  LIFE: "Life",
} as const;

export const TABS = Object.values(SECTIONS);

export const SOCIAL_MEDIA = {
  GITHUB: `https://github.com/${USERNAME}`,
  X: `https://x.com/${USERNAME}`,
  LEETCODE: `https://leetcode.com/u/${USERNAME}/`,
  LINKEDIN: `https://www.linkedin.com/in/${USERNAME}/`,
};

export const TECH_STACK = {
  CURRENT: ["Rust", "C", "C++", "Haskell", "Python", "Java", "TypeScript"],
  FUTURE: ["Zig", "Go", "OCaml"],
};

export const PAGE_TITLE = "Aru | A nerd CS"
