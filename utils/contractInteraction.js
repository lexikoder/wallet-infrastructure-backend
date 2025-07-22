const {createPublicClient, http,parseEther,createWalletClient } = require('viem');  
const erc20Abi = require("../config/abi");  

const client = (network) =>{
const client = createPublicClient({
         chain: network.network, 
         transport: http(network.rpc), 
     }); 
  return client
}

const readcontract = async (network,token,funcName,args) =>{
const client = createPublicClient({
         chain: network.network, 
         transport: http(network.rpc), 
     });
const result = await client.readContract({
      address: token,
      abi: erc20Abi,
      functionName: funcName,
      args: args,
    }) 
  return result 
}

const sendeth = async (network,account,toaddress,amount) =>{
const client = createWalletClient({
      account,
      chain: network.network,
      transport: http(network.rpc), // or other RPC
    });
const result = await client.sendTransaction({
        to: toaddress,
        value: parseEther(amount), // 0.01 ETH
        gas: BigInt(21000),
        // gasPrice: currentGasPrice,
      });
  return result 
}

const senderc20 = async (network,token,erc20Abi,account,toaddress,_amount) =>{
const client = createWalletClient({
      account,
      chain: network.network,
      transport: http(network.rpc), // or other RPC
    });
const result = await client.writeContract({
        address: token,
        abi: erc20Abi,
        functionName: "transfer",
        args: [toaddress, _amount],
      });
  return result 
}

module.exports = {client,readcontract,sendeth,senderc20}