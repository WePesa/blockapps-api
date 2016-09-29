# blockapps-api
Thin wrapper for the bloc/strato rest calls

## Strato api
```
api.strato.home():
api.strato.account(address);
api.strato.block(number);
api.strato.faucet(body);
api.strato.storage(attr, value);
api.strato.search(code);
```

## Bloc api

```
api.bloc.contract(body, from, address);
api.bloc.import(body, from, address);
api.bloc.home();
api.bloc.import(body, from, address);
api.bloc.method(body, name, address, contractName, contractAddress);
api.bloc.send(body, from, address);
api.bloc.contracts(name);
api.bloc.abi(name, address);
api.bloc.state(name, address);
api.bloc.stateLookup(name, address, mapping, key);
api.bloc.users();
api.bloc.createUser(body, name);
```
