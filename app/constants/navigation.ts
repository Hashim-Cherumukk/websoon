// Centralized nav config — single source of truth for header/footer links.
// Add/remove/reorder items here; components just map over the array.

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

// Primary call-to-action, kept separate since it renders as a button, not a link
export const ctaItem: NavItem = {
  label: "Book a Call",
  href: "#contact",
};