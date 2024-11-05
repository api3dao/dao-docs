---
title: API3
pageHeader: Technical
outline: deep
---

<PageHeader/>

# Reward Calculation And Distribution

The staking reward is programmed to increase while the staked amount is below
the staking target, and vice versa. There is no predetermined schedule.

Reward amount is represented as APR (annual percentage rate) in API3 tokens. You
can derive APY (annual percentage yield) using an
[online calculator](https://www.omnicalculator.com/finance/apy). There is a
governable "APR update step", which is the step size each week the APR will be
updated with. Also there are governable minimum and maximum APR values, but
these (especially maximum APR) are there as safety measures. In general,
governing the stake target will be the primary tool for regulating rewards.

Rewards are added as staked API3 tokens into the staking pool each time the
mintReward function is called. mintReward is callable by anyone, once per
"epoch" (and single epoch length is 1 week). When it is called, an amount of
API3 tokens is minted and added to the staking pool. See the
[smart contract source](https://github.com/api3dao/api3-dao/blob/main/packages/pool/contracts/RewardUtils.sol#L24)
for more information.

In addition, each time mintReward is called, the annual percentage (the reward
rate) is updated up or down by the APR update step size (1%), according to
whether the total number of staked tokens is above or below its target. The
initial target is 50%, so if the total number of staked tokens is less than 50%
of the total token supply when mintReward is called, APR will be raised by 1%
for the next reward mint (and vice versa). Thus, APR will constantly be
adjusted, but it will always stay between a designated maximum and minimum.

## Example

Rewards Distribution User X stakes 600 tokens and user Y stakes 400, so there is
a 60% (X) 40% (Y) split ownership in the 1000 token staking pool. For a
particular week the reward mint is 1% (10 total tokens) and the pool is now 1010
tokens. X at 60% now has 606 tokens and Y has 404. Remember that the 10 reward
tokens are locked for a period of one year.
