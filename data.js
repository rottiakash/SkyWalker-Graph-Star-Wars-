let data = [
  { id: "1", name: "Shmi Skywalker", son: "3" },
  { id: "2", name: "Cliegg Lars", son: "3" },
  {
    id: "3",
    name: "Anikin Skywalker",
    title: "Darth Vader",
    son: "5",
    daughter: "8",
    wife: "4",
  },
  {
    id: "4",
    name: "Padme Amidala",
    title: "Queen Of Naboo",
    husband: "3",
    son: "5",
    daughter: "8",
  },
  {
    id: "5",
    name: "Luke Skywalker",
    title: "Jedi Master",
    gaurdian: ["6", "7"],
    sister: "8",
  },
  { id: "6", name: "Beru Lars" },
  { id: "7", name: "Owen Lars" },
  {
    id: "8",
    name: "Leia Organa",
    title: "Princess of Alderaan",
    son: "12",
    gaurdian: ["9", "10"],
  },
  { id: "9", name: "Bail Organa" },
  { id: "10", name: "Brehna Organa" },
  {
    id: "11",
    name: "Han Solo",
    title: "Rebel Alliance",
    son: "12",
    wife: "8",
  },
  {
    id: "12",
    name: "Ben Solo",
    title: "Kylo Ren",
  },
  {
    id: "13",
    name: "Rey Skywalker",
    title: "The last Jedi",
    mentors: ["5", "8"],
  },
];

module.exports = data;
