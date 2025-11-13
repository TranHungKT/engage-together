import React, { useCallback, useMemo, useState } from 'react';

import { ModalContext, ModalType } from './ModalContext';
import { ModalRoot } from './ModalRoot';

export interface ModalProviderProps {
  rootComponent?: React.ComponentType<any>;
  children?: React.ReactNode;
}

export const ModalProvider = ({ rootComponent, children }: ModalProviderProps) => {
  const [modals, setModals] = useState<Record<string, ModalType>>({});
  const showModal = useCallback(
    (key: string, modal: ModalType) =>
      setModals((prevModals) => ({
        ...prevModals,
        [key]: modal,
      })),
    [],
  );
  const hideModal = useCallback(
    (key: string) =>
      setModals((prevModals) => {
        if (!prevModals[key]) {
          return prevModals;
        }
        const newModals = { ...prevModals };
        delete newModals[key];
        return newModals;
      }),
    [],
  );
  const contextValue = useMemo(() => ({ showModal, hideModal }), [hideModal, showModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      <React.Fragment>{children}</React.Fragment>
      <ModalRoot modals={modals} rootComponent={rootComponent} />
    </ModalContext.Provider>
  );
};
