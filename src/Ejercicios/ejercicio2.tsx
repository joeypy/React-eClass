import React from "react";

interface Props {
  names: Array<string>;
  order: "ASC" | "DESC";
}

let lista = ["Triviño TI", "Homer Dev", " ", " Ragnar Front", "Loki UX"];

export const ParentComponent = () => {
  return (
    <>
      <p>Lista ordenada Ascendente</p>
      <ListNicknames names={lista} order="ASC" />
      <p>Lista ordenada Descendente</p>
      <ListNicknames names={lista} order="DESC" />
    </>
  );
};

const ListNicknames = ({ names = [], order = "ASC" }: Props) => {
  if (order === "ASC") {
    names = names.sort();
  } else if (order === "DESC") {
    names = names.sort().reverse();
  }

  return (
    <>
      <ul>
        {names.map((name: string) => (
          <li>{name.trim()}</li>
        ))}
      </ul>
    </>
  );
};
