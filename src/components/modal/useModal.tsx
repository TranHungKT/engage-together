import { useContext, useEffect, useState, useCallback, useMemo, DependencyList } from 'react';

import { ModalContext, ModalType } from './ModalContext';

/**
 * Callback types provided for descriptive type-hints
 */
type ShowModal = () => void;
type HideModal = () => void;

/**
 * Utility function to generate unique number per component instance
 */
const generateModalKey = (() => {
  let count = 0;

  return () => `${++count}`;
})();

export const useModal = (
  component: ModalType,
  inputs: DependencyList = [],
): [ShowModal, HideModal] => {
  const key = useMemo(generateModalKey, []);
  const modal = useMemo(() => component, [...inputs, component]);
  const context = useContext(ModalContext);
  const [isShown, setShown] = useState<boolean>(false);
  const showModal = useCallback(() => setShown(true), []);
  const hideModal = useCallback(() => setShown(false), []);

  useEffect(() => {
    if (isShown) {
      context.showModal(key, modal);
    } else {
      context.hideModal(key);
    }

    // Hide modal when parent component unmounts
    return () => context.hideModal(key);
  }, [context, isShown, key, modal]);

  return [showModal, hideModal];
};
