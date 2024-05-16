import { ComponentProps, createContext, useCallback, useContext, useMemo, useState } from 'react';

import { createPortal } from 'react-dom';

import Alert from '../common/BSAlert';

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, 'open'>;

interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);

const defaultValues: AlertProps = {
  isOpen: false,
  title: null,
  content: null,
  onBtnClick: () => {},
};

export function AlertContextProvider({ children }: { children: React.ReactNode }) {
  const [alertState, setAlertState] = useState(defaultValues);

  const $portal_root = document.getElementById('root-portal');

  const close = useCallback(() => {
    setAlertState(defaultValues);
  }, []);

  const open = useCallback(
    ({ onBtnClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        onBtnClick: () => {
          close();
          onBtnClick();
        },
        isOpen: true,
      });
    },
    [close],
  );

  const values = useMemo(() => ({ open }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null ? createPortal(<Alert {...alertState} />, $portal_root) : null}
    </Context.Provider>
  );
}

export function useAlertContext() {
  const values = useContext(Context);

  if (values == null) {
    throw new Error('AlertContext 내부에서 사용해주세요');
  }

  return values;
}
