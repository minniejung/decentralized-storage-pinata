import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const jwt = process.env.PINATA_JWT || '';
