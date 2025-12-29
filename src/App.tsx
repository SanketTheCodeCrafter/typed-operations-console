import type { AppState } from "./types/appState"

const initialState: AppState={
  currentUser: null
};

function App() {
   

  return (
    <>
      <h1>Typed Operations Console</h1>
      <pre>{JSON.stringify(initialState, null, 2)}</pre>
    </>
  )
}

export default App
