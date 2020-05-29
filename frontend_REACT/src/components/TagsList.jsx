import React from "react";
import "./../styles/tags-list.css";

export default function TagsList({ tags }) {
  return (
    <ul>
      {tags.map((tag, i) => (
        <li key={i}>{tag.name}</li>
      ))}
    </ul>
  );
}
