import { ReactNode, useState, createContext, useContext } from 'react';

import ConnectModal from '../components/ConnectModal';

interface Web3ConnectProviderProps {
  children: ReactNode;
}

const context = createContext<{
  toogleShowConnectModal: () => void;
}>({
  toogleShowConnectModal: () => undefined,
});

export const Web3ConnectProvider = ({ children }: Web3ConnectProviderProps) => {
  const [connectModal, setConnectModal] = useState(false);
  const toogleShowConnectModal = () => setConnectModal(!connectModal);

  return (
    <context.Provider value={{ toogleShowConnectModal }}>
      <>
        {children}
        <ConnectModal
          connectModal={connectModal}
          setConnectModal={setConnectModal}
        />
      </>
      ;
    </context.Provider>
  );
};

export default Web3ConnectProvider;

export const useWeb3ConnectContext = () => useContext(context);