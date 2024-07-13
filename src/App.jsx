import { Layout } from "./components/Layout";
import { Notes } from "./components/Notes";
import { NotesProvider } from "./contexts/NotesContext";

function App() {
  return (
    <NotesProvider>
      <Layout>
        <Notes />
      </Layout>
    </NotesProvider>
  )
}

export default App
