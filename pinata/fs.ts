import fs from 'fs';
import path from 'path';

const basePath = __dirname;
const inputPath = path.join(basePath, './input');

export const getFile = () => {
  const files = fs.readdirSync(inputPath).filter((file) => {
    return file !== '.gitkeep';
  });

  if (files.length > 1) {
    throw new Error('이미지 파일은 하나만 필요합니다.');
  }

  return files;
};

export const checkFileExtensions = async () => {
  const fileName = getFile()[0];
  const extentions = fileName.split('.');
  const isValid =
    extentions[extentions.length - 1] === 'png' ||
    extentions[extentions.length - 1] === 'jpg' ||
    extentions[extentions.length - 1] === 'jpeg' ||
    extentions[extentions.length - 1] === 'gif';

  if (!isValid) {
    throw new Error('이미지 파일는 png, jpg, jpeg, gif 파일이어야 합니다.');
  }

  return isValid;
};

export const getPath = async () => {
  await checkFileExtensions();

  return path.join(inputPath, getFile()[0]);
};

export const createReadStream = async () => {
  return fs.createReadStream(await getPath());
};
