---
title: SwirldsState
permalink: /docs/swirldsstate/
---

## SwirldsState

> ##### All Superinterfaces:

> * ##### FastCopyable

> ##### All Known Subinterfaces:

> * ##### SwirldState.SwirldState2

---

### What is SwirldState?

> public interface **SwirldState** extends FastCopyable

> A Swirld app is defined by creating two classes, one implementing **[SwirldMain](/docs/swirldsmain)**, and the other **SwirldState**, such that:

> * **SwirldState** has a no-argument constructor (called by **[Platform](/docs/platform)**)
> * All **SwirldState** variables are thread-safe and private
> * All **SwirldState** methods are synchronized
> * **[SwirldMain](/docs/swirldsmain)** never modifies an object in SwirldState

> So, if **SwirldState** contains an array, and **[SwirldMain](/docs/swirldsmain)** gets it through a getter method, then the developer is responsible for making sure **[SwirldMain](/docs/swirldsmain)** never changes the contents of that array. Or the getter can simply return a deep copy of the array instead of the original.

---

### Nested Class Summary

> static interface **SwirldState**.**SwirldState2**

> > _Normally, an app must define a state class that implements SwirldState_

---

### Method Summary

> void **copyFrom**(**SwirldState** old)

> > _Copy all of the consensus state from old to this_

> ---

> **AddressBook getAddressBookCopy**()

> > _Return a deep copy of the the current address book_

> ---

> void **handleTransaction**(long id, boolean isConsensus, java.time.Instant timestamp,
> byte[] trans, **Address** address)

> > _Given a transaction, update the state to reflect its effect_

> ---

> void **init**(**Platform** platform, **AddressBook** addressBook)

> > _Initialize everything to reflect the consensus state at the start of history, before any transactions have happened_

> ---

> void **noMoreTransactions**()

> > _For a given SwirldState object, the Platform will call handleTransaction multiple times, then call noMoreTransactions() once, then never call handleTransaction again_

> ---

#### Methods inherited from interface com.swirlds.platform.FastCopyable

> * copy
> * copyFrom
> * copyTo

---

### Method Detail

> #### init

> void **init**(**Platform** platform, **AddressBook** addressBook)

> Initialize everything to reflect the consensus state at the start of history, before any transactions have happened. When the Platform instantiates an object of an app's class implementing SwirldState, it will call the method init on that object exactly once, then call copyFrom zero or one times, then call handleTransaction for the first time.

> ##### Parameters:
>
> * platform - the Platform that instantiated this SwirldState
> * addressBook - the members and info about them

> ---

> #### getAddressBookCopy

> **AddressBook getAddressBookCopy**()

> Return a deep copy of the the current address book.

> ##### Returns:
>
> * a deep copy of the the current address book

> ---

> #### copyFrom

> void **copyFrom**(**SwirldState** old)

> Copy all of the consensus state from old to this. The copy must be a deep copy of the entire consensus state. It is ok to use the fast copying methods from the fast copyable data structures. It is recommended that both copyFrom and handleTransaction be synchronized methods, and that handleTransaction completely finish handling the transaction before returning.

> However, it is possible to write handleTransaction to perform some of its work by generating new threads (or using a thread pool), which will continue working after it returns. In that case, the copyFrom must be written such that it will read a state that reflects all the effects of all the transactions that were sent to handleTransaction prior to the call to copyFrom, and is not at all affected by later transactions.

> ##### Parameters:
>
> * old - the state to copy

> ---

> #### handleTransaction

> void **handleTransaction**(long id, boolean isConsensus, java.time.Instant timestamp,
> byte[] trans, **Address** address)

> Given a transaction, update the state to reflect its effect. A given SwirldState object will see a sequence of transactions consisting of some number for which consensus is true, followed by the rest being false. The transactions for which it is true are sent in the consensus order. The rest are sent in an order that is the current best guess as to what the consensus will be. But that order is subject to change. A given SwirldState object will never see that order change. But a different SwirldState object may be instantiated by the Platform, and it may receive those transactions in a different order.

> The address parameter will usually be null. When it isn't, this transaction is a request that a new member be added to the address book. The new member's information is passed in as address, and the member who is inviting them has ID number id (or -1 if the config.txt file is "inviting" them).

> For such invitations, the transaction trans might be null. Or it might describe something relevant to the invitation, such as what privileges the invitor gives the inviteee. Or perhaps some fraction of the invitor's resources to be given to the invitee. This method is responsible for deciding whether to add the invitee to the address book, to make the addition (or not), and to update the state accordingly (such as by transferring resources from inviter to invitee).

> The state of this object must NEVER change except inside the methods init(), SwirldState.copyFrom(), FastCopyable.copyFrom(), and handleTransaction(). So it is good if handleTransaction changes some of the class variables and then returns. It is also OK if handleTransactions spawns a number of threads that change those variables, then waits until all those threads have ended, and then returns. It is even OK for it to create a pool of threads that continue to exist after handleTransaction returns, as long as it ensures that those threads have finished all their changes before it returns. But it is an error for handleTransaction to spawn a thread that will make changes after handleTransaction returns and before the next time handleTransaction is called. If handleTransaction does create threads that continue to exist after it returns (in a legal way), then it can stop those threads in the noMoreTransactions method.

> ##### Parameters:
>
> * id - the ID number of the member who created this transaction
> * isConsensus - is this transaction's timeCreated and position in history part of the consensus?
> * timestamp - the consensus timestamp for when this transaction happened (or an estimate of it, if it hasn't reached consensus yet)
> * trans - the transaction to handle, encoded any way the swirld app author chooses
> * address - this transaction is a request by member "id" to create a new member with this address

> ---

> #### noMoreTransactions

> void **noMoreTransactions**()

> For a given SwirldState object, the Platform will call handleTransaction multiple times, then call noMoreTransactions() once, then never call handleTransaction again. After that point, all future handleTransaction calls will go to a different SwirldState object. So the current one is obsolete. In most cases, this method should be implemented as doing nothing. But if there are any threads spawned by the SwirldState, then this would be a good place to shut them down. See the documentation for SwirldState.handleTransaction for a discussion of when it might have threads that need to be stopped.

---

[Next Step: Platform](/docs/platform){:.Btn.next}
