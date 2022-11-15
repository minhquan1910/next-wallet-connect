import { _TypedDataEncoder } from 'ethers/lib/utils'

/**
 * Note signature MUST match what the server is generating
 * otherwise we will not be able to verify signatures
 *
 * https://docs.ethers.io/v5/api/utils/hashing/#TypedDataEncoder
 */
export const createLinkWalletSignature = (
  chainId: number,
  // userId: string,
  address: string,
  value: string
  // nonce: string
) => {
  const domain = {
    name: 'PaymentToken',
    version: '1',
    chainId: chainId,
    verifyingContract: "0x54c704E9d92B08C744112e9E1fE03A61245855F2"
  }
  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  }
  const values = {
    owner: address,
    spender: "0xbed2114d4bd5c5b2a5c3c11f4648848bafd875e8",
    value: value.toString(),
    nonce: '123423352',
    deadline: "1765687599"
  }

  return _TypedDataEncoder.getPayload(domain, types, values)
}