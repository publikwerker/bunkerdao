import { useEffect, useState } from 'react';

import { Egg } from '../typechain/Egg';
import { Egg__factory } from '../typechain/factories/Egg__factory';

import { ChickenNoodle } from '../typechain/ChickenNoodle';
import { ChickenNoodle__factory } from '../typechain/factories/ChickenNoodle__factory';

import { ChickenNoodleSoup } from '../typechain/ChickenNoodleSoup';
import { ChickenNoodleSoup__factory } from '../typechain/factories/ChickenNoodleSoup__factory';

import { Farm } from '../typechain/Farm';
import { Farm__factory } from '../typechain/factories/Farm__factory';

import useEthers from '../library/hooks/useEthers';

import { CHAIN_NAMES } from '../library/constants/chains';

import {
  CHAIN_ID,
  EGG_CONTRACT_ADDRESS,
  CHICKENNOODLE_CONTRACT_ADDRESS,
  CHICKENNOODLESOUP_CONTRACT_ADDRESS,
  FARM_CONTRACT_ADDRESS,
} from '../constants';

export const useLibrary = () => {
  const { library: fallbackLibrary } = useEthers(CHAIN_NAMES[CHAIN_ID]);
  const {
    library: userLibrary,
    account,
    error,
    chainId,
    activateBrowserWallet,
    activateWalletConnect,
  } = useEthers();

  const [eggContract, setEggContract] = useState<Egg>();
  const [chickenNoodleContract, setChickenNoodleContract] =
    useState<ChickenNoodle>();
  const [chickenNoodleSoupContract, setChickenNoodleSoupContract] =
    useState<ChickenNoodleSoup>();
  const [farmContract, setFarmContract] = useState<Farm>();

  useEffect(() => {
    if (userLibrary != undefined && account && chainId == CHAIN_ID) {
      setEggContract(
        Egg__factory.connect(
          EGG_CONTRACT_ADDRESS[CHAIN_ID],
          userLibrary.getSigner(account),
        ),
      );
      setChickenNoodleContract(
        ChickenNoodle__factory.connect(
          CHICKENNOODLE_CONTRACT_ADDRESS[CHAIN_ID],
          userLibrary.getSigner(account),
        ),
      );
      setChickenNoodleSoupContract(
        ChickenNoodleSoup__factory.connect(
          CHICKENNOODLESOUP_CONTRACT_ADDRESS[CHAIN_ID],
          userLibrary.getSigner(account),
        ),
      );
      setFarmContract(
        Farm__factory.connect(
          FARM_CONTRACT_ADDRESS[CHAIN_ID],
          userLibrary.getSigner(account),
        ),
      );
    } else if (fallbackLibrary != undefined) {
      setEggContract(
        Egg__factory.connect(EGG_CONTRACT_ADDRESS[CHAIN_ID], fallbackLibrary),
      );
      setChickenNoodleContract(
        ChickenNoodle__factory.connect(
          CHICKENNOODLE_CONTRACT_ADDRESS[CHAIN_ID],
          fallbackLibrary,
        ),
      );
      setChickenNoodleSoupContract(
        ChickenNoodleSoup__factory.connect(
          CHICKENNOODLESOUP_CONTRACT_ADDRESS[CHAIN_ID],
          fallbackLibrary,
        ),
      );
      setFarmContract(
        Farm__factory.connect(FARM_CONTRACT_ADDRESS[CHAIN_ID], fallbackLibrary),
      );
    } else {
      setEggContract(undefined);
      setChickenNoodleContract(undefined);
      setChickenNoodleSoupContract(undefined);
      setFarmContract(undefined);
    }
  }, [fallbackLibrary, userLibrary, account, chainId]);

  return {
    account,
    error,
    chainId,
    eggContract,
    chickenNoodleContract,
    chickenNoodleSoupContract,
    farmContract,
    userLibrary,
    fallbackLibrary,
    activateBrowserWallet,
    activateWalletConnect,
  };
};

export default useLibrary;