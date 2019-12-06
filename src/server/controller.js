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

questionController.addCompany = (req, res, next) => {
  const {names} = req.params;
  const setCompanyQuery = `INSERT INTO companies (names) VALUES ('${names}');`;

  db.query(setCompanyQuery, (err, result)=>{
    if(err) return next(err);
    return next();
  }); 
};
questionController.getCompanies = (req, res, next) => {

  const getCompanies = 'SELECT * FROM companies';

  db.query(getCompanies, (err, result)=>{
    if(err) return next(err);
    res.locals.companies= [];
    for(let i=0; i<result.rows.length; i++){
      res.locals.companies.push(result.rows[i].names)
    }
 
    return next();
  }); 
};

questionController.getCompaniesQuestions = (req, res, next) => {

  const getCompaniesQuestions = 'SELECT n2.names, n2.questions FROM (SELECT n.*, common_questions.questions FROM (SELECT  companies.names, qc.questionid FROM companies INNER JOIN questions_in_companies qc ON companies.id = companyid) n INNER JOIN common_questions ON n.questionid = common_questions.id) n2 ';

  db.query(getCompaniesQuestions, (err, result)=>{
    if(err) return next(err);
    res.locals.companiesQuestions= {};
    for(let i=0; i<result.rows.length; i++){
      if(res.locals.companiesQuestions[result.rows[i].names]){
      res.locals.companiesQuestions[result.rows[i].names].push(result.rows[i].questions)
    }
      else{
        res.locals.companiesQuestions[result.rows[i].names] =[result.rows[i].questions];
      }
    }
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
