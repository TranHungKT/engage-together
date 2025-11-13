import { DependencyList } from 'react';

import { Modal } from 'antd';

import { useModal } from './useModal';

interface ErrorModalProps {
  title?: string;
  message?: string;
}

export const useErrorModal = (props: ErrorModalProps, inputs: DependencyList = []) => {
  const { title = 'Something went wrong', message = 'Internal Server Error' } = props;

  const [showModal, hideModal] = useModal(
    () => (
      <Modal title={title} open onCancel={hideModal} onOk={hideModal}>
        <p>{message}</p>
      </Modal>
    ),
    inputs,
  );

  return [showModal, hideModal];
};
