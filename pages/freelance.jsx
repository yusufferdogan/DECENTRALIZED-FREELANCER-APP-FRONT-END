import { React } from 'react';
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useSigner,
} from 'wagmi';

import { Text, Button, useInput } from '@nextui-org/react';

import { ABI } from '../constants/freelance';
import { USDT_ABI } from '../constants/usdt';

export default function Freelance() {
  return <div> FREELANCE </div>;
}
