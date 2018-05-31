---
title: Platform
permalink: /docs/platform/
---

## Platform

### What is the Platform Class?

> public final class **Platform** extends java.lang.object

> A Swirlds platform, which runs apps, and handles syncing and consensus. If multiple members are running on a single machine, then each will have its own **Platform** object. The **Platform** objects on a single machine are created and launched by the single **Browser** object, which is the main program.

---

### Method Summary

> static void **beep**()

> > _Play a beep sound_

> ---

> static void **beep**(int pitch, int velocity, int duration)

> > _Make a beep sound_

> ---

> static void **click**()

> > _Play a click sound_

> ---

> **Console createConsole**(boolean visible)

> > _Create a new window with a text console, of the recommended size and location, including the Swirlds menu_

> ---

> boolean **createTransaction**(byte[] trans)

> > _The SwirldMain object calls this method when it wants to create a new transaction_

> ---

> javax.swing.JFrame **createWindow**(boolean visible)

> > _Create a new window of the recommended size and location, including the Swirlds menu_

> ---

> java.time.Instant **estimateTime**()

> > _Find a rough estimate of what consensus timestamp a transaction would eventually have, if it were created right now through a call to createTransaction()_

> ---

> java.lang.String **getAbout**()

> > _returns the latest version of the "about" string from the app_

> ---

> **Address getAddress**()

> > _Get the Address for the member running this Platform_

> ---

> **Event**[] **getAllEvents**()

> > _Get an array of all the events in the hashgraph_

> ---

> int **getNumMembers**()

> > _Get the number of participating members_

> ---

> java.lang.String[] **getParameters**()

> > _Get any parameters that were given to the platform at startup, such as in the config.txt file_

> ---

> long **getSleepAfterSync**()

> > _Get the number of milliseconds the Platform should delay after each gossip sync it initiates_

> ---

> **[SwirldState](/docs/swirldsstate)**[] **getState**()

> > _The SwirldMain object can call this to get the current state object_

> ---

> **Statistics**[] **getStats**()

> > _Get the Statistics object that monitors and reports on the network and syncing_

> ---

> byte[] **getSwirldId**()

> > _Get the ID of the current swirld_

> ---

> void **setAbout**(java.lang.String about)

> > _The SwirldMain calls this to set the string that is shown when the user chooses "About" from the Swirlds menu in the upper-right corner of the window_

> ---

> void **setSleepAfterSync**(long delay)

> > _Set the number of milliseconds the Platform should delay after each gossip sync it initiates_

> ---

#### Methods inherited from interface com.swirlds.platform.FastCopyable

> * equals
> * getClass
> * hashCode
> * notify
> * notifyAll
> * toString
> * wait
> * wait
> * wait

---

### Method Detail

> #### getSwirldId

> public byte[] **getSwirldId**()

> Get the ID of the current swirld. A given app can be used to create many different swirlds (also called networks, or ledgers, or shared worlds). This is a unique identifier for this particular swirld.

> ##### Returns:
>
> * a copy of the swirld ID

> ---

> #### getStats

> public **Statistics getStats**()

> Get the Statistics object that monitors and reports on the network and syncing.

> ##### Returns:
>
> * the Statistics object associated with this Platform

> ---

> #### getSleepAfterSync

> public long **getSleepAfterSync**()

> Get the number of milliseconds the Platform should delay after each gossip sync it initiates. This is zero by default, but can be changed to slow down the system. This can be useful for testing.

> ##### Returns:
>
> * the delay in milliseconds

> ---

> #### setSleepAfterSync

> public void **setSleepAfterSync**(long delay)

> Set the number of milliseconds the Platform should delay after each gossip sync it initiates. This is zero by default, but can be changed to slow down the system. This can be useful for testing.

> ##### Parameters:
>
> * delay - the delay in milliseconds

> ---

> #### setAbout

> public void **setAbout**(java.lang.String about)

> The SwirldMain calls this to set the string that is shown when the user chooses "About" from the Swirlds menu in the upper-right corner of the window. It is recommended that this be a short string that includes the name of the app, the version number, and the year.

> ##### Parameters:
>
> * about - what should show in the "about" window from the menu

> ---

> #### getAbout

> public java.lang.String **getAbout**()

> returns the latest version of the "about" string from the app.

> ##### Returns:
>
> * the "about" string for this app

> ---

> #### getParameters

> public java.lang.String[] **getParameters**()

> Get any parameters that were given to the platform at startup, such as in the config.txt file.

> ##### Returns:
>
> * the parameters

> ---

> #### createTransaction

> public boolean **createTransaction**(byte[] trans)

> The SwirldMain object calls this method when it wants to create a new transaction. The newly-created transaction is then embedded inside a newly-created event, and sent to all the other members of the community during syncs. It is also sent to the swirldState object.

> The hintIDs is a suggestion that the platform sync as soon as possible with each member whose ID is in hintIds. Use this to make sure that a transaction quickly reaches someone who needs it urgently. This is only a hint. There is no guarantee the Platform will do so.

> If transactions are being created faster than they can be handled, then eventually a large backlog will build up. At that point, a call to createTransaction will return false, and will not actually create a transaction.

> A transaction can be at most 1024 bytes. If trans.length > 1024, then this will return false, and will not actually create a transaction.

> ##### Parameters:
>
> * trans - the transaction to handle, encoded any way the swirld author chooses

> ##### Returns:
>
> * true if successful

> ---

> #### estimateTime

> public java.time.instant **estimateTime**()

> Find a rough estimate of what consensus timestamp a transaction would eventually have, if it were created right now through a call to createTransaction(). A real-time app, such as a game, will typically redraw the screen by first calling estTime(), then rendering everything to the screen reflecting the predicted state as it will be at this time.

> ##### Returns:
>
> * the estimated time

> ---

> #### getState

> public **[SwirldState](/docs/swirldsstate) getState**()

> The SwirldMain object can call this to get the current state object. The SwirldMain should call this often, so it is always using the latest State object. Because the Platform will frequently change which state object is the "current" one.

> The SwirldMain must ensure that every access to the State object is synchronized on that object. So either the State should be written with methods such as getters and setters marked as "synchronized", or the SwirldMain object should be written so that every time it reads from the state, it does so within a synchronized(...){...} block.

> ##### Returns:
>
> * the current state

> ---

> #### getAllEvents

> public **Event**[] **getAllEvents**()

> Get an array of all the events in the hashgraph. This method is slow, so do not call it very often. The returned array is a shallow copy, so the caller may change it, and no other threads will change it. However, the events it references may have fields that are changed by other threads, and must not be changed by the caller. The array will contain first the consensus events (in consensus order), then the non-consensus events (sorted by time received).

> ##### Returns:
>
> * an array of all the events

> ---

> #### getAddress

> public **Address getAddress**()

> Get the Address for the member running this Platform.

> ##### Returns:
>
> * the Address

> ---

> #### createConsole

> public **Console createConsole**(boolean visible)

> Create a new window with a text console, of the recommended size and location, including the Swirlds menu.

> ##### Parameters:
>
> * visible - should the window be initially visible? If not, call setVisible(true) later.

> ##### Returns:
>
> * the new window

> ---

> #### createWindow

> public javax.swing.JFrame **createWindow**(boolean visible)

> Create a new window of the recommended size and location, including the Swirlds menu.

> ##### Parameters:
>
> * visible - should the window be initially visible? If not, call setVisible(true) later.

> ##### Returns:
>
> * the new window

> ---

> #### click

> public static void **click**()

> Make a click sound.

> ---

> #### beep

> public static void **beep**()

> Make a beep sound. It is middle C, half volume, 20 milliseconds.

> ---

> #### beep

> public static void **beep**(int pitch, int velocity, int duration)

> Make a beep sound.

> ##### Parameters:
>
> * pitch - the pitch, from 0 to 127, where 60 is middle C, 61 is C#, etc.
> * velocity - the "velocity" (volume, or speed with which the note is played). 0 is silent, 127 is max.
> * duration - the number of milliseconds the sound will play

> ---

> #### getNumMembers

> public int **getNumMembers**()

> Get the number of participating members. This is the size of the current address book.

> ##### Returns:
>
> * the number of members

---
