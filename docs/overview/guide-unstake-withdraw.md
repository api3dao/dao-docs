---
title: API3
pageHeader: Overview
description:
  How to unstake and withdraw API3 tokens from the staking pool, and why rewards
  take a year to unlock.
outline: [2, 3]
---

<PageHeader/>

# Guide: Unstake and Withdraw

A guide to unstaking and withdrawing using the
[DAO Dashboard](https://api3.eth.limo/#/). This document addresses a common
question often asked by depositors: _Why do my token rewards take longer to
withdraw than the tokens I deposited?_

<!-- prettier-ignore -->
::: danger _Unstake and Withdraw_ deadline 
The [DAO Dashboard](https://api3.eth.limo/#/) stays online until the end of March 2028, with only unstake, withdraw, and
undelegate available. This is a result of the [DAO migration primary proposal #17](https://ivory-general-mouse-678.mypinata.cloud/ipfs/bafybeihrqolxtycbb4oadz5phdvrk6d2m3z6etfcj663mon242qeox26dq) which ends staking pool rewards.
:::

Use the [DAO Tracker](https://tracker.api3.org/wallets), until the end of March
2028, for an overview of your pool status and activity.

## The two clocks

Every API3 staker has two separate waiting periods, and confusing them is the
most common source of "where are my tokens?" questions.

| What                             | Wait before you can withdraw | Starts counting when                   |
| -------------------------------- | ---------------------------- | -------------------------------------- |
| **Tokens you deposited**         | **7 days**                   | You click **Initiate Unstake**         |
| **Tokens you earned as rewards** | **1 year**                   | Each individual weekly reward was paid |

The 7-day clock is started automatically once the unstake is initiated. The
1-year clock is long, and it is **already running separately for every weekly
reward you have ever received** — you cannot start it, speed it up, or reset it
by unstaking.

**About the rewards lock:** rewards are minted into the pool once a week (on
Thursdays) and are automatically staked, so they compound along with your
deposit. Each week's reward unlocks one year from the day it was paid. This is a
**rolling unlock**, not a single anniversary — even after exactly one year of
staking, only your _oldest_ reward has unlocked. The other 51 weeks' worth are
still locked, each with its own date.

## The process: two steps

Initiating, unstaking, and each withdrawal is a separate Ethereum transaction.
Keep some ETH in your wallet, and consider how many withdrawal trips you want to
make.

### Step 1 — Unstake

1. On the DAO Dashboard, click **Initiate Unstake**, choose the amount (or
   **Max**), and confirm.
2. A **7-day countdown** starts and the tokens will be unstaked after the wait
   period.
3. When the countdown ends, click **Unstake**. Do this promptly — if you wait
   too long after the timer ends, you may have to initiate again and wait
   another seven days.

Your tokens are now unstaked and sitting in your pool **Balance**. They are not
yet in your wallet.

### Step 2 — Withdraw

1. Look at the **Withdrawable** figure in the Balance section. This is the
   amount you can take out right now: your deposit plus any rewards that have
   passed their one-year mark.
2. Click **Withdraw**, enter that amount (or **Max**), and confirm. The tokens
   go to your wallet.
3. Any rewards still inside their one-year lock stay in the pool. Each weekly
   reward unlocks one year after the Thursday it was paid, and on that date it
   is added to **Withdrawable** automatically. Come back and repeat Step 2
   whenever you want to collect them — **no further 7-day wait is needed**.

> **What about the "Unstake & Withdraw" button?**
>
> It combines both steps into one transaction, and it is intended for stakers
> who have **no locked rewards** — for example, someone who staked and unstaked
> within the same week. If you have been earning rewards, use **Unstake** and
> then **Withdraw** as described above.

## Example: a typical small staker

**Alex** deposited and staked **1,000 API3** on **Wednesday, October 29, 2025**.
Rewards have been paid every Thursday since, starting October 30, 2025. Today is
**Thursday, October 29, 2026**, and Alex wants everything out — deposit and
rewards.

> **Assumption for illustration:** a flat 30.1% APR, compounded weekly. The real
> APR adjusts every week, so Alex's actual numbers will differ — but the _shape_
> of the timeline is identical for everyone.

### Where Alex stands today

|                                                    | Amount        |
| -------------------------------------------------- | ------------- |
| Original deposit                                   | 1,000.00      |
| Rewards earned (53 weekly payments, ~5.8–7.8 each) | ~357.85       |
| **Total staked**                                   | **~1,357.85** |

### Step 1 — Unstake

**Thu Oct 29, 2026:** Alex clicks **Initiate Unstake → Max**. The 7-day
countdown starts.

**Thu Nov 5, 2026:** the countdown ends. Alex clicks **Unstake**. Everything is
now unstaked and sitting in Alex's pool Balance.

### Step 2 — Withdraw

**Thu Nov 5, 2026 — first withdrawal.** The Dashboard shows:

|                                   | Amount        | Why                                        |
| --------------------------------- | ------------- | ------------------------------------------ |
| Original deposit                  | 1,000.00      | 7-day wait is over                         |
| Oldest reward (paid Oct 30, 2025) | ~5.79         | It has passed its 1-year mark              |
| **Withdrawable now**              | **~1,005.79** | Alex withdraws this to the wallet          |
| **Still locked in the pool**      | **~344**      | Each unlocks on its own 1-year anniversary |

This is the moment most people are surprised: **the deposit comes back in a
week, but roughly 344 tokens of rewards are still waiting.** Nothing is lost —
they are simply on the 1-year clock.

**November 2026 → October 2027 — rewards unlock week by week.** Every Thursday,
about 6–8 more tokens are added to **Withdrawable**. Of the ~344 locked tokens,
approximately:

| By this date     | Unlocked since Nov 5 (ready to withdraw) | Still locked |
| ---------------- | ---------------------------------------- | ------------ |
| Nov 5, 2026      | 0                                        | ~344.3       |
| Dec 31, 2026     | ~47.5                                    | ~296.7       |
| Mar 31, 2027     | ~129.6                                   | ~214.6       |
| Jun 30, 2027     | ~218.1                                   | ~126.2       |
| Sep 30, 2027     | ~313.4                                   | ~30.8        |
| **Oct 22, 2027** | **~344.3 (all of it)**                   | **0**        |

The last reward Alex kept (paid Oct 22, 2026) unlocks around **October 22,
2027**.

**Collecting the rest — Alex's choice.** Each withdrawal costs gas, so for a
small balance it rarely makes sense to collect weekly. Common approaches:

- **One trip:** come back once in late October 2027 and **Withdraw** the full
  ~344.
- **A few trips:** withdraw quarterly or semi-annually as the table above fills
  in.

### Alex's timeline at a glance

```
STEP 1 — UNSTAKE
Oct 29, 2026   Initiate Unstake ──┐
                                  │  7-day wait
Nov 5, 2026    Unstake ───────────┘

STEP 2 — WITHDRAW
Nov 5, 2026    Withdraw ~1,005.79   ← deposit + oldest reward
               │
               │  ~6–8 tokens unlock every Thursday
               ▼
Oct 22, 2027   Last reward unlocks → Withdraw the remaining ~344
```

## Quick FAQ

**I unstaked a week ago and my rewards aren't withdrawable. Is something
wrong?**

No. The 7-day wait only applies to Step 1. Each reward still has to reach its
own one-year anniversary before Step 2 can release it.

**Can I get my rewards out faster by unstaking earlier?**

No. The one-year lock is tied to when each reward was paid, not to when you
unstake.

**Do locked rewards keep earning once I've unstaked?**

No. Tokens scheduled for unstaking stop earning immediately. If you want them to
keep compounding, leave them staked — but every reward you keep earning starts a
fresh one-year lock of its own.

**Do I need to unstake again to collect rewards as they unlock?**

No. Once you've completed Step 1, just return to the Dashboard and repeat Step 2
for whatever **Withdrawable** shows.

**Where do I check what I can take out?**

The **Withdrawable** amount in the Balance section of the DAO Dashboard is the
authoritative number at any moment.

---

_Rules referenced from the API3 DAO documentation:
[Staking tokens](https://dao-docs.api3.org/members/staking.html) ·
[Rewards](https://dao-docs.api3.org/overview/rewards.html) ·
[Pool contract](https://dao-docs.api3.org/technical/pool.html) ·
[Reward calculation and distribution](https://dao-docs.api3.org/technical/distribution.html)_
