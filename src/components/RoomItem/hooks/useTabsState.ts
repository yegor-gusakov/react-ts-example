import { useState, SyntheticEvent, useEffect } from 'react';
import { useApiService, ApiMethods } from '../../../hooks';

export const ConsentDetailsPaths: { [key: string]: string } = {
  Extraction: `extraction.json`,
  Implant: `implant.json`,
  'Bone Graft': `bone_graft.json`,
  'Sinus Lift': `sinus_lift.json`,
};

export const useTabsState = (tabTitles: Set<string>) => {
  const [arrTabTitles, setArrTabTitles] = useState<string[]>(Array.from(tabTitles));
  const { fetchState, setIsDoRequest, setUrl } = useApiService(ApiMethods.getConsentFormDetails, true, ConsentDetailsPaths[arrTabTitles[0]]);
  const [activeItem, setActiveItem] = useState(ConsentDetailsPaths[arrTabTitles[0]]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    setArrTabTitles(Array.from(tabTitles));
  }, [tabTitles]);

  useEffect(() => {
    setActiveItem(ConsentDetailsPaths[arrTabTitles[0]]);
    setUrl(ConsentDetailsPaths[arrTabTitles[0]]);
    setIsDoRequest(true);
    setCheckedItems([]);
  }, [arrTabTitles]);

  const onTabClick = (evt: SyntheticEvent): void => {
    evt.preventDefault();
    const target = evt.target as HTMLLinkElement;
    setActiveItem(target.id);
    setUrl(target.id);
    setIsDoRequest(true);
    setCheckedItems([]);
  };

  const onInputChange = (i: number): void => {
    !checkedItems.includes(i) && setCheckedItems([...checkedItems, i]);
  };

  return { fetchState, arrTabTitles, activeItem, checkedItems, onTabClick, onInputChange };
};
