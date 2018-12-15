---
title: Creating Keys
permalink: /docs/start/creating-keys/
yt-id: 0O0-Vie6v5U
yt-start: 0
yt-stop: 296
---

## Creating Keys

### GoLang

{% include youtube-player.html id=page.yt-id start=page.yt-start stop=page.yt-stop %}

#### Pre-requisites

- [git-lfs](https://git-lfs.github.com/)
- [Go 1.11+](https://golang.org/)
- [Hedera Go SDK](https://github.com/hashgraph/hedera-sdk-go)

#### Steps

_NOTE: All examples will be written from the context of coding our Zero-to-Micropay demo app on a Mac_

- Create a new file called `keys.go`
- Open `keys.go` in the IDE/editor of your choice and enter:
    ```go
    package main

    import (
        "fmt"

        "github.com/hashgraph/hedera-sdk-go"
    )

    func main() {
        secret := hedera.GenerateSecretKey()
        fmt.Printf("secret = %v\n", secret)

        public := secret.Public()
        fmt.Printf("public = %v\n", public)
    }
    ```
- From terminal run:
    ```bash
    $> go run keys.go
    ```
_NOTE: this app will print your secret and public keys to the terminal output. This is not recommended for keys you would use for anything other than testing. It is your responsibility to follow best practices to protect keys that will be used for purposes other than testing._

- You can now use the public key printed from `keys.go` to generate an account on Hedera.

[Next Step: Demo - Zero-to-Micropay](/docs/start/zero-to-micropay){:.Btn.next}
