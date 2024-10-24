# Overview

## What is the API3 DAO?

API3 delegates much of its governance to the vote of a Decentralized Autonomous
Organization (DAO). API3 is a collaborative effort to build, manage and monetize
data feeds at scale. To achieve delegated governance and distribute grants in a
fully decentralized way, the incentives and processes of the participants are
reconciled through the governance, security, and value capture utilities of the
API3 token and its powers in the API3 DAO.

## Governance

The DAO votes on high-level matters such as staking incentives and
collateralization (parameters of the DAO smart contract itself), as well as
grant proposals that directly transfer DAO treasury assets to contributors of
API3.

The API3 ecosystem is a single token environment, using its native token (API3).
Check out the Medium post
[API3 Tokenomics Update](https://medium.com/api3/api3-tokenomics-update-f032d6e49b30)
for an in-depth overview on API3 tokenomics. To participate in governance, you
need to stake API3 tokens in the DAO’s staking pool.

## Rewards

Through staking API3 tokens in the pool, you gain access to weekly
[rewards](https://docs.api3.org/explore/dao-members/rewards.md) (unlocked
after one year) and are also granted voting rights on active DAO proposals and
rewards.

Why one year? Since rewards get minted every week, you can think of this as a
rolling unlock (the rewards you receive this week will get unlocked 1 year
later, the rewards you will receive next week will get unlocked 1 year 1 week
later, etc.) This 1 year-lock is the secret sauce to good decentralized
governance, it essentially aligns the incentives of the stakers/governors with
the ones of the DAO/project/token for a whole year.

To read more about rewards, <span style="text-decoration:underline;">visit the
Rewards Calculation and Distribution </span>section.

## DAO Contributors

Contributors receive grants from the DAO and are often composed of hierarchical
teams which manage, streamline, and secure the success of their deliverables to
API3.

A best-practice workflow is to form off-chain teams and apply for grants to
execute one-time projects or time-defined operations that will benefit API3. The
team makes the grant application with a multisig that has the team members
assigned as owners, and the DAO permissionless-ly transfers the grant to the
multisig if the proposal is accepted and passed by the DAO contract logic.

This team-based governance scheme is scalable in terms of gas costs, as it
requires fewer proposals to be voted on at the DAO level, and in practical terms
as it does not require the constant attention of all governing parties to a wide
variety of minute details. Furthermore, it allows critical operations such as
data feed management to be executed swiftly and based on expert opinion.

## DAO Tracker

The [DAO Tracker](https://tracker.api3.org/) is a community-developed tool that
provides additional insight into the DAObeyond what is offered by the
intentionally minimalist DAO Dashboard. It features data about all aspects of
the DAO, including staking and reward data, members, proposals, and the API3 DAO
treasury.

Its [open source codebase](https://github.com/api3dao/api3-tracker) was
developed by GitHub user EnormousCloud.

# Using the DAO Dashboard

The [DAO Dashboard](https://dao.api3.org/) is the portal to participate in the
API3 DAO. It is aimed at API3 members and others that want to interact with the
DAO or modify/reuse any of its infrastructure. The DAO requires a web3 wallet,
such as [MetaMask](https://metamask.io/download/), to be integrated with your
browser. Be sure your wallet is connected to the Ethereum mainnet.

## Staking Tokens

(staking page overview video)

Staking API3 tokens in the
[staking pool](https://docs.api3.org/explore/dao-members/dao-pool.md) makes
you eligible for rewards and governance rights.

The DAO uses an adaptive reward system to incentivize staking. Rewards will
increase to incentivize staking when the total staked is below the staking
target, and decrease to reduce token emissions when the total staked is above
the staking target. To see the current funding status, you can see the
percentage of target met.

### 1. Deposit Tokens

(deposit and withdraw video)

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

### 2. Stake Tokens

(stake and earn video)

To stake tokens, click the Stake button. The number of tokens available to stake
depends on the number of tokens deposited and are available to withdraw as
displayed in the Balance box as under “Withdrawable”.

### 3. Claim Rewards

(unstake and claim video)

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

1. **Unstake & Withdraw: **This option will immediately unstake your tokens and
   deposit them into your wallet.
2. **Unstake: **This option will unstake your tokens while keeping them
   deposited in the DAO. From here you can use the Withdraw link to move the
   tokens to your wallet at any time or stake them again.

## Working with Proposals

(proposals and history video)

Proposals are an important part of DAO governance, and can be used to fund DAO
projects or ratify DAO-level decisions like updating the stake target. Staking
tokens in the pool gives you governance rights to create and vote on proposals.
Use the Governance page to create proposals, browse active proposals, view the
treasury, and delegate your votes.

### Proposal Creation

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
   [proposal description on IPFS](https://docs.api3.org/guides/dao-members/proposals.html#using-ipfs-for-proposals).
3. After receiving feedback from the above steps, create a formal proposal using
   the DAO dashboard as described below.

Proposals may be either primary or secondary. Primary proposals require an
absolute majority vote to pass, while secondary proposals require 15% and a
relative majority support.

#### Creating a formal proposal

(create a proposal video)

1.  Click **New Proposal** on the Governance page.
2.  **Proposal Type** \
    Proposals can be either Primary or Secondary voting types. These two types
    have access to separate treasuries, different voting settings, and different
    permissions to change contract settings. For a technical breakdown of the
    different permissions granted to the DAO's proposal types (and corresponding
    Agents) see this
    [README](https://github.com/api3dao/api3-dao/blob/develop/packages/dao/README.md#permissions).
3.  **Title** \
    Enter a descriptive proposal title.The title will appear on the Governance
    page and is used to identify the proposal.
4.  **Description**

    While a description can be typed text, it’s highly recommended to instead
    use a PDF hosted on IPFS and adding a link back to the forum where you
    posted your proposal for discussion.

    Why use IPFS?

    Consider this use case: You posted on the
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

5.  **Target Contract Address** \
    This is the address of the contract to call. For example, the commonly used
    target contract for USDC is 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.
6.  **Target Contract Signature** \
    This defines the signature of the function to call within the target
    contract. For the target contract USDC address mentioned above use the exact
    signature below, without spaces (leading or otherwise):

         \

    transfer(address,uint256)

        Do not alter the signature in any way or else your proposal will be invalid.

7.  **ETH Value** \
    You can use zero if the target function is not payable.
8.  **Parameters**

    These are the arguments that will be used to satisfy the signature of the
    target contract function in step 6.

    For example, if you use the USDC contract address
    0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48, you will be calling its transfer
    function, as indicated in step 6, should the proposal pass.

    If you wanted to transfer 499,999 USDC to a specific wallet (in this example
    0xF…EE9), the respective Agent (primary or secondary) would be calling the
    USDC contract to transfer the USDC to the desired wallet. The arguments
    would look like this:

    ["0xF4EB52Cf9D31a...d1663d78ddDEE9","499999000000"]

- The arguments must be provided in JSON array format where the values are
  stringified.
- USDC uses 6 decimal places of precision as opposed to 18 that many other ERC20
  tokens use. Consequently, multiply the desired $USD by 10^6 to get the USDC
  amount to enter.

  Note that since transfer(address,uint256) function transfers funds from the
  sender to the specified address, the USDC is asked to be supplied from the
  Agent's balance.

  ENS Names

  You are also encouraged to use the [ENS app](https://app.ens.domains/) to
  register a name and associate it with an Ethereum account. Then, while
  entering your proposal parameters, you can use this ENS name instead of the
  account address. Before making the transaction that will create the proposal,
  the DAO dashboard will look up the address that the ENS name is pointing to
  and use the raw address in the proposal. Therefore, changing the address that
  the ENS name is pointing to after this look up operation WILL NOT have an
  effect on the proposal.

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

### Proposal Execution

A proposal is ready for execution if all of the following requirements have been
met:

1. The proposal hasn't already been executed
2. The proposal's voting period has ended
3. The total "For" votes exceeds the "Against" votes
4. Depending on the proposal type you selected, the respective amount of voting
   power voted “For” the proposal.

Both primary and secondary type proposals execute immediately once 50% of all
voting power has voted "For" them.

## Voting

(vote and delegate video)

Staking grants DAO members the ability to vote on proposals. Your voting power
is calculated by the number of tokens you have staked divided by the total
number of tokens staked at the time the proposal was made. To Vote, select a
proposal on the Governance page and click Vote to cast a vote “For” or
“Against”.

If you do not want to vote on each proposal yourself, you can delegate your
votes to another wallet. To delegate your votes, navigate to the Governance page
and click “Delegate”. Enter the address of the wallet you wish to delegate your
votes to or the ENS name associated with it, and finalize the transaction.

When you delegate your vote to another user, only that person can vote for you.
However, if the person you delegated to has also delegated to someone, your
voting power is discarded. You can update your delegator after seven days have
passed since your last delegation.

# Contracts

## Overview

The core of the DAO is a set of smart contracts based on Aragon's
[aragonOS](https://github.com/aragon/aragonOS). The code for all DAO contracts
can be found in the [api3-dao](https://github.com/api3dao/api3-dao/) GitHub
repo, along with instructions for how to deploy a copy of the DAO. Below is a
list of contract addresses.

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image1.png 'image_tooltip') \

<table>
  <tr>
   <td><strong>Name</strong>
   </td>
   <td><strong>Mainnet Contract Addresses</strong>
   </td>
  </tr>
  <tr>
   <td>DAO Kernel
   </td>
   <td><code><a href="https://etherscan.io/address/0x593ea926ee9820a933488b6a288433c387d06dba">0x593ea926ee9820a933488b6a288433c387d06dba</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>ACL
   </td>
   <td><code><a href="https://etherscan.io/address/0x1e7ecc6d3b5b4cfdfc71cb7c3ea9ac4a55f4195a">0x1e7ecc6d3b5b4cfdfc71cb7c3ea9ac4a55f4195a</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>Staking Pool
   </td>
   <td><code><a href="https://etherscan.io/address/0x6dd655f10d4b9e242ae186d9050b68f725c76d76">0x6dd655f10d4b9e242ae186d9050b68f725c76d76</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>API3 Token
   </td>
   <td><code><a href="https://etherscan.io/address/0x0b38210ea11411557c13457D4dA7dC6ea731B88a">0x0b38210ea11411557c13457D4dA7dC6ea731B88a</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>Time-lock Manager
   </td>
   <td><code><a href="https://etherscan.io/address/0xFaef86994a37F1c8b2A5c73648F07dd4eFF02baA">0xFaef86994a37F1c8b2A5c73648F07dd4eFF02baA</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>Primary Voting
   </td>
   <td><code><a href="https://etherscan.io/address/0xdb6c812e439ce5c740570578681ea7aadba5170b">0xdb6c812e439ce5c740570578681ea7aadba5170b</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>Secondary Voting
   </td>
   <td><code><a href="https://etherscan.io/address/0x1c8058e72e4902b3431ef057e8d9a58a73f26372">0x1c8058e72e4902b3431ef057e8d9a58a73f26372</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>Primary Agent
   </td>
   <td><code><a href="https://etherscan.io/address/0xd9f80bdb37e6bad114d747e60ce6d2aaf26704ae">0xd9f80bdb37e6bad114d747e60ce6d2aaf26704ae</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>Secondary Agent
   </td>
   <td><code><a href="https://etherscan.io/address/0x556ecbb0311d350491ba0ec7e019c354d7723ce0">0x556ecbb0311d350491ba0ec7e019c354d7723ce0</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
  <tr>
   <td>Convenience
   </td>
   <td><code><a href="https://etherscan.io/address/0x95087266018b9637aff3d76d4e0cad7e52c19636">0x95087266018b9637aff3d76d4e0cad7e52c19636</a></code> <span style="text-decoration:underline;">❏</span>
   </td>
  </tr>
</table>

## API3 Pool (Api3Pool.sol)

The API3 Pool contract is where API3 token holders can stake their tokens to
acquire voting power in the DAO. Stakers receive rewards in API3 tokens and can
optionally delegate their voting power to another user.

See the list of
[pool contracts](https://github.com/api3dao/api3-dao/tree/main/packages/pool/contracts)
and specifically the
[Api3Pool.sol](https://github.com/api3dao/api3-dao/blob/main/packages/pool/contracts/Api3Pool.sol)
contract for an understanding of the contract inheritance structure:

- TimelockUtils.sol
- StakeUtils.sol
- TransferUtils.sol
- DelegationUtils.sol
- RewardUtils.sol
- GetterUtils.sol
- StateUtils.sol

### Key Functions

[​](https://docs.api3.org/reference/dao-members/pool.md#key-functions)Depositing,
Staking, Unstaking and Withdrawing \
 \

<table>
  <tr>
   <td><strong>Signature</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>depositRegular(uint256 amount)
   </td>
   <td>Deposits your API3 tokens into the pool. Tokens must be deposited before they can be staked.
   </td>
  </tr>
  <tr>
   <td>stake(uint256 amount)
   </td>
   <td>Stakes deposited API3 tokens. Staked tokens will earn rewards, grant voting power
   </td>
  </tr>
  <tr>
   <td>depositAndStake(address source, uint256 amount)
   </td>
   <td>Deposits and stakes API3 tokens in one transaction.
   </td>
  </tr>
  <tr>
   <td>scheduleUnstake(uint256 shares)
   </td>
   <td>Schedules staked tokens to be unstaked. In order to unstake API3 tokens, members must first schedule an unstake and wait the scheduled period before unstaking (currently 1 week). Tokens scheduled to be unstaked no longer grant voting power or earn rewards.
   </td>
  </tr>
  <tr>
   <td>unstake(address userAddress) returns(uint256)
   </td>
   <td>Unstakes API3 tokens, allowing them to be withdrawn from the pool (unstaking and withdrawing are separate steps). Can only be called after scheduling an unstake and waiting until the scheduled time.
   </td>
  </tr>
  <tr>
   <td>withdrawRegular(uint256 amount)
   </td>
   <td>Withdraws your API3 tokens from the Pool contract.
   </td>
  </tr>
  <tr>
   <td>unstakeAndWithdraw(address destination)
   </td>
   <td>Unstakes and withdraws tokens in one transaction.
   </td>
  </tr>
</table>

### Timelock

<table>
  <tr>
   <td>Signature
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>function deposit(address source, uint256 amount, address userAddress)
   </td>
   <td>Callable only by the Timelock Manager contract. Deposits tokens on behalf of a user.
   </td>
  </tr>
  <tr>
   <td>function depositWithVesting(address source, uint256 amount, address userAddress, uint256 releaseStart, uint256 releaseEnd)
   </td>
   <td>Callable only by the Timelock Manager contract. Deposits tokens on a vesting schedule on behalf of a user. These vesting tokens cannot be withdrawn by the user until they have vested, but they can be staked.
   </td>
  </tr>
  <tr>
   <td>function updateTimelockStatus(address userAddress, address timelockManagerAddress)
   </td>
   <td>Updates the vesting status of a user's deposited vesting tokens (i.e. unlocks tokens) according to the schedule in the Timelock Manager contract.
   </td>
  </tr>
</table>

### Voting Power

<table>
  <tr>
   <td>Signature
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>userVotingPowerAt(address userAddress, uint256 _block)
   </td>
   <td>Returns a user's current voting power (0 if they have delegated it).
   </td>
  </tr>
  <tr>
   <td>delegateVotingPower(address delegate)
   </td>
   <td>Delegates a member's voting power, as decided by their share of the staking pool, to another address. It is not necessary to undelegate before redelegating to a new address.
   </td>
  </tr>
  <tr>
   <td>undelegateVotingPower()
   </td>
   <td>Undelegates a member's voting power.
   </td>
  </tr>
</table>

### Other

<table>
  <tr>
   <td>Signature
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>mintReward()
   </td>
   <td>Distributes new API3 tokens into the staking pool, where they can be unstaked and withdrawn by members using their share of the pool
   </td>
  </tr>
</table>

## DAO (Api3Template.sol)

The API3 DAO contract is the core DAO contract, and it serves a coordinating and
setup role. It holds the admin role in API3's contracts including the staking
pool, and it delegates some of this responsibility to the DAO's other contracts
(its voting apps and [Aragon Agents](https://aragon.org/agent)).

The base Aragon DAO template contract used by API3 DAO can be found
[here](https://github.com/aragon/dao-templates/blob/master/shared/contracts/BaseTemplate.sol).

See the
[Api3Template.sol](https://github.com/api3dao/api3-dao/tree/main/packages/dao/contracts)
contract code and the list of contracts it inherits from.

- BaseTemplate.sol
- Api3Voting.sol

## Voting (Api3Template.sol)

API3's voting app implements a simple quorum-based voting mechanism with:

- a minimum required voting power to create a new proposal (defined in the Pool
  contract)
- a minimum required quorum for passing a proposal (after a waiting period)
- a quorum percentage to pass a proposal instantly

Proposals include an execution script, which can be executed if the proposal
passes.

The API3 DAO has installed two instances of its voting app, primary and
secondary versions, along with two Aragon Agents that they control. The primary
commands a larger treasury and can update all DAO settings, while the secondary
commands a much smaller treasury and can update some of the DAO settings.

See the
[Api3Voting.sol](https://github.com/api3dao/api3-dao/blob/main/packages/api3-voting/contracts/Api3Voting.sol)
contract code and the Aragon contracts it inherits from.

- BaseTemplate

#### Key Functions

<table>
  <tr>
   <td>Signature
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>newVote(bytes _executionScript, string _metadata, bool _castVote, bool _executesIfDecided) returns (uint256 voteId)
   </td>
   <td>Create a new proposal in the DAO. Requires a minimum percentage of voting power (currently 0.1%).
   </td>
  </tr>
  <tr>
   <td>vote(uint256 _voteId, bool _supports, bool _executesIfDecided)
   </td>
   <td>Vote yes or no on an existing proposal.
   </td>
  </tr>
  <tr>
   <td>executeVote(uint256 _voteId)
   </td>
   <td>Execute a proposal, if it is ready for execution.
   </td>
  </tr>
</table>

## Dashboard Attributes

Some attributes that determine values displayed on the DAO dashboard (such as
the STAKING TARGET) can be changed by creating a proposal and calling the
appropriate function on the staking pool contract.

The following parameters can be updated via DAO proposal by calling
[StateUtils.sol](https://github.com/api3dao/api3-dao/tree/main/packages/pool/contracts)
functions within the
[Api3Pool contract](https://docs.api3.org/reference/dao-members/pool.md). For
reference, percentage values are based on 10^18 = 100%.

#### Key Functions

<table>
  <tr>
   <td>Parameter Name
   </td>
   <td>Initial Value
   </td>
   <td>Function Signature
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>stakeTarget
   </td>
   <td>50 * 10^16
   </td>
   <td>setStakeTarget(uint256 _stakeTarget)
   </td>
   <td>Percentage of all tokens targeted to be staked
   </td>
  </tr>
  <tr>
   <td>aprUpdateStep
   </td>
   <td>1 * 10^16
   </td>
   <td>setAprUpdateStep(uint256 _aprUpdateStep)
   </td>
   <td>Percentage reward APR will be increased or decreased by
   </td>
  </tr>
  <tr>
   <td>maxApr
   </td>
   <td>75 * 10^16
   </td>
   <td>setMaxApr(uint256 _maxApr)
   </td>
   <td>Maximum reward APR
   </td>
  </tr>
  <tr>
   <td>minApr
   </td>
   <td>2.5 * 10^16
   </td>
   <td>setMinApr(uint256 _minApr)
   </td>
   <td>Minimum reward APR
   </td>
  </tr>
  <tr>
   <td>proposalVotingPowerThreshold
   </td>
   <td>0.1 * 10^16
   </td>
   <td>setProposalVotingPowerThreshold(uint256 _proposalVotingPowerThreshold)
   </td>
   <td>Percentage of all shares that must be held to create a new proposal
   </td>
  </tr>
  <tr>
   <td>unstakeWaitPeriod
   </td>
   <td>604800 (seconds)
   </td>
   <td>setUnstakeWaitPeriod(uint256 _unstakeWaitPeriod)
   </td>
   <td>Length of time a member must wait after scheduling unstake before unstaking tokens from the pool
   </td>
  </tr>
</table>

## Reward Calculation And Distribution

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
API3 tokens is minted and added to the staking pool:

(see the
[smart contract source](https://github.com/api3dao/api3-dao/blob/main/packages/pool/contracts/RewardUtils.sol#L24)
for more information).

In addition, each time mintReward is called, the annual percentage (the reward
rate) is updated up or down by the APR update step size (1%), according to
whether the total number of staked tokens is above or below its target. The
initial target is 50%, so if the total number of staked tokens is less than 50%
of the total token supply when mintReward is called, APR will be raised by 1%
for the next reward mint (and vice versa). Thus, APR will constantly be
adjusted, but it will always stay between a designated maximum and minimum.

Example

Rewards Distribution User X stakes 600 tokens and user Y stakes 400, so there is
a 60% (X) 40% (Y) split ownership in the 1000 token staking pool. For a
particular week the reward mint is 1% (10 total tokens) and the pool is now 1010
tokens. X at 60% now has 606 tokens and Y has 404. Remember that the 10 reward
tokens are locked for a period of one year.
