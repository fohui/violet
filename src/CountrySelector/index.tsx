import React, { useState, Dispatch, useRef, useEffect } from 'react';
import { ICountryState, ICountry } from '../_type';
import { letters } from '../_util/letters';
import { countries } from '../_util/country-phone-code';
import Letters from './letters';
import Tips from './tips';
import CountryList from './countryList';
import styles from './index.scss';

function changeCountryName(language = ''){
  const countriesCopy = countries.concat();
  return countriesCopy.map((item) => {
    if(language === 'en'){
      item.name = item.en;
    }else if(language === 'cn-hk'){
      item.name = item.hk;
    }else if(language === 'cn'){
      item.name = item.name
    }

    return item;
  });
}

interface ISelectorProps {
  onClose:Dispatch<boolean>;
  dispatch:Dispatch<ICountryState>;
  language?:'en' | 'cn-hk' | 'cn'
}
export default function CountrySelector(props:ISelectorProps) {
  const { onClose, language='cn', dispatch } = props;
  const [letter, setLetter] = useState<string>('A');
  const [tipsState, setTipsState] = useState<boolean>(false);
  const [countryList, setCountryList] = useState<ICountry[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const onCloseHandler = (e:React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as typeof e.target;
    const elem = containerRef.current;
    if (target === elem) {
      onClose(false);
    }
  };
  const wrapDispatch = (data:ICountryState) => {
    dispatch(data);
    onClose(false);
  };

  useEffect(() => {
    const list = changeCountryName(language);
    setCountryList(list);
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onClick={onCloseHandler}>
      <Letters
        letters={letters}
        setLetter={setLetter}
        setTipsState={setTipsState}
      />
      <CountryList
        countries={countryList}
        letter={letter}
        dispatch={wrapDispatch}
      />
      <Tips
        txt={letter}
        tipsState={tipsState} />
    </div>
  );
}
