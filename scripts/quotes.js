const quotes = [
  {
    quote:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    writer: "Linus Torvalds",
  },
  {
    quote:
      "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.",
    writer: "Larry Wall",
  },
  {
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    writer: "Bill Gates",
  },
  {
    quote:
      "Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success.",
    writer: "Tom DeMarco",
  },
  {
    quote:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    writer: "Donald E. Knuth",
  },
  {
    quote:
      "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.",
    writer: "Ted Nelson",
  },
  {
    quote:
      "I invented the term ‘Object-Oriented’, and I can tell you I did not have C++ in mind.",
    writer: "Alan Kay",
  },
  {
    quote:
      "In theory, theory and practice are the same. In practice, they’re not.",
    writer: "Yoggi Berra",
  },
  {
    quote:
      "Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    writer: "Antoine de Saint-Exupéry",
  },
  {
    quote: "Good design adds value faster than it adds cost.",
    writer: "Thomas C. Gale",
  },
];

const QUOTE = "quote";
const WRITER = "writer";

const quote = document.querySelector(".quote-box__quote");
const writer = document.querySelector(".quote-box__writer");

const choice_quote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = choice_quote[QUOTE];
writer.innerText = `- ${choice_quote[WRITER]}`;
