module.exports = {
  networks: {
     nodeFirst: {
      host: "127.0.0.1",
      port: 22001, 
      network_id: "*", 
      gasPrice: 0,
      gas: 4500000
    },
    nodethird:  {
      host: "127.0.0.1",
      port: 22003,
      network_id: "*", 
      gasPrice: 0,
      gas: 4500000
    },
    nodefifth:  {
      host: "127.0.0.1",
      port: 22005,
      network_id: "*", 
      gasPrice: 0,
      gas: 4500000
    }
  }
};
