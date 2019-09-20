This is integration of truffle chain with Quorum Blockhain <br/>

Steps are <br/>

1. Set Quorum Blockchain envirnoment. You have to build the envirnoment in vagrant first for more steps "https://github.com/jpmorganchase/quorum-examples"

2. After set up use this command "vagrant up" to start Quorum Chain. 
 
3. "vagrant ssh" to start chain protocol 

4. After "vagrant up" , ubuntu@ubuntu-xenial:~$ cd quorum-examples/7nodes/

5. ubuntu@ubuntu-xenial:~/quorum-examples/7nodes$ ./raft-init.sh

6. ubuntu@ubuntu-xenial:~/quorum-examples/7nodes$ ./raft-start.sh

7. open new terminal 

8. Prateek-Tiwari:quorum-examples yudiz$cd myproject

9. Prateek-Tiwari:quorum-examples yudiz$truffle init

10. Prateek-Tiwari:quorum-examples yudiz$truffle console

11. truffle(development) > SimpleStorage.deployed().then(function(instance) { return instance.get(); }) <br/>

 output will as { [String: '42'] s: 1, e: 1, c: [ 42 ] }

12. Start network four in cmd ,Prateek-Tiwari:quorum-examples yudiz$truffle console --network nodefour

13. truffle(nodefour)> SimpleStorage.deployed().then(function(instance) { return instance.get(); })

14. output will as { [String: '0'] s: 1, e: 0, c: [ 0 ] }

15. open new terminal Prateek-Tiwari:yudiz$truffle console --network nodeseven

16. truffle(nodeseven)> SimpleStorage.deployed().then(function(instance) { return instance.get(); })

17. output as : { [String: '42'] s: 1, e: 1, c: [ 42 ] } ;

18. Due to this command {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]}), main contract is showing permission to node seven only see the log as "42" output.


