---
title: Overview
permalink: /docs/overview/
---
### Consensus

Modern computing is becoming more distributed. Modern computing is becoming more distributed. Distributed systems provide 
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
      <th align="right">Example</th>
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
      		<li>Poor scalability (Impractical bandwidth requirements)</li>
		<li>Individual members can influence transaction access and order</li>
		<li>Low throughput</li>
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
      <td align="left">Advantages:</td>
      <td align="left">
      	<ul> 
      		<li>Ethereum</li>
		<li>Bitcoin</li>
	</ul>
      </td>
    </tr>
    <tr>
      <td>Economy-based</td>
      <td align="left">Advantages:</td>
      <td align="left">$1</td>
    </tr>
    <tr>
      <td>Voting-based</td>
      <td align="left">Advantages:
      	<ul>
      	  <li> 
      </td>
      <td align="left">
      	<ul> 
      	  <li>None</li>
	</ul>        
      </td>
    </tr>
  </tbody>
</table>

