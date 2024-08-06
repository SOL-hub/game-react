import { useState } from 'react';

const useCheckbox = (initialValue) => {
  const [checkboxValue, setCheckboxValue] = useState(initialValue);

  const onChangeCheckbox = (e) => {
    const { id, checked } = e.target;
    const type = typeof initialValue;

    if (type === 'boolean') {
      return setCheckboxValue(checked);
    }

    setCheckboxValue({
      ...checkboxValue,
      [id]: checked,
    });
  };

  return { checkboxValue, onChangeCheckbox };
};

export default useCheckbox;
