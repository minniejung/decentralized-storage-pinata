import { ethers } from "ethers";
import { abi, address as contractAddress } from "../abis/MyNFT.json"; // Todo: 배포먼저 실행해주세요. (npm run deploy)
import { uploadMetaData } from "../pinata/apis/upload.metadata";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

const provider = new ethers.JsonRpcProvider(
  "https://public-en-kairos.node.kaia.io"
);
const privateKey = process.env.PRIVATE_KEY || "";

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
  return new ethers.Wallet(privateKey, provider);
};

export const getContract = () => {
  // Todo: DataType Contract 인스턴스를 리턴합니다. - new ethers.Contract(컨트랙트 주소, ABI, signer)
  // 이 후에 구현하는 컨트랙트 호출은 구현한 getContract를 사용합니다.
  return new ethers.Contract(contractAddress, abi, getSigner());
};

export const mint = async () => {
  const signer = getSigner();
  const recipient = await signer.getAddress();

  const tokenUri = await uploadMetaData();

  // Todo: mint 함수는 컨트랙트의 mint 함수를 이용하여 NFT를 민팅해야 합니다. (리턴할 필요는 없습니다.)
  const tx = await getContract().mint(recipient, tokenUri);
  console.log("mint tx : ", tx);
};

// 아래 코드는 지우지 않습니다.
mint();
