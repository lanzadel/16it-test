const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    reaction: "",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    reaction: "",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    reaction: "",
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    reaction: "",
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    reaction: "",
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    reaction: "",
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 1,
    dislikes: 32,
    reaction: "",
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    reaction: "",
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    reaction: "",
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    reaction: "",
  },

  {
    id: "11",
    title: "Unchained",
    category: "Drame",
    likes: 5,
    dislikes: 1,
    reaction: "",
  },

  {
    id: "12",
    title: "Interstellar",
    category: "Thriller",
    likes: 2,
    dislikes: 0,
    reaction: "",
  },

  {
    id: "13",
    title: "Up",
    category: "Animation",
    likes: 6,
    dislikes: 4,
    reaction: "",
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
