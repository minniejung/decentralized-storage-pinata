import FormData from 'form-data';
import { jwt } from '../pinata.config';
import { createReadStream } from '../fs';
import axios from 'axios';

export const uploadFileToIPFS = async () => {
  const fileStream = await createReadStream();

  const formData = new FormData();
  formData.append('file', fileStream);
  formData.append('name', 'MyNFT_Image');
  formData.append('network', 'public');

  const response = await axios.post(
    'https://uploads.pinata.cloud/v3/files',
    formData,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
        ...formData.getHeaders(),
      },
    }
  );

  console.log('이미지를 IPFS에 업로드합니다');
  console.log(
    'Image :',
    `https://jade-biological-gamefowl-447.mypinata.cloud/ipfs/${response.data.data.cid}`
  );

  return `https://jade-biological-gamefowl-447.mypinata.cloud/ipfs/${response.data.data.cid}`;
};
