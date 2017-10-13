const FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

/*
  `questions` will be a comma separated list of questions. For example:
  -> 'Will it rain?,Should I bring an umbrella?,Will I find $10 today?'

  You should separate the questions and use the FortuneTeller to
  return a response for each one as an array. For example, the final
  result might be:
  [ 'Yes', 'Outlook good', 'My reply is no' ]

  If there is an error with any of the questions, you should just
  return a single error that is returned from FortuneTeller.

  Remember to return a Promise from the `answerQuestions` format!
*/

function answerQuestions (questions) {
  const questionsArr = questions.split(',')
  const promises = questionsArr.map(question => FortuneTeller.ask(question))

  return Promise.all(promises).then(results => {
    return results.map(answer => answer.response)
  })
}

module.exports = { answerQuestions }
