const { createContext, useState, useContext } = require("react");

const DomContext = createContext();

export const DomProvider = ({ children }) => {
  const [code, setCode] = useState(`
  <body>
    <div>
        <h1>Node 1</div>
        <h1>Node 2</div>
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