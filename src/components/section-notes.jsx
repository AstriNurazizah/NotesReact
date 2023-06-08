import style from "../styles/section-notes.module.css";
import Status from "./status";

const SectionNotes = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2 className={style.heading}>{label}</h2>
      {notes.length === 0 ? (
        <p className={style.empty_note}>Tidak ada catatan.</p>
      ) : (
        <div className={style.list_of_notes}>
          {notes?.map((note) => (
            <Status key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionNotes;
