import { useState, SyntheticEvent, ChangeEvent, useRef } from 'react';

export const useFormState = (amountInput: number) => {
  const [isSelectedAll, setSelectedAll] = useState(false);
  const [isShowSign, setIsShowSign] = useState(false);
  const [tabTitles, setTabTitles] = useState<Set<string>>(new Set());
  const [isShowTabs, setIsShowTabs] = useState(false);
  const containerInputRef = useRef(null);

  const onInputChange = (evt: ChangeEvent, tabTitle: string) => {
    evt.persist();
    const target = evt.target as HTMLInputElement;
    const formElements = target.form?.elements;

    if (target.checked) {
      setTabTitles((prevState) => prevState.add(tabTitle));
    } else {
      setTabTitles((prevState) => {
        prevState.delete(tabTitle);
        return prevState;
      });
    }

    setSelectedAll(tabTitles.size === amountInput);

    let hasCheckedInput = false;
    for (const item of formElements!) {
      if (item.tagName === `INPUT`) {
        const checkboxInput = item as HTMLInputElement;
        if (checkboxInput.checked) {
          hasCheckedInput = true;
          break;
        }
      }
    }
    setIsShowSign(hasCheckedInput);
    !hasCheckedInput && isShowTabs && setIsShowTabs(false)
  };

  const onSelectedAllButtonClick = () => {
    const containerInputs = containerInputRef.current! as HTMLDivElement;
    const inputs = containerInputs.querySelectorAll(`input`);
    let hasCheckedInput = true;
    inputs.forEach((input, i) => {
      if (isSelectedAll) {
        input.checked = false;
        i === inputs.length - 1 && setTabTitles(new Set());
        hasCheckedInput = false;
      } else {
        input.checked = true;
        setTabTitles((prevState) => prevState.add(input.name));
      }
    });
    setIsShowSign(hasCheckedInput);
    setSelectedAll((prevState) => !prevState);
    !hasCheckedInput && isShowTabs && setIsShowTabs(false)
  };

  const onSignButtonClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setIsShowTabs(true);
    setTabTitles(new Set(tabTitles));
  };

  return { isSelectedAll, isShowSign, isShowTabs, tabTitles, containerInputRef, onInputChange, onSelectedAllButtonClick, onSignButtonClick };
};
