const ax = require('./axios-wrapper');
const yaml = require('js-yaml');
const fs = require('fs');

function setDebug(isDebug) {
  ax.setDebug(isDebug);
};

module.exports = function(configFilename) {
  var node = 0;

  var config = yaml.safeLoad(fs.readFileSync(configFilename, 'utf8'));

  setDebug(config.apiDebug);

  // This is copied from `lib/config.js`
  config.getBlocUrl = function (node) {
    if (node === undefined) node = 0;
       return this.nodes[node].blocUrl;
  }
  config.getExplorerUrl = function (node) {
    if (node === undefined) node = 0;
       return this.nodes[node].explorerUrl;
  }
  config.getStratoUrl = function (node) {
    if (node === undefined) node = 0;
       return this.nodes[node].stratoUrl;
  }

  return {
    explorer: {
      home: function() {
        return ax.get(config.getExplorerUrl(node), '/');
      },
      nodes: function() {
        return ax.get(config.getExplorerUrl(node), '/api/nodes');
      },
    },

    strato: {
      home: function() {
        return ax.get(config.getStratoUrl(node), '/');
      },
      account: function(address) {
        return ax.get(config.getStratoUrl(node), '/eth/v1.2/account?address=' + address);
      },
      block: function(number) {
        return ax.get(config.getStratoUrl(node), '/eth/v1.2/block?number=' + number);
      },
      faucet: function(body) {
        return ax.post(config.getStratoUrl(node), body, '/eth/v1.2/faucet');
      },
      storage: function(attr, value) {
        return ax.get(config.getStratoUrl(node), '/eth/v1.2/storage?'+attr+'='+value);
      },
      search: function(code) {
        return ax.get(config.getStratoUrl(node), '/eth/v1.2/account?code=' + code);
      },
    },

    bloc: {
      contract: function(body, from, address) {
        return ax.post(config.getBlocUrl(node), body, '/users/' + from + '/' + address + '/contract');
      },
      import: function(body, from, address) {
        return ax.post(config.getBlocUrl(node), body, '/users/' + from + '/' + address + '/import');
      },
      home: function() {
        return ax.get(config.getBlocUrl(node), '/');
      },
      import: function(body, from, address) {
        return ax.post(config.getBlocUrl(node), body, '/users/' + from + '/' + address + '/import');
      },
      method: function(body, name, address, contractName, contractAddress) {
        return ax.post(config.getBlocUrl(node), body, '/users/' + name + '/' + address + '/contract/' + contractName + '/' + contractAddress + '/call');
      },
      send: function(body, from, address) {
        return ax.post(config.getBlocUrl(node), body, '/users/' + from + '/' + address + '/send');
      },
      contracts: function(name) {
        return ax.get(config.getBlocUrl(node), '/contracts/' + name);
      },
      abi: function(name, address) {
        return ax.get(config.getBlocUrl(node), '/contracts/' + name + '/' + address);
      },
      state: function(name, address) {
        return ax.get(config.getBlocUrl(node), '/contracts/' + name + '/' + address + '/state');
      },
      stateLookup: function(name, address, mapping, key) {
        return ax.get(config.getBlocUrl(node), '/contracts/' + name + '/' + address + '/state/' + mapping + '/' + key);
      },
      users: function() {
        return ax.get(config.getBlocUrl(node), '/users');
      },
      getUserAddresses: function(userName) {
        return ax.get(config.getBlocUrl(node), '/users/' + userName);
      },
      createUser: function(body, name) {
        return ax.post(config.getBlocUrl(node), body, '/users/' + name);
      },
      search: function(name) {
        return ax.get(config.getBlocUrl(node), '/search/' + name + '/state');
      },
      searchReduced: function(name) {
        return ax.get(config.getBlocUrl(node), '/search/' + name + '/state/reduced');
      },
      searchSummary: function(name, wellName) {
        var well = wellName ? '?well=' + wellName : '';
        return ax.get(config.getBlocUrl(node), '/search/' + name + '/state/summary' + well);
      }
    },

    setDebug: setDebug,
    setNode: function(_node) {
      if (_node === undefined) return;
      node = _node;
    },
  };
};
