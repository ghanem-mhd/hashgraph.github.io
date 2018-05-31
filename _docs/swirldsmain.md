---
title: SwirldsMain
permalink: /docs/swirldsmain/
---

## SwirldsMain

> ##### All Superinterfaces:

> * ##### java.lang.Runnable

---

### What is SwirldMain?

> public interface **SwirldMain** extends java.lang.Runnable

> To implement a swirld, create a class that implements SwirldMain. Its constructor should have no parameters, and its run() method should run until the user quits the swirld.

---

### Method Summary

> void **init**(**[Platform](/docs/platform)** platform, long selfId)

> > _This should only be called by the Platform_

> ---

> **[SwirldState](/docs/swirldsstate) newState**()

> > _Instantiate and return a SwirldState object that corresponds to this SwirldMain object_

> ---

> void **preEvent**()

> > _The platform calls this method on the SwirldMain just before creating an event_

> ---

> default void **release**(**[Platform](/docs/platform)** platform, int id)

> > _Close any windows not instantiated via Platform.create_

> ---

> void **run**()

> > _This is where the app manages the screen and I/O, and creates transactions as needed_

> ---

### Method Detail

> #### init

> void **init**(**[Platform](/docs/platform)** platform, long selfId)

> This should only be called by the Platform. It is passed a reference to the platform, so the SwirldMain will know who to call. (This is dependency injection).

> ##### Parameters:
>
> * platform - the Platform that instantiated this SwirldMain
> * selfId - the ID number for this member (myself)

> ---

> #### release

> default void **release**(**[Platform](/docs/platform)** platform, int id)

> Close any windows not instantiated via Platform.create\*. This method may be called on a thread that is not the Swing event thread.

> ##### Parameters:
>
> * platform - the Platform that instantiated this SwirldMain
> * id - the ID number for this member (myself)

> ---

> #### run

> void **run**()

> This is where the app manages the screen and I/O, and creates transactions as needed. It should return when the user quits the app, but may also return earlier.

> ##### Specified by:
>
> * run in interface java.lang.Runnable

> ---

> #### preEvent

> void **preEvent**()

> The platform calls this method on the SwirldMain just before creating an event. The SwirldMain can optionally create transactions here, knowing they will be sent out almost immediately. A SwirldMain could even be written so that everything it does is in this method, and the run() method above does nothing and returns immediately.

> The run() method is given its own thread, which belongs to the SwirldMain for a particular app running a particular swirld. The preEvent() method runs in a special thread created by the platform each time it is called, and is limited to 0.1 seconds. If preEvent() does not return in 0.1 seconds, then the thread will be interrupted. So when writing preEvent(), make sure that it can always finish within 0.1 seconds, and that the separate threads of run() and preEvent() don't conflict in accessing non-threadsafe objects.

> ---

> #### newState

> **[SwirldState](/docs/swirldsstate) newState**()

> Instantiate and return a SwirldState object that corresponds to this SwirldMain object. Typically, if class ExampleMain implements SwirldMain, then newState will return an object of class ExampleMain.

> ##### Returns:
>
> * the newly instantiated SwirldState object

---

[Next Step: SwirldState](/docs/swirldsstate){:.Btn.next}
