---
title: Configuring Environment
permalink: /docs/start/configuring-environment/
---

## Configuring Environment

### GoLang

#### Pre-requisites

- [git-lfs](https://git-lfs.github.com/)
- [Go 1.11+](https://golang.org/)

#### Steps

Getting your GoLang environment ready to write an application using the [Hedera Go SDK](https://github.com/hashgraph/hedera-sdk-go).

_NOTE: All examples will be written from the context of coding our Zero-to-Micropay demo app on a Mac_

- Create a folder for your repo. In terminal:
    ```bash
    $> mkdir hedera-z2m
    $> cd hedera-z2m
    ```
- So that you don't have to build your entire codebase from scratch make sure you have git-lfs installed. In terminal:
    ```bash
    $> brew install git-lfs
    ```
- Initialise a new module in Go. This allows you to work on your project in the directory of your choice. In terminal:
    ```bash
    $> go mod init github.com/<username>/hedera-z2m
    ```
- Use your IDE of choice to manipulate source code in subsequent steps. In the Hedera DA team both [VSCode](https://code.visualstudio.com/docs/languages/go) and [GoLand](https://www.jetbrains.com/go/) are commonly used.

[Next Step: Creating Keys](/docs/start/creating-keys){:.Btn.next}
