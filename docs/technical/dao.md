---
title: Api3
pageHeader: Technical
outline: deep
---

<PageHeader/>

# DAO (Api3Template.sol)

The Api3 DAO contract is the core DAO contract serving as a coordinating and
setup role. It holds the admin role in Api3's contracts including the DAO pool,
and it delegates some of this responsibility to the DAO's other contracts (its
voting apps and [Aragon](https://aragon.org/) Agents).

The base Aragon DAO template contract used by Api3 DAO can be found
[here](https://github.com/aragon/dao-templates/blob/master/shared/contracts/BaseTemplate.sol).

See the
[Api3Template.sol](https://github.com/api3dao/api3-dao/tree/main/packages/dao/contracts)
contract code and the list of contracts it inherits from.

- BaseTemplate.sol
- Api3Voting.sol
