import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // Grouping into 3 tiers (outer, middle, inner) for clarity
  const orbit1 = ["angular", "react", "typescript", "javascript", "nodejs"];

  const orbit2 = [
    "tailwindcss",
    "chakraui",
    "zustand",
    "reactquery",
    "mongodb",
  ];

  const orbit3 = ["webpack", "vite", "parcel", "html5", "css3", "git"];

  return (
    <div className="relative flex h-[20rem] w-full flex-col items-center justify-center">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={45} radius={160} speed={0.8}>
        {orbit1.map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>

      {/* Middle Orbit */}
      <OrbitingCircles iconSize={35} radius={120} speed={1.2} reverse>
        {orbit2.map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles iconSize={30} radius={80} speed={1.5}>
        {orbit3.map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ name }) => {
  // Base URL for devicon icons
  const base = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

  // Custom logos for specific technologies
  const customLogos = {
    chakraui: "https://cdn.simpleicons.org/chakraui",
    reactquery: "https://cdn.simpleicons.org/reactquery",
    parcel: "https://parceljs.org/avatar.844b34b7.avif",
    nodejs: "https://cdn.simpleicons.org/node.js",
  };

  // Determine the icon source
  const src = customLogos[name]
    ? customLogos[name]
    : `${base}/${name}/${name}-original.svg`;

  return (
    <img
      src={src}
      alt={name}
      className="duration-200 rounded-sm hover:scale-110"
      onError={(e) => {
        // Fallback text if image fails
        e.currentTarget.outerHTML = `<span class="text-xs text-gray-400">${name}</span>`;
      }}
    />
  );
};
