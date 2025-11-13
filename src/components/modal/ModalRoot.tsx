/* eslint-disable react/display-name */
import React, { memo, useEffect, useState } from 'react';

import * as ReactDOM from 'react-dom';

import { ModalType } from './ModalContext';

interface ModalRootProps {
  modals: Record<string, ModalType>;
  rootComponent?: React.ComponentType<any>;
}

interface ModalRendererProps {
  component: ModalType;
}

const ModalRenderer = memo(({ component, ...rest }: ModalRendererProps) => component(rest));

export const ModalRoot = memo(
  ({ modals, rootComponent: RootComponent = React.Fragment }: ModalRootProps) => {
    const [mountNode, setMountNode] = useState<Element | undefined>(undefined);

    // This effect will not be ran in the server environment
    useEffect(() => setMountNode(document.body), []);

    return mountNode
      ? ReactDOM.createPortal(
          <RootComponent>
            {Object.keys(modals).map((key) => (
              <ModalRenderer key={key} component={modals[key]} />
            ))}
          </RootComponent>,
          mountNode,
        )
      : null;
  },
);
