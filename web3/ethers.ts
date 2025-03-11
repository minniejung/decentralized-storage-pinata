import { ethers } from 'ethers';
import { abi, address as contractAddress } from '../abis/MyNFT.json'; // Todo: 배포먼저 실행해주세요. (npm run deploy)
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545');
const privateKey = process.env.PRIVATE_KEY || '';

export const checkNetworkInfo = async () => {
  return await provider.getNetwork();
};
/*
    위의 코드들은 지우지 않습니다.
    
    getSigner와 getContract는 다음의 데이터를 이용하여 구현합니다.

    provider : JSON-RPC API를 통해 블록체인과 통신하는 역할자
    abi : MyNFT Contract의 ABI 데이터
    contractAddress : MyNFT Contract의 Address
    privateKey : .env 파일에 설정된 가나슈 계정의 프라이빗 키
*/

export const getSigner = () => {
  // Todo: privateKey를 이용하여 Wallet 인스턴스를 리턴합니다. - new ethers.Wallet(프라이빗 키, provider)
  return;
};

export const getContract = () => {
  // Todo: DataType Contract 인스턴스를 리턴합니다. - new ethers.Contract(컨트랙트 주소, ABI, signer)
  // 이 후에 구현하는 컨트랙트 호출은 구현한 getContract를 사용합니다.
  return;
};

export const mint = async (recipient: string, _tokenURI: string) => {
  // Todo: mint 함수는 컨트랙트의 mint 함수를 이용하여 NFT를 민팅해야 합니다.

  return;
};

export const ownerOf = async (tokenId: number) => {
  // Todo: ownerOf 함수는 컨트랙트의 ownerOf 함수를 이용하여 인자로 들어오는 tokenId의 소유자를 리턴해야

  return;
};

export const balanceOf = async (address: string) => {
  // Todo: balanceOf 함수는 컨트랙트의 balanceOf 함수를 이용하여 인자로 들어오는 address의 NFT 개수를 리턴해야 합니다.
  return;
};

export const safeTransferFrom = async (
  from: string,
  to: string,
  tokenId: number
) => {
  // Todo: balanceOf 함수는 인자(from, to, tokenId)를 이용하여 컨트랙트의 safeTransferFrom 함수 호출을 리턴해야 합니다.
  return;
};

export const approve = async (to: string, tokenId: number) => {
  // Todo: approve 함수는 인자(to, tokenId)를 이용하여 트랜잭션을 생성한 호출자(Signer)가 가진 tokenId에 해당하는 NFT를 to에게 승인하는 컨트랙트의 approve 함수 호출을 리턴해야 합니다.
  return;
};
