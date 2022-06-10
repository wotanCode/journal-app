import { SideBar } from './SideBar.jsx';
// import { NothingSelected } from './NothingSelected.jsx';
import { NoteScreen } from '../notes/NoteScreen';

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
      <SideBar />

      <main>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
}