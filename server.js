const app = require("./app");

const port = 3000;
app.listen(port, () => {
  //Sintassi per dire a ESLint di ignorare il log che segue il commnento.
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
