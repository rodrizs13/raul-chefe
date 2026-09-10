// "use client";

// import { createContext, useContext, useState
// } from "react";

// const NotesContext = createContext();

// export function NotesProvider({ children
// }) {
//   const [notes, setNotes
//   ] = useState([]);

//   function addNote(title, content) {
//     const newNote = {
//       id: Date.now().toString(),
//       title,
//       content,
//       createdAt: new Date().toLocaleString("pt-BR"),
//     };

//     setNotes((currentNotes) => [newNote, ...currentNotes
//     ]);
//   }

//   function deleteNote(id) {
//     setNotes((currentNotes) =>
//       currentNotes.filter((note) => note.id !== id)
//     );
//   }

//   return (
//     <NotesContext.Provider value={
//     { notes, addNote, deleteNote
//     }
//   }>
//       {children
//   }
//     </NotesContext.Provider>
//   );
// }

// export function useNotes() {
//   return useContext(NotesContext);
// }
