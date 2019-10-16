import React, { ReactNode } from "react"

interface Props {
  newTab?: boolean,
  text: string | ReactNode,
  link: string
}

const Linkify = ({
                   newTab = true,
                   text,
                   link
                 }: Props) => (
  <a href={link}
     target={newTab ? "_blank" : ""}
     rel={"noopener noreferrer"}>
    {text}
  </a>
);

export default Linkify;