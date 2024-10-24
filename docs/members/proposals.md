---
title: API3
pageHeader: Members
outline: deep
---

<PageHeader/>

# Working with Proposals

Proposals are an important part of DAO governance, and can be used to fund DAO
projects or ratify DAO-level decisions like updating the stake target. Staking
tokens in the pool gives you governance rights to create and vote on proposals.
Use the Governance page to create proposals, browse active proposals, view the
treasury, and delegate your votes.

## Understanding proposals

<!-- proposals and history video -->
<Video src="https://www.youtube.com/embed/k0XEkJtWAGk"/>

To create a proposal, there are two requirements:

1. You haven't created a proposal in the last 7 days.
2. You need at least 0.1% of the staking pool to create a proposal.

To view the percentage of staked tokens in the pool for an address, visit the
[DAO Tracker wallets page](https://tracker.api3.org/wallets).

In order for your proposal to succeed, a few steps are highly recommended.

1. Promote your idea and gather feedback on the API3 forum using a
   [sentiment check post](https://forum.api3.org/t/sentiment-check-template/56).
   Generally, ideas receiving community engagement on the forum are more likely
   to pass once crafted as official proposals.
2. Create an
   [official proposal](https://forum.api3.org/t/api3-dao-example-proposal-template/52)
   post on the API3 forum. This should contain a link to the
   [proposal description on IPFS](https://docs.api3.org/guides/dao-members/proposals.md#using-ipfs-for-proposals).
3. After receiving feedback from the above steps, create a formal proposal using
   the DAO dashboard as described below.

Proposals may be either primary or secondary. Primary proposals require an
absolute majority vote to pass, while secondary proposals require 15% and a
relative majority support.

## Creating a proposal

<!-- create a proposal video -->
<br/>
<Video src="https://www.youtube.com/embed/XO1iA3wSYMQ"/>

1. Click **New Proposal** on the Governance page.
2. **Proposal Type** \
   Proposals can be either Primary or Secondary voting types. These two types
   have access to separate treasuries, different voting settings, and different
   permissions to change contract settings. For a technical breakdown of the
   different permissions granted to the DAO's proposal types (and corresponding
   Agents) see this
   [README](https://github.com/api3dao/api3-dao/blob/develop/packages/dao/README.md#permissions).
3. **Title** \
   Enter a descriptive proposal title.The title will appear on the Governance
   page and is used to identify the proposal.
4. **Description**

   While a description can be typed text, it’s highly recommended to instead use
   a PDF hosted on IPFS and adding a link back to the forum where you posted
   your proposal for discussion.

   **Why use IPFS?** Consider this use case: You posted on the
   [API3 forum](https://forum.api3.org/) about a potential proposal. You
   received positive feedback and decided to formally create a proposal using
   the DAO dashboard. In the proposal's description field you provide a link
   back to the forum so people can again see the proposal details. How does the
   voter know that it's the exact same proposal they had read earlier in the
   forum? IPFS addressing content by its hash is convenient here, because any
   change you'll make to your proposal will change its hash.

   To create an IPFS link, upload a PDF version of your proposal to an IPFS
   provider like Pinata or Fleek. After the file is uploaded, the respective
   provider will create a URL with the IPFS hash for the PDF. Add the URL to
   your forum posting and the description field of your DAO dashboard proposal.

   Remember that the URL the voter sees in the DAO dashboard proposal
   description field is final and should match the URL on the forum.

5. **Target Contract Address** This is the address of the contract to call. For
   example, the commonly used target contract for USDC is
   `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`.

6. **Target Contract Signature** This defines the signature of the function to
   call within the target contract. For the target contract USDC address
   mentioned above use the exact signature below, without spaces (leading or
   otherwise):

```js
transfer(address, uint256);
```

::: danger Please note  
 Do not alter the signature in any way or else your proposal will be invalid.
:::

7. **ETH Value** \
   You can use zero if the target function is not payable.
8. **Parameters**

   These are the arguments that will be used to satisfy the signature of the
   target contract function in step 6.

   For example, if you use the USDC contract address
   0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48, you will be calling its transfer
   function, as indicated in step 6, should the proposal pass.

   If you wanted to transfer 499,999 USDC to a specific wallet (in this example
   0xF…EE9), the respective Agent (primary or secondary) would be calling the
   USDC contract to transfer the USDC to the desired wallet. The arguments would
   look like this:

   ```json
   ["0xF4EB52Cf9D31a...d1663d78ddDEE9", "499999000000"]
   ```

- The arguments must be provided in JSON array format where the values are
  stringified.
- USDC uses 6 decimal places of precision as opposed to 18 that many other ERC20
  tokens use. Consequently, multiply the desired $USD by 10^6 to get the USDC
  amount to enter.

  Note that since transfer(address,uint256) function transfers funds from the
  sender to the specified address, the USDC is asked to be supplied from the
  Agent's balance.

  **ENS Names:** You are also encouraged to use the
  [ENS app](https://app.ens.domains/) to register a name and associate it with
  an Ethereum account. Then, while entering your proposal parameters, you can
  use this ENS name instead of the account address. Before making the
  transaction that will create the proposal, the DAO dashboard will look up the
  address that the ENS name is pointing to and use the raw address in the
  proposal. Therefore, changing the address that the ENS name is pointing to
  after this look up operation WILL NOT have an effect on the proposal.

  For voters to see your ENS name instead of the raw address on the proposal
  details page, you will have to use the [ENS app](https://app.ens.domains/) to
  set a reverse record pointing to your ENS name (i.e., you need to have your
  raw address point to the ENS name). If your proposal will make a
  transfer(address,uint256) call to an ERC20 token contract where the address is
  the address of a multisig wallet, you can
  [set a reverse record with the multisig](https://medium.com/the-ethereum-name-service/you-can-now-manage-ens-names-with-gnosis-safe-9ddcb7e6c4ac)
  to your ENS name. See Parameters in
  [this proposal](https://api3.eth/#/history/secondary-31) for an example.

9. Click **Create** \
   The proposal is then added to the proposal list and can be voted on.
10. **Return to the
    [API3 forum](https://forum.api3.org/c/official-proposals/5)** \
    Add a comment to your post with a link to your newly created proposal. This
    will help encourage community members to vote.

## Proposal Execution

A proposal is ready for execution if all of the following requirements have been
met:

1. The proposal hasn't already been executed
2. The proposal's voting period has ended
3. The total "For" votes exceeds the "Against" votes
4. Depending on the proposal type you selected, the respective amount of voting
   power voted “For” the proposal.

Both primary and secondary type proposals execute immediately once 50% of all
voting power has voted "For" them.
