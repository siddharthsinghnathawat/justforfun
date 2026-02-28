// Custom icons for technologies not available in lucide-react

const IconProps = {
  className: "h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors",
};

export const ReactIcon = () => (
  <svg
    {...IconProps}
    viewBox="-10.5 -9.45 21 18.9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

export const NodeIcon = () => (
  <svg {...IconProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.25 6.311L10.375 2.5 4.5 6.311v7.625L6.438 15v-5.688L10.375 6.5l3.938 2.812V15l1.937-1.063v-7.625z"
      fill="currentColor"
    ></path>
    <path
      d="M12.313 16.313l-1.938 1.125L6.438 15l-1.938 1.063 5.875 3.812 5.875-3.812L14.25 15l-1.937 1.313z"
      fill="currentColor"
    ></path>
  </svg>
);

export const TypescriptIcon = () => (
  <svg {...IconProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.5 6.857h-9.857v11.571h2.414v-4.571h5.714v-2.286h-5.714V9.143h7.429v9.143h2.414V6.857zM4.5 18.429h7.429V6.857H4.5v11.572z"
      fill="currentColor"
    ></path>
  </svg>
);

export const TailwindIcon = () => (
  <svg {...IconProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 18.25c-3.443 0-6.25-2.807-6.25-6.25s2.807-6.25 6.25-6.25c3.443 0 6.25 2.807 6.25 6.25s-2.807 6.25-6.25 6.25zm-3.125-6.25c0 1.721 1.404 3.125 3.125 3.125s3.125-1.404 3.125-3.125c0-1.721-1.404-3.125-3.125-3.125s-3.125 1.404-3.125 3.125z"
      fill="currentColor"
    />
  </svg>
);
