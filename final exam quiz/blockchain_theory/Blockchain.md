 # In the context of blockchain, what is the most fundamental definition of a transaction?
 
 - [ ]  A transmission of a message between nodes
 - [x]  An atomic event that is allowed by the underlying protocol
 - [ ]  Exchange of a hash table between two peers

 

#  In the context of a distributed ledger, how do you define blockchain? Which of the following statements are correct?

 - [x] As the ordered list of all transactions since inception
 - [x] As a well-ordered set of blocks
 - [ ] As a chain of transactions
 - [x] As a well-ordered set of data, on which all peers eventually agree.
 - [ ] As a shared real-time transaction network




# Thinking about traditional network and database architecture, what does a transaction do in a blockchain environment?

 - [ ]  Update one table on one machine
 - [x] Update separate tables of accounts for the whole network
 
 
 
 
# In Blockchain, what is the truth?
- [ ] The truth is what Vitalik Buterin says //:))
- [ ] The truth is what the developer community agrees on
- [ ] The truth is what the biggest miner considers the truth
- [x] The truth is the set of data that all participants eventually agree on





 1.5. What does a cryptographic hash function do?
 It cracks a password challenge
 It converts an input, a.k.a. the message, into an output, a.k.a the hash
 1.6. Take the example of the KECCAK-256 hashing algorithm. Can the message easily be calculated from the hash with a normal desktop computer?
 Yes
 No
 1.7. What is the difference between the KECCAK-256 hashes of "bird" and of "bard"?
 One letter in the hash is different
 At most 50% of the content differ
 The hashes differ fundamentally
 1.8. Are there two different messages that have the same SHA-512 hash value?
 Yes, and the likelihood of finding two messages with the same hash value is quite high
 Yes, but the likelihood is extremely low, no example has been found yet
 No, all hashes are unique
 1.9. Can hash functions be used to index messages?
 Yes, by mapping hashes to their messages
 No, because hashes are not unique
 1.10. Can a hash be used to check that a message has not been changed?
 No
 Yes
 1.11. Where is data stored in a Merkle Tree?
 In each node of the tree
 In the leaves of the tree
 In the root of the tree
 1.12. How is data collected from a Merkle tree?
 The tree is traversed depth-first and data is read from each leaf
 The tree is traversed depth-first and data is read from every node
 The data is extracted from the merkle root
 1.13. What is a node in a Merkle Tree?
 A node contains the data of its parent nodes
 A node contains the hash of its children
 1.14. How is a gossip network defined?
 A gossip network stores data on a central server accessible to a set of machines
 In a gossip network each node relays received data to its other peers
 1.15. What is the Byzantine General's Problem?
 How to distribute data in a hierarchy-free, permission-less and failure-prone network
 How to reach consensus in a hierarchy-free, permission-less and failure-prone network
 How to find peers in a hierarchy-free, permission-less and failure-prone network
 1.16. Does the Byzantine General's problem have an absolute solution?
 No, it can only be mitigated
 Yes, it has been solved by the Byzantine General's Solution
 1.17. In the ethash Proof-of-Work consensus algorithms, what determines whether a block is valid?
 A hash calculation of a combination of merkle roots, block number, previous block hash, beneficiary address, timestamp and nonce has the right number of leading 0's
 A hash calculation of a combination of merkle roots, block number, previous block hash, timestamp and nonce has the right number of leading 0's
 1.18. In the ethash and hashcash Proof-of-Work consensus algorithms, what is a nonce?
 A random string that has never been used
 The hash of the current timestamp used by the miner
 A one-time word that is varied by the miner to achieve different hashes
 1.19. In the ethash and hashcash Proof-of-Work consensus algorithms, what does the difficulty determine?
 The number of blocks a miner has to propose before the network accepts one
 The number of leading zeros required in a block hash calculation required for a valid block
 The time a transaction has to remain in the transaction pool
 1.20. What does the CAP theorem stand for?
 Consistency, Affirmability, Partition
 Christopher Antonopolous Programme
 Consistency, Availability, Partition tolerance
 1.21. For a malicious node to remove or insert transactions, it would need to update the root hash of the containing block's Merkle tree, update the nonce of the containing block, update the hash of the containing block and do the same for all subsequent blocks. Under what circumstances is that possible?
 If the attacker issues at least 50% of all transactions
 If the attacker controls more than 50% of the mining power in a blockchain network
 1.22. What does a generic block header contain?
 List of Transactions
 State changes resulting from transactions
 Merkle Root of transactions
 Hash of previous block
 Signatures of all senders of transactions
 1.23. Where is the Merkle root used in the context of blockchain?
 The genesis block
 The root hash of a Merkle tree containing all transactions in a block
 The root hash of a Merkle tree of all previous blocks
 1.24. What can we use a Merkle Tree for?
 Compress data by calculating the Merkle root
 Compare complex collections of data by comparing the Merkle root
 Use the Merkle root to calculate the original dataset
 1.25. How does a key/value pair table, whose keys are hashed from the values, compare to a key/value pair table whose content is indexed by arbitrary key? Select all correct statements.
 a table indexed by arbitrary key is faster to read
 a table indexed by hash allows incorporation of checks for protection from error and malice, unlike one by arbitrary key
 a table indexed by hash can grow much larger than one by arbitrary key
 a table indexed by arbitrary key can hold duplicate values, unlike one by hash
 1.26. What is the double-spend attack within Bitcoin?
 the attacker sends 2 different transactions at the same time to the network, in order to send the same coin to 2 different recipients before the nodes can spot the fraud
 the attacker sends the coin to a recipient in exchange for a consideration, then waits to receive the consideration, then builds a fork that does not contain the previous transaction and that is still acceptable to the network
 the attacker sends the coin to a recipient in exchange for a consideration, then waits to receive the consideration, then sends another transaction to cancel the first transaction
 1.27. Select all statements that are true for Proof-of-Work
 Any miner can propose new blocks
 Potential miners must get approval by the network
 More than one miner can find a correct block in the same time
 1.28. What is an uncle, a.k.a. ommer?
 an uncle is a block that contains specific information that identifies it as an uncle
 an uncle is a block that failed to be identified as the parent of another block
 an uncle is a block that is referenced by another one according to certain criteria
 1.29. What is the difficulty in a blockchain network?
 The difficulty determines how likely it is for a miner to find a valid block
 The difficulty sets the fees a user has to pay for a transaction
 The difficulty sets how difficult it is for clients to connect to the network
 1.30. Without thinking about specific implementations, select all statements that are sought after, or true, for desirable Proof-of-Stake algorithms
 Anyone can propose new blocks
 Miners with a stake in the network can propose blocks
 More than one miner can find a correct block in the same time
 The hypothesis for PoS suggests that participants with a large stake are more trustworthy
