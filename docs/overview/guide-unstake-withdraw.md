---
title: API3
pageHeader: Overview
description:
  How to exit the API3 staking pool with the DAO Dashboard, and why rewards take
  a year to unlock.
outline: [2, 3]
---

<PageHeader/>

# Guide: Exiting the Staking Pool

This guide shows how to exit the staking pool with the
[DAO Dashboard](https://api3.eth.limo/#/): three steps that move your deposit
and rewards to your wallet. It also answers a question stakers often ask: _Why
do my token rewards take longer to withdraw than the tokens I deposited?_

<!-- prettier-ignore -->
::: danger DAO Dashboard and DAO Tracker retirement
The DAO Dashboard stays online until the end of March 2028, with only unstake, withdraw, and
undelegate available. This is a result of the [DAO migration primary proposal #17](https://ivory-general-mouse-678.mypinata.cloud/ipfs/bafybeihrqolxtycbb4oadz5phdvrk6d2m3z6etfcj663mon242qeox26dq) which ends staking pool rewards.
The [DAO Tracker](https://tracker.api3.org/) stays up over the same period for an overview of your pool status and activity.
Your tokens are never lost: unstaking and withdrawing stay possible at any time by [calling the pool contract directly](/members/etherscan), with or without the dashboard.
:::

## The two clocks

Every API3 staker has two separate waiting periods, and confusing them is the
most common source of "where are my tokens?" questions.

| What                             | Wait before you can withdraw | Starts counting when                               |
| -------------------------------- | ---------------------------- | -------------------------------------------------- |
| **Tokens you staked**            | **7 days**                   | Your **Initiate Unstake** transaction is confirmed |
| **Tokens you earned as rewards** | **1 year**                   | Each individual weekly reward was paid             |

Rewards were minted into the pool every Thursday and staked automatically. Each
one has its own 1-year clock that started when it was paid, so rewards unlock
one week at a time, not all on one anniversary. You cannot start, speed up, or
reset these clocks by unstaking. The pool has paid no rewards since the
migration. The last reward was minted on October 29, 2026, so every reward is
unlocked by the end of October 2027.

## The process: three steps

Each step below is a separate Ethereum transaction, so keep some ETH in your
wallet to pay for gas.

### Step 1 - Initiate Unstake

On the DAO Dashboard, click **Initiate Unstake**, choose the amount (or
**Max**), and confirm the transaction in your wallet. A 7-day countdown starts
once the transaction is confirmed.

### Step 2 - Unstake

When the countdown ends, click **Unstake** and confirm the transaction. There is
no deadline: the unstake stays available until you do it.

Your tokens are now unstaked and sitting in your pool balance. They are not yet
in your wallet.

### Step 3 - Withdraw

Look at the **Withdrawable** figure in the Balance section. This is the amount
you can take out right now: your deposit plus any rewards that have passed their
1-year mark. Click **Withdraw**, enter that amount (or **Max**), and confirm the
transaction. The tokens are in your wallet once it is confirmed.

Any rewards still inside their 1-year lock stay in the pool. Each weekly reward
unlocks 1 year after the Thursday it was paid, and on that date it is added to
**Withdrawable** automatically. Come back and repeat Step 3 whenever you want to
collect them. No further 7-day wait is needed.

::: info What about the "Unstake & Withdraw" button?

It combines Steps 2 and 3 into one transaction, and it is intended for stakers
who have no locked rewards. From the end of October 2027 that is everyone,
because the last rewards unlock then. Before that, use **Unstake** and then
**Withdraw** as described above.

:::

## Example: a typical small staker

Alex deposited and staked 1,000 API3 on Wednesday, October 29, 2025. A year of
weekly rewards, about 358 API3, brought the stake to about 1,358. On Thursday,
October 29, 2026, Alex decided to take everything out, deposit and rewards. The
numbers are only an illustration, but the timeline works the same way for
everyone.

1. Thu Oct 29, 2026: Alex sends **Initiate Unstake** with **Max**. The 7-day
   countdown starts once the transaction is confirmed.
2. Thu Nov 5, 2026: the countdown ends. Alex sends **Unstake**. Once it is
   confirmed, everything is unstaked and sitting in Alex's pool balance.
3. Thu Nov 5, 2026: Alex sends **Withdraw** with **Max**. About 1,012 tokens go
   to the wallet: the deposit plus the two oldest rewards, which have passed
   their 1-year mark.
4. Nov 2026 to Oct 2027: the other ~346 tokens unlock week by week, about 6-8
   every Thursday, until the last one on Oct 28, 2027. Since each withdrawal
   costs gas, Alex comes back once or a few times and sends **Withdraw** again,
   with no new 7-day wait. A single visit between Oct 28, 2027 and the end of
   March 2028, when the Dashboard closes, collects everything that is left.

The withdrawal on Nov 5 is where most people are surprised: the deposit comes
back in a week, but about 346 tokens of rewards stay locked. Nothing is lost.
They are simply on the 1-year clock.

## Quick FAQ

**I unstaked a week ago and my rewards aren't withdrawable. Is something
wrong?**

No. The 7-day wait only applies between Step 1 and Step 2. Each reward still has
to reach its own 1-year anniversary before Step 3 can release it.

**Do staked tokens still earn rewards?**

No. The pool has paid no rewards since the migration, whether the tokens are
staked or not.

---

_Rules referenced from the API3 DAO documentation:
[Staking tokens](/members/staking) · [Rewards](/overview/rewards) ·
[Pool contract](/technical/pool) ·
[Reward calculation and distribution](/technical/distribution)_
