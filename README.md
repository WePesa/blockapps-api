# blockapps-api
Thin wrapper for the bloc/strato rest calls

## Strato api
```
api.strato.home():
api.strato.account(address);
api.strato.block(number);
api.strato.faucet({address: targetUserAddress});
api.strato.storage(attr, value);
api.strato.search(code);
```

## Bloc api

```
api.bloc.home();
api.bloc.contract({
      password: userPassword,
      src: contractSourceString,
      args: {argName: argValue},
      contract: contractName,
      txParams: {paramName: paramValue}
    }, from, address);
api.bloc.import({
      password: password,
      src: contractSourceString,
      contract: contractSolFileName,
      name: contractName
    }, from, address);
api.bloc.method({
            password: password,
            method: methodName,
            args: {argName: argValue},
            value: etherToTransferToContract,
          }, name, address, contractName, contractAddress);
api.bloc.send({
            password: password,
            toAddress: toUserAddress,
            value: etherValue,
          }, from, address);
api.bloc.contracts(name);
api.bloc.abi(name, address);
api.bloc.state(name, address);
api.bloc.stateLookup(name, address, mapping, key);
api.bloc.users();
api.bloc.createUser({
            faucet: '1',
            password: password,
          }, name);
```
