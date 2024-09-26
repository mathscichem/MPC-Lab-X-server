/**
 * @file src/controllers/problemController.js
 * @description Controller for problem generation.
 */

const index = require("../problem-generators/index.json");
const ProblemGenerator = require("../problem-generators");
const problemGenerator = new ProblemGenerator();

/**
 * @function getIndex - Get the problem generator index.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
getIndex = (req, res) => {
  res.success(index, "Problem generator index retrieved successfully.");
};

/**
 * @function generateProblem - Generate a new problem.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
generateProblem = (req, res) => {
  const topicsString = req.params[0];
  const { options } = req.query;

  const topics = topicsString.split("/");

  try {
    const problem = problemGenerator.generateOne({
      path: topics,
      options: options,
    });

    return res.success(problem, "Problem generated successfully.");
  } catch (error) {
    if (error.message === "Generator not found") {
      return res.notFound("Generator not found.", "GENERATOR_NOT_FOUND");
    }
    return res.internalServerError(
      "Error generating problem.",
      "GENERATE_PROBLEM_ERROR"
    );
  }
};

module.exports = {
  getIndex,
  generateProblem,
};