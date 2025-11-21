export type Room = {
  id: number;
  slug: string;
  name: string;
  price: string;
  description: string;
  longDescription: string;
  size: string;
  capacity: string;
  bedType: string;
  view: string;
  amenities: string[];
  policies: string[];
  images: string[];
};

import img1a from "../assets/picture/other/r-3.jpg";
import img1b from "../assets/picture/room3/pic_r3_2.jpg";
import img1c from "../assets/picture/room3/t_r3_bath_1.jpg";

import img2a from "../assets/picture/other/pic_r5_1.jpg";
import img2b from "../assets/picture/room4/pic_r4_2.jpg";
import img2c from "../assets/picture/other/roofpic.jpg";

import img3a from "../assets/picture/other/r-7.jpg";
import img3b from "../assets/picture/room7/IMG_5745.jpg";
import img3c from "../assets/picture/other/front_pic.jpg";

export const rooms: Room[] = [
  {
    id: 1,
    slug: "tamang-heritage-room",
    name: "Tamang Heritage Room",
    price: "NPR 11,500 / night",
    description:
      "Spacious family suite named after the Tamang community—perfect for groups who love staying together.",
    longDescription:
      "This roomy suite comfortably sleeps four adults and offers mountain-facing windows that flood the space with soft morning light. Rustic timber beams, handmade rugs, and a small reading corner make it ideal for family reunions or long-stay retreats.",
    size: "48 m²",
    capacity: "4 guests",
    bedType: "2 Queen beds",
    view: "Terraced hills & village courtyards",
    amenities: [
      "Hearty breakfast with organic produce",
      "Attached lounge with board games",
      "Private balcony with seating",
      "Complimentary Wi-Fi",
      "Filtered drinking water",
    ],
    policies: ["Check-in after 1:00 PM", "Check-out before 11:00 AM", "Pets on request", "No loud music after 9 PM"],
    images: [img1a, img1b, img1c],
  },
  {
    id: 2,
    slug: "himalayan-breeze-room",
    name: "Himalayan Breeze Room",
    price: "NPR 14,000 / night",
    description:
      "Balcony-facing room that captures the cool mountain breeze and frames the snow line during winter.",
    longDescription:
      "Equipped with a plush king bed, a cloud-like sofa, and an attached bathroom, the Himalayan Breeze Room is curated for slow mornings and balcony breakfasts. Enjoy front-row seats to sunrise colors and drifting clouds.",
    size: "42 m²",
    capacity: "2 adults + 1 child",
    bedType: "King bed",
    view: "Direct Himalayan range",
    amenities: ["Heated shower", "Balcony daybed", "Tea & coffee bar", "Room service", "Yoga mat set"],
    policies: ["Check-in after 2:00 PM", "Check-out before 11:00 AM", "No smoking inside", "Child-friendly"],
    images: [img2a, img2b, img2c],
  },
  {
    id: 3,
    slug: "mountain-view-room",
    name: "Mountain View Room",
    price: "NPR 16,200 / night",
    description:
      "Rooftop loft with 360° views—watch both sunrise and sunset, then unwind under a blanket of stars.",
    longDescription:
      "This airy loft opens to a private terrace with outdoor seating and a telescope. Ideal for photographers, writers, and couples seeking a dreamy escape. The bathroom is external yet private, located just a few steps from the room.",
    size: "38 m² + terrace",
    capacity: "3 guests",
    bedType: "Queen bed + daybed",
    view: "Panoramic mountain & valley",
    amenities: [
      "Private rooftop deck",
      "Telescope for night sky",
      "Complimentary hot water bags",
      "Curated music speaker",
      "Daily housekeeping",
    ],
    policies: ["Check-in after 2:00 PM", "Check-out before 11:00 AM", "Not suitable for toddlers", "No parties"],
    images: [img3a, img3b, img3c],
  },
];

export const getRoomById = (id: number) => rooms.find((room) => room.id === id);

