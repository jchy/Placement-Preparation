const {body} = require('express-validator');

const validateUser = () => ([
    body("username")
      .not().isEmpty().withMessage("Username should not be empty!"),
    body("email")
      .not().isEmpty().withMessage("Email should not be empty!")
   ])

module.exports = validateUser;