---
title: Installation
permalink: /docs/installation/
---

## Installation

### Pre-requisites

* Java Development Kit (JDK) 8
* Java Cryptography Extension (JCE) Unlimited Policy

### Installing on MacOS

#### Install the latest JDK 8

* Get the latest JDK 8
* Install JDK 8
* Confirm that JDK 8 is the running version of Java

#### Install the latest JCE Unlimited Policy for Java 8

* Visit ??? to get the latest JCE Unlimited Policy for Java 8
* Unzip the downloaded JCE file
* Copy both the `US_export_policy.jar` and the `local_policy.jar` to your Java installation's security policy location. _NOTE: On Mac OS 10.13.3 using the default Oracle JDK installation location, this can be found at `/Library/Java/JavaVirtualMachines/jdk1.8.0_161.jdk/Contents/Home/jre/lib/security/policy/unlimited`_

#### Running the SDK

* Download the SDK from [https://www.swirlds.com/download/](https://www.swirlds.com/download/)
* Unzip the downloaded SDK zip file
* Run the SDK using `java -jar swirlds.jar`

Congratulations! You are now running the Swirlds SDK with 4 local nodes.

    HINT: Explore the config.txt file included in the SDK

[Next Step: Your First App](/docs/your-first-app){:.Btn.next}
