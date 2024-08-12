POOL_ADDRESS_PROVIDER=0x5A90D4B8E220f3cacd8686Cc8c928340c7976075
ACL_MANAGER_ADDRESS=0x6a58fF07aF58EC7FF32A918CbB675FA20697222f
POOL_IMPL=0x45B7C6CACED2978C0a3B1231E912802aA56a7DB0
POOL_CONFIGURATOR=0x0b00a50D6062Ff2356f98068fc297762c8d35e32
POOL_ORACLE=0x99aB1f16f5665faEAF3Af3802F2B320193870B9E
POOL_PROXY=0x1fe68e15Ec31894501667129615117f5AA37fa68

POOL_CONG_PROXY=0x94a1b68ba0c153bA1dbF2e1067caaBa4b7710A10

TC_C=0x3AeC14cD3426a5086609323DA81Fe7Ee2D213FA0

ZERO_ADDRESS=0x469D7Fd0d97Bb8603B89228D79c7F037B2833859

NULL_ADDRESS=0x0000000000000000000000000000000000000000

POOL_DATA_V3=0xe6118f3089308dB8642d9656cD7408125602ECDE

HARDHAT_NETWORK=$NETWORK npx hardhat verify $POOL_CONG_PROXY
HARDHAT_NETWORK=$NETWORK npx hardhat verify $POOL_CONFIGURATOR

# HARDHAT_NETWORK=$NETWORK npx hardhat verify $POOL_IMPL $POOL_ADDRESS_PROVIDER
# HARDHAT_NETWORK=$NETWORK npx hardhat verify $ACL_MANAGER_ADDRESS $POOL_ADDRESS_PROVIDER
# HARDHAT_NETWORK=$NETWORK npx hardhat verify --constructor-args verify_args/pool_oracle.js $POOL_ORACLE
# HARDHAT_NETWORK=$NETWORK npx hardhat verify $POOL_PROXY 0x469D7Fd0d97Bb8603B89228D79c7F037B2833859

# # # Verify Pool Implementation

# # # Verify Pool Oracle

# # verify pool config proxy

# # Verify Pool Proxy

# # Verify Pool Configurator

# Verify
# HARDHAT_NETWORK=$NETWORK npx hardhat verify $TC_C $ZERO_ADDRESS

# Verify Tresury
# HARDHAT_NETWORK=$NETWORK npx hardhat verify $TS_IMPL

# Verify Pool Address Provider
# HARDHAT_NETWORK=$NETWORK npx hardhat verify $POOL_ADDRESS_PROVIDER "Aave Etherlink Market" $ZERO_ADDRESS

# Verify ACL Manager
