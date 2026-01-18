export interface NavItem {
    href: string;
    label: string;
}

export interface SocialLink {
    name: string;
    url: string;
}

export const navbarItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
];

export const socialLinks = {
    GitHub: {
        name: "GitHub",
        url: "https://www.github.com/amanshams",
    },
    LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amanullahshams/",
    },
    email: {
        name: "Send Email",
        url: "mailto:amanullahshams.dev@gmail.com",
    },
};
