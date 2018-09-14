pragma solidity ^0.4.17;


contract Ballot {
    struct Voter {
        uint vote;
        bool voted;
    }
    
    
    struct Proposal {
        bytes32 name;   
        uint voteCount; 
    }
    

    address public chairperson;
    mapping(bytes32 => Voter) public voters;
    
    Proposal[] public proposals;

    constructor(bytes32[] proposalNames) public {
        chairperson = msg.sender;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }
    
    
    function vote(uint proposal, bytes32 username) public {
        Voter storage sender = voters[username];
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.vote = proposal;

        proposals[proposal].voteCount += 1;
    }
    
    
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }


    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }
}
