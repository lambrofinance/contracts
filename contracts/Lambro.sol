//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Lambro is ERC20 {
  constructor() ERC20("Lambro", "LAMBRO") {
    _mint(msg.sender, 1000000 * (10 ** 18));
  }
}
