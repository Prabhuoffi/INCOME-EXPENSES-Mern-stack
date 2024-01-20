
const express = require("express");
const cors = require("cors");
const globalErrHandler = require("./middlewares/globalErrHandler");
require("./config/dbConnect");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");

const app = express();

//middlewares
app.use(express.json()); //pass incoming data
//corse middleware
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the Bill to Income/Expenses Tracker API",
  });
});
//users route
app.use("/api/v1/users", usersRoute);
//account routes                                               
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers
app.use(globalErrHandler);
//listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));