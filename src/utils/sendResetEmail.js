import { SMTP } from '../constants/index.js';
import { getEnvVar } from './getEnvVar.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: getEnvVar(SMTP.SMTP_HOST),
  port: Number(getEnvVar(SMTP.SMTP_PORT)),
  auth: {
    user: getEnvVar(SMTP.SMTP_USER),
    pass: getEnvVar(SMTP.SMTP_PASSWORD),
  },
});

export const sendResetEmail = async (options) => {
  return await transporter.sendMail(options);
};
