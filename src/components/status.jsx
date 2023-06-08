import style from "../styles/status.module.css";
import { showFormattedDate } from "../utils";
import Button from "./button";

const Status = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <article id={id} className={style.status}>
      <header className={style.status_header}>
        <h3 className={style.heading}>{title}</h3>
        <small className={style.date}>{showFormattedDate(createdAt)}</small>
        <p className={style.note}>{body}</p>
      </header>
      <footer className={style.status_footer}>
        <Button eventHandler={() => deleteNote(id)} label='Hapus' />
        <Button
          eventHandler={() => toggleArchive(id)}
          label={archived ? "Tidak Arsip" : "Arsip"}
        />
      </footer>
    </article>
  );
};

export default Status;
