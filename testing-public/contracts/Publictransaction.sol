pragma solidity ^0.4.17;

contract Publictransaction {
  uint public storedData;

  constructor(uint initVal1) public {
    storedData = initVal1;
  }

  function set(uint x) public {
    storedData = x;
  }

  function get() view public returns (uint retVal) {
    return storedData;
  }
}