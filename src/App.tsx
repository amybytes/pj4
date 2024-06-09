import Sidebar from 'components/Sidebar';
import Editor from 'components/Editor';

function App() {
  return (
    <div className="flex">
      <Sidebar className="justify-self-start" />
      <Editor />
    </div>
  );
}

export default App;
