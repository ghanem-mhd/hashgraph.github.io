---
title: Overview
permalink: /docs/hg101/overview/
---

## Overview

#### Topics:

* Consensus
* Hashgraph Consensus Algorithm
* Permissioned vs. Permissionless Networks

### Consensus

Modern computing is becoming more distributed. Distributed systems provide
scalability, availability, and reliability. With the emergence of distributed ledger technologies (DLT), systems can now be distributed and
shared between parties whose interests may not align. In order to support such a system, algorithms are designed and implemented to
ensure that all parties can reliably come to an agreement, or consensus, about the state of the system, while maintaining resilience
against bad actors. This is called Byzantine Fault Tolerance (BFT). Bad actors are those whose motivation is to subvert the system’s
integrity. If the algorithms are also resilient to distributed denial of service attacks and malicious firewalls, then they are
Asynchronous Byzantine Fault Tolerant (aBFT), which is the strongest level of security that can be achieved.

Consensus, in a general sense, is defined as an agreement and is used for group decision-making. In distributed networks, consensus describes
the idea of coming to a reliable agreement on the state of a system between the members of a network. Once the state of the system has
been agreed upon, the decision is final. A **consensus algorithm** is the process a distributed system can implement to reach agreement about
the transactions that members communicate to the rest of the network.

Consensus in a distributed network can carry the following properties:

* Only a message transmitted by a member of a network may be chosen for consensus
* Only a single message for said transmission reaches consensus
* A member never learns that a message has reached consensus unless consensus has actually been reached

Consensus algorithms typically make the following assumptions:

* Some members will be unreliable
* Some members will lose communication to the network
* A segment of the members in the community will respond
* A segment of the members are required to respond to reach consensus

The goal of a consensus algorithm is to achieve reliability of data transmitted in a network of members whose interests may not align while mitigating the faults of the network.

### Alternative Consensus Mechanisms

<table>
  <tbody>
    <tr>
      <th> Consensus Mechanism</th>
      <th align="center">Description</th>
      <th align="center">Example</th>
    </tr>
    <tr>
      <td>Leader-based</td>
      <td align="Left">
      Advantages:
      	<ul>
      		<li>Byzantine</li>
		<li>Immutable audit</li>
		<li>DDoS resilient</li>
		<li>Firewall / virus attack resilient</li>
		<li>Low computation (No PoW)</li>
		<li>High availability</li>
      </ul>
    Disadvantages:
	<ul>
		<li>Designed for ‘fault’ tolerance not ‘attack’ tolerance</li>
		<li>Susceptible to DDoS attacks</li>
		<li>Leader can influence transaction access and order</li>
		<li>No fair timestamps</li>
		<li>Low scalability</li>
	</ul>    
      </td>
      <td align="left">
      	<ul>
      		<li>Hyperledger Fabric</li>
		<li>R3 Corda</li>
		<li>EOS</li>
		<li>IOTA</li>
		<li>EEA</li>
		<li>Quorum</li>
	</ul>
      </td>
    </tr>
    <tr>
      <td>Proof-of-work based</td>
      <td align="left">
      Advantages:
      	<ul>
		<li>Immutable audit</li>
		<li>DDoS resilient</li>
		<li>High throughput possible</li>
		<li>Scalability</li>
      </ul>
    Disadvantages:
    	<ul>
		<li>High computation requirements</li>
		<li>Firewall partitioning attacks</li>
		<li>Coarse-grained timestamps</li>
		<li>A miner can influence timestamps</li>
		<li>A miner can influence transaction access and order</li>
	</ul>  
      </td>
      <td align="left">
      	<ul>
      		<li>Ethereum</li>
		<li>Bitcoin</li>
	</ul>
      </td>
    </tr>
    <tr>
      <td>Economy-based</td>
      <td align="left">
      Advantages:
      	<ul>
		<li>Immutable audit</li>
		<li>DDoS resilient</li>
		<li>Low computation</li>
		<li>High availability</li>
      </ul>
    Disadvantages:
    	<ul>
		<li>Not Byzantine</li>
		<li>Firewall / Virus attacks</li>
		<li>No certainty of consensus</li>
		<li>No Fair ordering / Timestamps</li>
		<li>Often: liquidity (must bond coins)</li>
		<li>Often: can’t prove state to 3rd party</li>
		<li>Often: no total order</li>
	</ul>   
      </td>
      <td align="left">
          <ul>
		<li>Casper</li>
		<li>IOTA</li>
		<li>EOS</li>
		<li>Tezos</li>
	</ul>
      </td>
    </tr>
    <tr>
      <td>Voting-based</td>
      <td align="left">
      Advantages:
      	<ul>
		<li>Byzantine</li>
		<li>Immutable audit</li>
		<li>DDoS resilient</li>
		<li>Firewall / virus attack resilient</li>
		<li>Low computation (No PoW)</li>
		<li>High availability</li>
      </ul>
    Disadvantages:
	<ul>
      		<li>Poor scalability (Impractical bandwidth requirements)</li>
		<li>Individual members can influence transaction access and order</li>
		<li>Low throughput</li>
	</ul>
      </td>
      <td align="left">
      	<ul>
      	  <li>None</li>
	</ul>        
      </td>
    </tr>
  </tbody>
</table>

### Hashgraph Consensus Algorithm

The hashgraph consensus algorithm enables distributed consensus in an innovative way. Hashgraph is a distributed consensus algorithm that is fast, fair, and secure. This indirectly creates a trusted community, even when members do not necessarily trust each other.

### Permissioned vs. Permissionless Networks

A **permissioned network** restricts access to which members can host nodes on the network. Only trusted members can join the network and all members are known at all times. The permissioned hashgraph network is an attractive solution for enterprises that wish to share data with known parties whose interests may not perfectly align.

In a **permissionless network**, any member can voluntarily join the network and participate in calculating consensus. Examples of permissionless networks are the
Bitcoin and Ethereum blockchains, where any user can join the network and participate in calculating consensus. All members can access and view the public ledger.

The hashgraph consensus algorithm can be implemented in both a permissioned and permissionless configuration. The Swirlds software development kit (SDK) is the permissioned network implementation of the hashgraph consensus algorithm. Hedera is the public ledger that implements the hashgraph algorithm in a permissionless environment.

[Next Step: Gossip about Gossip](/docs/hg101/gossip-about-gossip){:.Btn.next}
