const FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

/*
  `questions` will be a comma separated list of questions. For example:
  -> 'Will it rain?,Should I bring an umbrella?,Will I find $10 today?'

  You should separate the questions and use the FortuneTeller to
  return a response for each one as an array. For example, the final
  result might be:
  [ 'Yes', 'Outlook good', 'My reply is no' ]

  You do not need to `.catch()` any errors.
*/

function answerQuestions (questions) {
  console.log(questions);
  const questionsArr = questions.split(',')
  console.log(questionsArr);

  const promises = questionsArr.map(function (question) {
    return FortuneTeller.ask(question)
  })

  return Promise.all(promises)
    .then(results => {
      return results.map(answer => {
        return answer.response
      })
    })
}

module.exports = { answerQuestions }
