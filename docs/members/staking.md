---
title: API3
pageHeader: Members
outline: deep
---

<PageHeader/>

# Staking Tokens

Staking API3 tokens in the
[staking pool](https://docs.api3.org/explore/dao-members/dao-pool.html) makes
you eligible for rewards and governance rights.

The DAO uses an adaptive reward system to incentivize staking. Rewards will
increase to incentivize staking when the total staked is below the staking
target, and decrease to reduce token emissions when the total staked is above
the staking target. To see the current funding status, you can see the
percentage of target met.

## 1. Deposit Tokens

<!-- deposit and withdraw video -->
<Video src="https://www.youtube.com/embed/PdSE-SiUx3M"/>

Before tokens can be staked you must deposit them in the staking pool. Doing so
will remove them from your wallet and place them into the staking pool under the
control of its smart contracts. Your Balance reflects the amount of tokens you
have deposited and not yet staked. Withdrawable (and unstaked) tokens can be
removed from the staking pool at any time and returned to your wallet.

To deposit tokens, click the Deposit button. If this is your first time
depositing, you’ll have to authorize the staking pool smart contract first by
clicking Approve. Note that deposited tokens are not staked. They will not earn
rewards or grant you governance rights.

You can only withdraw tokens that are not staked. The Balance section displays
the maximum amount that can be withdrawn under “Withdrawable”. To withdraw
tokens, click the Withdraw button. The tokens withdrawn are returned to your
wallet.

## 2. Stake Tokens

<!-- stake and earn video -->
<Video src="https://www.youtube.com/embed/DQMsgQvkg7k"/>

To stake tokens, click the Stake button. The number of tokens available to stake
depends on the number of tokens deposited and are available to withdraw as
displayed in the Balance box as under “Withdrawable”.

## 3. Claim Rewards

<!-- deposit and withdraw video -->
<Video src="https://www.youtube.com/embed/__zhi8N2erI"/>

You will not be able to withdraw your rewards for a year after receiving them.
Since rewards get minted every week, you can think of this as a rolling unlock
(the rewards you receive this week will get unlocked 1 year later, the rewards
you will receive next week will get unlocked 1 year 1 week later, etc.) This 1
year-lock is the secret sauce to good decentralized governance, it essentially
aligns the incentives of the stakers/governors with the ones of the
DAO/project/token for a whole year. Unstake tokens to claim your unlocked
rewards. Note that unstaking will revoke your most recent weekly reward payment,
and scheduling tokens to be unstaked stops earning rewards for those tokens.

To protect the DAO from proposal spam, unstaking is subject to a seven day
waiting period. To initiate unstaking, click “Initiate Unstake”.

After the unstaking has been initiated, the interface will display the pending
amount of tokens that are being unstaked and a countdown timer. Tokens cannot be
unstaked until the timer is complete.

Once the seven day timer has run out, there are two ways to complete the
process:

1. **Unstake & Withdraw:** This option will immediately unstake your tokens and
   deposit them into your wallet.
2. **Unstake:** This option will unstake your tokens while keeping them
   deposited in the DAO. From here you can use the Withdraw link to move the
   tokens to your wallet at any time or stake them again.
