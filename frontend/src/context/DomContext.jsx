import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { createContext, useContext, useState } from "react";
import parse from "react-html-parser";

const DomContext = createContext();

export const DomProvider = ({ children }) => {
  const [code, setCode] = useState(`
        <div class="container">
          <button id="trigger" class="click">Click me</button>
          <button class="btn btn-primary">Some button</button>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  `);

  const extractBody = (rawHTML) => {
    return parse(rawHTML, {
      transformMatches: (entities) => entities.slice(1), // Remove first element (body tag itself)
    });
  };

  // const extractHTMLFromUrl = (url) => {
  //   const regex = /<body[^>]*>(.*?)<\/body>/s; // Case-insensitive with singleline mode
  //   console.log(url);
  //   try {
  //     axios
  //       .get(url)
  //       .then((result) => {
  //         const match = result.data.match(regex);
  //         let bodyContent = "";
  //         if (match) {
  //           bodyContent = match[1]; // Capture group 1 containing body content
  //           setCode(bodyContent);
  //         } else {
  //           console.error("Body tag not found");
  //         }
  //         enqueueSnackbar("HTML fetched successfully.", { variant: "success" });
  //       })
  //       .catch((err) => {
  //         enqueueSnackbar(
  //           "Error fetching HTML. Make sure the URL is correct and accessible.",
  //           { variant: "error" }
  //         );
  //         console.log(err);
  //       });
  //     setError("");
  //   } catch (err) {}
  // };

  const extractHTMLFromUrl = (url) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/diagram/fetch-dom`, { url })
      .then((res) => {
        setCode(res.data);
        enqueueSnackbar("HTML fetched successfully.", { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar(
          "Error fetching HTML. Make sure the URL is correct and accessible.",
          { variant: "error" }
        );
        console.log(err);
      });
  }

  return (
    <DomContext.Provider value={{ code, setCode, extractHTMLFromUrl }}>
      {children}
    </DomContext.Provider>
  );
};

const useDomContext = () => useContext(DomContext);
export default useDomContext;
