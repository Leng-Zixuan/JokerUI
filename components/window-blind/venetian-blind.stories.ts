import VenetianBlind from "./venetian-blind";
import VenetianBlindItem from "./venetian-blind";

import img1 from './img/IMG1.jpg';
import img2 from './img/IMG2.jpg';
import img3 from './img/IMG3.jpg';
import img4 from './img/IMG4.jpg';


export default {
  title: "Components/VenetianBlind",
  component: VenetianBlind,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: VenetianBlindItem,
  },
};


export const Primary = {
  args: {
    items: [
      {
        imgSrc: img1,
        label: '性感清纯美女'
      },
      {
        imgSrc: img2,
        label: '性感清纯美女',
      },
      {
        imgSrc: img3,
        label: '性感清纯美女',
      },
      {
        imgSrc: img4,
        label: '性感清纯美女',
      }
    ]
  },
};

export const Secondary = {
  args: {
    
  },
};

export const Large = {
  args: {
    
  },
};

export const Small = {
  args: {
    
  },
};
