# blockapps-api
Thin wrapper for the bloc/strato rest calls

## Strato api

Get the server's home page content
```
api.strato.home():
```
Get the account details at a given address
```
api.strato.account(address);
```
Get the specified block
```
api.strato.block(blockNumber);
```
Send some test ether from the faucet to a user
```
api.strato.faucet({address: targetUserAddress});
```
Get the values off all the fields for a given attribute
```
api.strato.storage(attr, value);
```
Get all the addresses for a given abi code
```
api.strato.search(code);
```

## Bloc api

Get Bloc's home page content
```
api.bloc.home();
```
Upload a contract source string
```
api.bloc.contract({
      password: userPassword,
      src: contractSourceString,
      args: {argName: argValue},
      contract: contractName,
      txParams: {paramName: paramValue}
    }, from, address);
```
Upload a contract .sol file
```
api.bloc.import({
      password: password,
      src: contractSourceString,
      contract: contractSolFileName,
      name: contractName
    }, from, address);
```
Call a method of a contract
```    
api.bloc.method({
            password: password,
            method: methodName,
            args: {argName: argValue},
            value: etherToTransferToContract,
          }, fromUserName, fromUserAddress, contractName, contractAddress);
```
Send a transaction
```          
api.bloc.send({
            password: password,
            toAddress: toUserAddress,
            value: etherValue,
          }, fromUserName, fromUserAddress);
```
Get all the addresses a contract name
```          
api.bloc.contracts(contractName);
```
Get the abi for a contract
```          
api.bloc.abi(contractName, contractAddress);
```
Get the state of a contract
```          
api.bloc.state(contractName, contractAddress);
```
Get the state of a contract mapping
```          
api.bloc.stateLookup(contractName, contractAddress, mapping, key);
```
Get all the users
```          
api.bloc.users();
```
Create a user, funding it from the faucet
```          
api.bloc.createUser({
            faucet: '1',
            password: password,
          }, name);
```
