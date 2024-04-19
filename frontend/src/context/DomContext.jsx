import { createContext, useContext, useState } from "react";

const DomContext = createContext();

export const DomProvider = ({ children }) => {
  const [code, setCode] = useState(`
  <body>
    <div>
        <h1>Node 1</div>
        <h1>Node 2</div>
        <div class="container">
          <button id="trigger">Click me</button>
          <button class="btn btn-primary">Some button</button>
        </div>
    </div>
  </body>
  `);

  return (
    <DomContext.Provider value={{ code, setCode }}>
      {children}
    </DomContext.Provider>
  );
};

const useDomContext = () => useContext(DomContext);
export default useDomContext;