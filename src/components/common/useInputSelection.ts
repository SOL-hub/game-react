import { useState } from 'react';

const useInputSelection = (initialValue) => {
  const [checkboxValue, setCheckboxValue] = useState(initialValue);

  const [radioValue, setRadioValue] = useState(
    Object.keys(initialValue).find((key) => initialValue[key] === true),
  );
  const [radioChecked, setRadioChecked] = useState(radioValue ? true : false);

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

  const onChangeRadio = (e) => {
    const { id, checked } = e.target;
    setRadioValue(id);
    setRadioChecked(checked);
  };

  return { checkboxValue, onChangeCheckbox, radioValue, radioChecked, onChangeRadio };
};

export default useInputSelection;
