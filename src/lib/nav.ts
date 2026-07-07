export type NavLink = {
  label: string;
  navLabel: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", navLabel: "Home", href: "/" },
  { label: "About", navLabel: "About", href: "/about" },
  { label: "Learn About PCOS", navLabel: "Learn", href: "/learn" },
  { label: "National Survey", navLabel: "Survey", href: "/survey" },
  { label: "Insights Dashboard", navLabel: "Dashboard", href: "/dashboard" },
  { label: "Voices Behind the Data", navLabel: "Voices", href: "/voices" },
  { label: "Get Involved", navLabel: "Get Involved", href: "/get-involved" },
];
