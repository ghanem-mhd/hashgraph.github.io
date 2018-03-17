---
title: Quickstart
permalink: /docs/quickstart/
---

### What is Hashgraph?

Hashgraph is the first asynchronouse byzantine fault tolerant (aBFT) consensus algorithm that results in fair ordering, fast finality, and secure propagation. It is the foundation of the next generation of Distributed Ledger Technology (DLT).

### What is the Swirlds Platform?

The Swirlds platform is the official implementation of the hashgraph algorithm. It is maintained and licensed by Swirlds Inc. The Swirlds platform is included in the Swirlds SDK along with a number of example applications. Swirlds has also has licensed its technology as the platform for the Hedera hashgraph public ledger.  

Upon agreeing to the End User License Agreement (EULA), you may use the SDK to build proofs-of-concept on the Swirlds platform. 

**For permissioned network use-cases:** These projects may be developed for proof-of-concept network purposes only. To acquire a commercial license, you must contact [sales@swirlds.com](mailto:sales@swirlds.com).

**For applications on the Hedera public ledger:** No license will be required to run an application on the Hedera hashgraph public ledger. Applications will make micropayments for API calls using the platform token.

We will update the Swirlds EULA and provide a Hedera user agreement before the public ledger launches.  To avoid doubt: Private permissioned implementations will continue to require a commercial license from Swirlds, but developers will be free to deploy applications on the Hedera hashgraph public ledger without paying for a license.

### How do I get started?

Finally, let's get down to business. There are a few key things to remember when developing on the Swirlds SDK:

1. The SDK is a Java application. You will want to be familiar Java development tools and patterns.
2. You control the Application layer of your proof-of-concept. This means you have full control over what gets entered into the platform as a transaction and how you want to handle transactions after they have reached consensus.
3. The platform will handle some major functions for you: gossip (propagation), consensus, and ordering. This is not an exaustive list of functions, just an overview of the core responsibilites of the hashgraph algorithm. Outside of those functions you have the flexibility to prepare the input and handle the output as you see fit.
4. The community is smart and friendly. As you build your proof-of-concept, do not hesitate to ask questions in our [chat server](https://hashgraph.com/discord).

[Next Step: Installation](/docs/installation){:.Btn.next}
