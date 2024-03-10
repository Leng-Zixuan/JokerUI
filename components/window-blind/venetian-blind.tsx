import React, { FC, HTMLAttributes } from "react";

import "./venetian-blind.scss";

export interface VenetianBlindItem {
    imgSrc: string;
    title: string | undefined;
    label: string | undefined;
}

export interface WindowBlindProps extends HTMLAttributes<HTMLDivElement> {
    items: VenetianBlindItem[] | undefined | null;
}

const VenetianBlind: FC<WindowBlindProps> = (props) => {

  const { className, items } = props

  return (
    <div className={`venetian-blind-container ${className}`}>
      {items && items.map((item) => {
        return (
          <div
            className="venetian-blind-imgbox"
            style={{
              backgroundImage: `url(${item.imgSrc})`,
            }}
          >
            <div className="venetian-blind-imgbox-text">
              <h2>{item.title}</h2>
              <p>{item.label}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default VenetianBlind;