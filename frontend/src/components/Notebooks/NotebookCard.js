import React from "react";
import NoteCard from "../Notes/NoteCard";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook }) => {
  return <NoteCard notebook={notebook} />;
};
export default NoteBookCard;
