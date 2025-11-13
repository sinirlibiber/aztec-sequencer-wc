// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract XPTracker {
    mapping(address => uint256) public xp;
    event XPAwarded(address indexed user, uint256 amount);

    function awardXP(address user, uint256 amount) external {
        xp[user] += amount;
        emit XPAwarded(user, amount);
    }
}
