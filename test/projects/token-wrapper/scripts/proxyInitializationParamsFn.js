
module.exports = async (bre) => {
  console.log(`Running proxyInitializationParamsFn()...`)

  const ERC20Sample = bre.artifacts.require('ERC20Sample')
  const token = await ERC20Sample.new()
  console.log(`Deployed ERC20 token:`, token.address)

  // These are the default addresses provided by 'aragon run'
  const addr1 = '0xb4124cEB3451635DAcedd11767f004d8a28c6eE7'
  const addr2 = '0x8401Eb5ff34cc943f096A32EF3d5113FEbE8D4Eb'

  // Mint tokens
  // NOTE: Tokens are automatically minted to the deploying addrress (addr1).
  await token.transfer(addr2, '1000000000000000000000')

  console.log(`addr1 balance`, (await token.balanceOf(addr1)).toString())
  console.log(`addr2 balance`, (await token.balanceOf(addr2)).toString())

  return [token.address, 'Wrapped token', 'wORG']
}
