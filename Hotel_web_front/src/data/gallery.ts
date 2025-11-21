export type GalleryPhoto = {
  id: string;
  src: string;
  caption: string;
  category: string;
};

import sunrise from "../assets/picture/other/sunrise.png";
import sunset from "../assets/picture/other/sunset.jpg";
import roof from "../assets/picture/other/roof.jpg";
import frontPic from "../assets/picture/other/front_pic.jpg";
import pancake from "../assets/picture/other/pancake.jpg";
import khajaSet from "../assets/picture/other/khaja_set.jpg";
import room3 from "../assets/picture/other/r-3.jpg";
import room5 from "../assets/picture/other/pic_r5_1.jpg";
import room7 from "../assets/picture/other/r-7.jpg";

export const defaultGalleryPhotos: GalleryPhoto[] = [
  {
    id: "room-heritage",
    src: room3,
    caption: "Tamang Heritage Room—family-ready comfort with rustic charm.",
    category: "Rooms",
  },
  {
    id: "room-himalayan",
    src: room5,
    caption: "Himalayan Breeze—balcony mornings with king-size ease.",
    category: "Rooms",
  },
  {
    id: "room-rooftop",
    src: room7,
    caption: "Mountain View rooftop loft with 360° sunrise and sunsets.",
    category: "Rooms",
  },
  {
    id: "nature-sunrise",
    src: sunrise,
    caption: "Golden sunrise spilling over Dhulikhel’s layered ridges.",
    category: "Nature",
  },
  {
    id: "nature-sunset",
    src: sunset,
    caption: "Crimson sunset from the rooftop deck—perfect golden hour.",
    category: "Nature",
  },
  {
    id: "nature-rooftop",
    src: roof,
    caption: "Open terrace draped in prayer flags and forest breeze.",
    category: "Nature",
  },
  {
    id: "food-breakfast",
    src: pancake,
    caption: "Homemade millet pancakes with local honey drizzle.",
    category: "Food",
  },
  {
    id: "food-khaja",
    src: khajaSet,
    caption: "Traditional Tamang khaja set—seasonal and organic.",
    category: "Food",
  },
  {
    id: "people-community",
    src: frontPic,
    caption: "Community gatherings and storytelling by the fireplace.",
    category: "People",
  },
];

