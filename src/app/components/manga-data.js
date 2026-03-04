// manga-data.js
// Add new pages here. faction must match a key in MANGA_FACTIONS below.

export const MANGA_FACTIONS = [
  { id: "all",       label: "All",       glowColor: "rgba(255,255,255,0.6)" },
  { id: "vinfernia", label: "VINFERNIA", glowColor: "rgba(248,113,113,0.7)" },
  { id: "vstar",     label: "VSTAR",     glowColor: "rgba(96,165,250,0.7)"  },
  { id: "lockhart",  label: "Lockhart",  glowColor: "rgba(167,243,208,0.6)" },
];

export const MANGA_SLIDES = [
  { id: 1, src: "/VINFERNIA/VINFERNIA/Dee/1 storyboard(1).jpg",         alt: "VINFERNIA Storyboard p.1", faction: "vinfernia" },
  { id: 2, src: "/VINFERNIA/VINFERNIA/Dee/3 storyboard 1(1).jpg",       alt: "VINFERNIA Storyboard p.2", faction: "lockhart" },
  { id: 3, src: "/VINFERNIA/VINFERNIA/Dee/3 storyboard 2(1).jpg",       alt: "VINFERNIA Storyboard p.3", faction: "lockhart" },
  { id: 4, src: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Manga_Pg1.png", alt: "Lockhart Manga p.1",       faction: "lockhart"  },
  { id: 5, src: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Manga_Pg2.png", alt: "Lockhart Manga p.2",       faction: "lockhart"  },
  { id: 6, src: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Manga_Pg3.png", alt: "Lockhart Manga p.3",       faction: "lockhart"  },
];