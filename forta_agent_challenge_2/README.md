# Forta Agent for Aave Challenge 2
## Description

This agent detects if the fallback Oracle returned a price which 
was 10% lower/larger than the last price
## Supported Chains

- Ethereum
- Aave devs have not added fallback oracles for Avalanche and Polygon yet,
-but the code and modules are written to be adaptable for other chains
-see: majority of the functions have fxn signatures like function (oracle)
-where oracle is a parameter so the price oracles deployed on other chains
-can be passed without the whole code having to be rewritten
-Avalanche, Polygon, etc. 

## Alerts

Describe each of the type of alerts fired by this agent

- AAVE-2
  - Fired when the fallbackOracle was called and returned a price 10% different than the last block's price
  - Severity is always set to "medium" (mention any conditions where it could be something else)
  - Type is always set to "suspicious" (mention any conditions where it could be something else)
  - Mention any other type of metadata fields included with this alert

## Test Data

The agent behaviour can be verified with the following transactions:

