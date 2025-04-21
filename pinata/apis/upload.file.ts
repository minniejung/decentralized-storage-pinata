import FormData from "form-data";
import { jwt } from "../pinata.config";
import { createReadStream } from "../fs";
import axios from "axios";

export const uploadFileToIPFS = async () => {
  const fileStream = await createReadStream();

  const formData = new FormData();
  formData.append("file", fileStream);
  formData.append("name", "MyNFT_Image");
  formData.append("network", "public");

  const response = await axios.post(
    "https://uploads.pinata.cloud/v3/files",
    formData,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
        ...formData.getHeaders(),
      },
    }
  );

  console.log("이미지를 IPFS에 업로드합니다");
  console.log("Image :", `ipfs://${response.data.data.cid}`);

  // return `ipfs://${response.data.data.cid}`;
  return `https://lavender-left-coyote-594.mypinata.cloud/ipfs/bafybeig7ow34ri2tzrnwr2n26gxdmml72au52h7r32zp6cw7j6w4segkdu`;
};
