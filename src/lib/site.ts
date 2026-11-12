export type Sport = {
  slug: string;
  name: string;
  label: string;
  description: string;
  image: string;
  accent: string;
};

export const sports: Sport[] = [
  {
    slug: "cricket",
    name: "Cricket",
    label: "Bat, ball & big moments",
    description:
      "Follow the rhythm of cricket, from the first ball to the final over. Find stories, fixture notes and a fresh perspective on the game.",
    image: "/images/cricket.svg",
    accent: "lime",
  },
  {
    slug: "football",
    name: "Football",
    label: "Every match has a story",
    description:
      "Stay close to the world's game with thoughtful match previews, team stories and the details fans love to discuss.",
    image: "/images/football.svg",
    accent: "blue",
  },
  {
    slug: "tennis",
    name: "Tennis",
    label: "Rallies worth remembering",
    description:
      "Explore the people, rivalries and defining points that make every tennis court feel like a stage.",
    image: "/images/tennis.svg",
    accent: "orange",
  },
  {
    slug: "basketball",
    name: "Basketball",
    label: "All heart, all court",
    description:
      "From fast breaks to buzzer beaters, discover the stories and moments that make basketball an electric team sport.",
    image: "/images/basketball.svg",
    accent: "orange",
  },
  {
    slug: "volleyball",
    name: "Volleyball",
    label: "Up for every rally",
    description:
      "Celebrate the teamwork, quick reactions and unforgettable rallies behind every volleyball match.",
    image: "/images/volleyball.svg",
    accent: "blue",
  },
  {
    slug: "athletics",
    name: "Athletics",
    label: "Every second counts",
    description:
      "Meet the athletes and relive the moments shaped by dedication, pace and the pursuit of a personal best.",
    image: "/images/athletics.svg",
    accent: "lime",
  },
];
