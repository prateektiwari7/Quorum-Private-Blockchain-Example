var Publictransaction = artifacts.require("Publictransaction");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  deployer.deploy(Publictransaction, 42, {privateFor: ["*"]})
};
