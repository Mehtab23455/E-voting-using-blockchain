const hre = require("hardhat");

async function main() {
    const candidateNames = ["Alice", "Bob", "Charlie"];  // Example candidate names
    
    // Get the contract factory
    const Voting = await hre.ethers.getContractFactory("Voting");

    // Deploy the contract
    const votingInstance = await Voting.deploy(candidateNames);
    await votingInstance.waitForDeployment();  // Corrected way to wait

    console.log("Voting contract deployed at:", await votingInstance.getAddress());
}

// Run the function
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
