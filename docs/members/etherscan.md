---
title: API3
pageHeader: Members
outline: deep
---

<PageHeader/>

# Using the pool on Etherscan

The DAO Dashboard stays online until the end of March 2028, with only unstake,
withdraw and undelegate available. The steps below do the same on the
[DAO pool contract](https://etherscan.io/address/0x6dd655f10d4b9E242aE186D9050B68F725c76d76#code)
on Etherscan, without the dashboard. The pool no longer pays rewards, so the
recommendation is to unstake and withdraw.

Amounts are in the smallest unit of API3, which has 18 decimals. 1 API3 is
`1000000000000000000`.

## Reading your position

Open the **Read Contract** tab of the pool contract and enter your wallet
address in:

| Function       | Returns                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `userStake`    | Your staked API3, locked rewards included.                                                                                                                         |
| `userLocked`   | Your rewards that are still locked.                                                                                                                                |
| `getUser`      | `unstaked`, your API3 deposited in the pool but not staked, `vesting`, `unstakeAmount`, the API3 scheduled to unstake, and `unstakeScheduledFor`, when it matures. |
| `userDelegate` | The address your stake is delegated to, or the zero address if it is not delegated.                                                                                |

`unstakeScheduledFor` is a Unix timestamp, and zero means no unstake is
scheduled.

## Unstaking and withdrawing

Open the **Write Contract** tab and connect the wallet that holds the position
with **Connect to Web3**. Each call is a transaction and costs gas.

1. Call `scheduleUnstake` with the amount to unstake, at most your `userStake`.
   Only one unstake can be scheduled at a time.
2. Wait seven days, until `unstakeScheduledFor` has passed.
3. Call `unstake` with your wallet address. The amount moves to your deposited
   balance in the pool, not to your wallet. Anyone can make this call for you.
4. Call `withdrawRegular` with the amount to send to your wallet.

You can withdraw your deposited balance minus what your locked rewards and
vesting still hold: `unstaked + userStake - userLocked - vesting`, at most
`unstaked`. A larger amount reverts with `Pool: Not enough unlocked funds`.

`unstakeAndWithdraw` does steps 3 and 4 in one call when the whole unstaked
amount is withdrawable. It reverts when what stays staked or deposited does not
cover your locked rewards and vesting, for example on a full exit with locked
rewards, so call `unstake` and `withdrawRegular` separately.

If `vesting` is not zero and its release has started, call
`updateTimelockStatus` with your address to release the vested part.

Each reward unlocks a year after it was minted. Call `withdrawRegular` again as
your rewards unlock. A year after the last reward, nothing is locked.

If `withdrawRegular` runs out of gas, which can happen after very frequent
staking and unstaking, call `precalculateUserLocked` with your address and a
number of epochs per call, such as `10`, until it emits `CalculatedUserLocked`.
Then call `withdrawPrecalculated` with the amount in the same week.

## Changing a pool delegation

Stake delegated in the pool still counts for the delegate on Snapshot (see
[Pool delegation](https://docs.api3.org/dao/voting-power.html#pool-delegation)).

- `undelegateVotingPower` clears the delegation.
- `delegateVotingPower` with an address delegates your stake to it, or changes
  the delegate. The pool refuses a delegate who is delegating in the pool
  themselves.

The pool refuses either change within a week of the last one.

## Depositing and staking

`depositRegular`, `stake` and `depositAndStake` still work on the contract, but
the pool pays no rewards and staking is not needed to vote. API3 in your wallet
votes on Snapshot as well (see
[Voting power](https://docs.api3.org/dao/voting-power.html)).
