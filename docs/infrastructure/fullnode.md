---
title: RPC/API Full Node
sidebar_position: 2
---

# RPC/API Full Node

The RPC Node, providing Remote Procedure Call and API interfaces is operational. It allows external applications or clients to interact with the Sentinel Blockchain.

RPC nodes typically expose an interface that allows clients to send requests to the node, querying information or requesting certain actions to be performed on the blockchain. This is done through RPC calls, which are remote requests to the node's services.

Busurnode is responsible for overseeing its maintenance, ensuring the implementation of essential monitoring measures.

:::info Node Status
https://status.sentineldao.com/
:::

## Remote Procedure Call (RPC)

The Global RPC is a load-balanced system that distributes requests across 6 nodes to ensure optimal performance and reliability. Each Regional RPC is also load-balanced, with 2 nodes allocated per region to maintain high availability and minimize downtime. This architecture is designed to provide maximum failover capability in the event of any errors or outages.

### Global:
- https://rpc.sentineldao.com:443

### Regional:
- Asia: https://as-rpc.sentineldao.com:443
- Europe: https://eu-rpc.sentineldao.com:443
- North America: https://na-rpc.sentineldao.com:443

##  Application Programming Interface (API)

The Global API is a load-balanced system that distributes requests across 6 nodes to ensure optimal performance and reliability. Each Regional RPC is also load-balanced, with 2 nodes allocated per region to maintain high availability and minimize downtime. This architecture is designed to provide maximum failover capability in the event of any errors or outages.

### Global:
- https://api.sentineldao.com

### Regional:
- Asia: https://as-api.sentineldao.com
- Europe: https://eu-api.sentineldao.com
- North America: https://na-api.sentineldao.com