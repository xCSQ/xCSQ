const db = require('./model');

// jobcontroller - is now questioncontroller
// incomingJob is now incoming question
// jobInsertionQuery is now questionInsertionQuery
const questionController = {};

questionController.getData = (req, res, next) => {
  const getDataQuery = 'SELECT * FROM common_questions;';
  db.query(getDataQuery)
    .then((queryRes) => {
    //   console.log(queryRes);
      res.locals.data = queryRes.rows;
      //   console.log(res.locals.data);
      return next();
    });
};


questionController.addQuestion = (req, res, next) => {
  const incomingQuestion = req.body;
  // console.log(incomingJob);
  // changed line below from company to question and deleted role and link
  const questionInsertionQuery = `INSERT INTO common_questions (questions) VALUES ('${incomingQuestion.question}')
    RETURNING *;`;
  // console.log(jobInsertionQuery);
  db.query(questionInsertionQuery)
    .then((queryRes) => {
      res.locals.questionInsertionInfo = queryRes.rows[0];
      next();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = questionController;
