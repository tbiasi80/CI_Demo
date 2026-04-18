const app = require("./app");

const port = 3000;
app.listen(port, "0.0.0.0", () => {
  //Sintassi per dire a ESLint di ignorare il log che segue il commnento. //Merge da secondario con PR
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
