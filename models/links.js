const links = [
  {
    title: "Casey Dean | Dunderpedia: The Office Wiki | Fandom",
    url: "https://theoffice.fandom.com/wiki/Casey_Dean",
  },
  {
    title: "Dunder Mifflin Rochester | Dunderpedia: The Office Wiki | Fandom",
    url: "https://theoffice.fandom.com/wiki/Dunder_Mifflin_Rochester",
  },
  {
    title: "Regional Manager’s Office | Dunderpedia: The Office Wiki | Fandom",
    url: "https://theoffice.fandom.com/wiki/Regional_Manager%E2%80%99s_Office",
  },
  {
    title: "Phyllis' Wedding Quotes | Dunderpedia: The Office Wiki | Fandom",
    url: "https://theoffice.fandom.com/wiki/Phyllis%27_Wedding_Quotes",
  },
  {
    title: "Gay Witch Hunt Quotes | Dunderpedia: The Office Wiki | Fandom",
    url: "https://theoffice.fandom.com/wiki/Gay_Witch_Hunt_Quotes",
  },
];

module.exports = links;

const getTitle=()=>{
  const titleArray = [];
for(let i = 0; i < links.length; i++){
const inputString = links[i].title;
const index = inputString.indexOf("|");
if (index !== -1) {
  const outputString = inputString.substring(0, index);
  titleArray.push(outputString);
}
}
return titleArray
}
const title = getTitle()

