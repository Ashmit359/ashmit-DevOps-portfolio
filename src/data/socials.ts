export interface Social {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "mail" | "file-text";
}

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashmit-sinha-372115b0/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Ashmit359",
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:ashmitsinha359@gmail.com",
    icon: "mail",
  },
  {
    label: "Resume",
    href: "/resume",
    icon: "file-text",
  },
];
