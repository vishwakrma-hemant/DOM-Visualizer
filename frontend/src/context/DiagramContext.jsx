import { enqueueSnackbar } from "notistack";
import { createContext, useContext, useState } from "react";

const DiagramContext = createContext();

const NEW_DIAGRAM_DOM = `<body>
<div>
    <h1>Node 1</div>
    <h1>Node 2</div>
    <div class="container">
      <button id="trigger">Click me</button>
      <button class="btn btn-primary">Some button</button>
    </div>
</div>
</body>`

export const DiagramProvider = ({ children }) => {

  const [selDiagram, setSelDiagram] = useState(null);
  const [diagramList, setDiagramList] = useState([]);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const loadDiagrams = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/diagram/getbyuser/${currentUser._id}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setDiagramList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const createNewDiagram = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/diagram/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Untitled Diagram',
        user: currentUser._id,
        dom: NEW_DIAGRAM_DOM
      })
    })
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar('New diagram created', { variant: 'success' });
        }
      }).catch((err) => {
        console.log(err);
        enqueueSnackbar('Failed to create new diagram', { variant: 'error' });
      });
  }

  const updateDiagram = (diagram) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/diagram/update/${selDiagram._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diagram)
    })
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar('Diagram updated', { variant: 'success' });
        }
      })
      .then((data) => {
        setSelDiagram(data);
      }).catch((err) => {
        console.log(err);
        enqueueSnackbar('Failed to update diagram', { variant: 'error' });
      });
  }

  return (
    <DiagramContext.Provider value={{
      selDiagram,
      setDiagramList,
      setSelDiagram,
      diagramList,
      loadDiagrams,
      createNewDiagram,
      updateDiagram
    }}>
      {children}
    </DiagramContext.Provider>
  );
};

const useDiagramContext = () => useContext(DiagramContext);
export default useDiagramContext;