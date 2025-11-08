import img1 from "./images/tour-1.jpeg"
import img2 from "./images/tour-2.jpeg"
import img3 from "./images/tour-3.jpeg"

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-instagram" },
];


export const tourData=[
  {
    id:1,
    image: img1,
    tourdate:"August 26th, 2020",
    title:"Tibet Adventure",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis." ,
    location:"china",
    duration:"6 days",
    price: "$2100",
  },
  {
    id:2,
    image: img2,
    tourdate:"october 1th, 2020",
    title:"best of java",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location:"indonesia",
    duration:"11 days",
    price: "$1400",
  },
  {
    id:3,
    image: img3,
    tourdate:"september 15th, 2020",
    title:"explore hong kong",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location:"hong kong",
    duration:"8 days",
    price: "$5000",
  },

]