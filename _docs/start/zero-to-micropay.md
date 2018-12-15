---
title: "Demo: Zero-to-Micropay"
permalink: /docs/start/zero-to-micropay/
yt-id: 0O0-Vie6v5U
yt-start: 296
yt-stop: 0
---

## Demo: Zero-to-Micropay

### GoLang

{% include youtube-player.html id=page.yt-id start=page.yt-start stop=page.yt-stop %}

#### Pre-requisites

- [git-lfs](https://git-lfs.github.com/)
- [Go 1.11+](https://golang.org/)
- [Hedera Go SDK](https://github.com/hashgraph/hedera-sdk-go)
- Hedera **Account ID**
- **DNS or IP Address** and **Port Number** of a Hedera node
- The **Node ID** of the Hedera node you are submitting transactions to

#### Steps

In this tutorial you will build a demo app that will:

- Connect to Hedera
- Get your account balance
- Transfer hbars to another account

In order to interact with Hedera you need a Hedera **Account ID**, the **DNS or IP Address** plus the **Port Number** for a Hedera node, and the **Node ID** of that node. All of those things can be acquired through the [Hedera portal](https://go.hedera.com).

Your Account ID and the Node ID are both Account IDs. Account IDs are made up of three integers representing the shard ID, the realm ID, and your account number in that shard and realm. It looks like this: `0:0:1001`, which represents account number 1001 in realm 0 in shard 0.

1. Create a file called `main.go`
2. Open `main.go` in the IDE/editor of your choice
3. **Connect to Hedera**

    ```go
    package main

    import (
        "fmt"
        "time"

        "github.com/hashgraph/hedera-sdk-go"
    )

    func main() {
    ```

    Establish connection to the Hedera node by using the __testnet Address__ and __Port__ shown in the Hedera portal. Be sure to replace the example `50123` to your specific port.

    Defer the disconnection of the connection to guarantee a clean disconnect from the node.

    ```go
    client := hedera.Dial("testnet.hedera.com:50123")
    if err != nil {
        panic(err)
    }
    defer client.Close()
    ```

    Initialise the `myAccount` variable based on your __Account ID__ from the portal. Ensure that you replace the example `1099` with your own Account ID.

    ```go
    myAccount := hedera.NewAccountID(0, 0, 1099)
    ```

4. **Get your account balance**

    `GetAccountBalance` constructs the request; adding `.Answer()` executes the request. Don't forget error-handling.

    `fmt.Printf` can then output the balance.

    ```go
    myBalance, err := client.GetAccountBalance(myAccount).Answer()
    if err != nil {
        panic(err)
    }

    fmt.Printf("Your balance: %v \n", myBalance)
    ```

    Finally, close the braces for `func main`.

    ```go
    }
    ```

    _Note: Before performing any other operations, be aware that testnets are throttled and may respond with an error if requests are made to the Hedera API to frequently. For this reason it is best practice to add a sleep timer inbetween requests._

    ```go
    time.Sleep(1 * time.Second)
    ```

5. **Transfer hbars to another account**

    The **secret key** associated with your Hedera account is required to sign all transactions submitted to Hedera. You can learn about how to generate those keys in the [creating keys](/docs/start/creating-keys) document.

    The term "operator" used in the naming of the next variable `operatorSecret` is used to highlight the fact that this is the account responsible for submitting the transaction. Ensure that your replace `<my-secret-key>` with your own secret key in the following code block:

    ```go
    operatorSecret, err := hedera.SecretKeyFromString("<my-secret-key>")
    if err != nil {
        panic(err)
    }
    ```

    The next statement is more complex as it takes advantage of the builder pattern. The statement is included in its entirety; each line is explained individually below. Take care to replace `1099` with your account number and `1100` with the account number of the recipient of your transfer.

    ```go
    response, err := client.CryptoTransfer().
        Operator(hedera.NewAccountID(0, 0, 1099)).
        Node(hedera.NewAccountID(0, 0, 3)).
        Transfer(hedera.NewAccountID(0, 0, 1099), -1).
        Transfer(hedera.NewAccountID(0, 0, 1100), 1).
        Sign(operatorSecret).
        Sign(operatorSecret).
        Execute()
    if err != nil {
        panic(err)
    }
    ```

    - Line __1__: `response, err := client.CryptoTransfer().` creates a transaction to transfer _hbars_ between accounts.

    - Line __2__: `Operator(hedera.NewAccountID(0, 0, 1099)).` identifies the account initiating the transaction.

    - Line __3__: `Node(hedera.NewAccountID(0, 0, 3)).` identifies the account of the Hedea node to which the transaction is being sent.

    - Line __4__: `Transfer(hedera.NewAccountID(0, 0, 1099), -1).` sets up a transfer, which pairs an account with a signed integer. In this case, the account is your account and the amount is -1. The negative number indicates that the balance of your account will be decremented by this amount.

    - Line __5__: `Transfer(hedera.NewAccountID(0, 0, 1100), 1).` creates a second transfer, pairing an account with a signed integer. In this case, the account is your friend's account and the amount is 1. The positive number indicates that the balance of your account will be incremented by this amount. __Important__: the __sum of all transfers__ contained within in a `CryptoTransfer` __must equal zero__.

    - Lines __6__ and __7__: `Sign(operatorSecret).` adds a signature based on a secret key. It is necessary to repeat this line to sign as both operator initiating the transfer transaction and account holder associated with an outgoing (negative) transfer – even though both keys are the same.

    - Line __8__: `Execute()` executes the transaction.

    Next, the ID of the transaction itself is captured from the `response` in the above statement. The `transactionID` is made up of the account ID and the transaction timestamp right down to nanoseconds.

    ```go
    transactionID := response.ID

    time.Sleep(1 * time.Second)
    ```

    You can now request a `receipt` and print the status using the following code. Although this is not a mandatory step, it does verify that your transaction successfully reached network consensus.

    ```go
    receipt, err := client.GetTransactionReceipt(transactionID).Answer()
    if err != nil {
        panic(err)
    }

    fmt.Printf("Transfer Transaction Status: %v \n", receipt.Status)

    time.Sleep(1 * time.Second)
    ```

    A status code of __1__ indicates success.

    Finally, you can requery the balance of both accounts to verify that 1 _hbar_ was indeed transferred from your account to that of your friend.

    ```go
    myBalance, err = client.GetAccountBalance(myAccount).Answer()
    if err != nil {
        panic(err)
    }

    fmt.Printf("Your new balance: %v \n", myBalance)

    time.Sleep(1 * time.Second)

    otherAccount := hedera.NewAccountID(0, 0, 1100)

    otherBalance, err = client.GetAccountBalance(otherAccount).Answer()
    if err != nil {
        panic(err)
    }

    fmt.Printf("Friend new balance: %v \n", otherBalance)
    ```

6. Run the program again by executing:
    ```bash
    $> go run main.go
    ```

You have just completed our demo application for facilitating micropayment transactions. Congratulations!