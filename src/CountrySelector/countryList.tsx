import React, { useEffect, useRef } from 'react';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import { ICountryListProps } from '../_type';
import styles from './index.scss';

const CountryList = function(props:ICountryListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const { countries, letter, dispatch } = props;
  useEffect(() => {
    if(null !== listRef.current){
      disableBodyScroll(listRef.current);
    }
    return () => {
      if(null !== listRef.current){
        enableBodyScroll(listRef.current);
      }
    };
  }, []);

  useEffect(
    function() {
      const element = window.document.getElementById(letter);
      element && element.scrollIntoView();
    },
    [letter],
  );

  return (
    <div
      ref={listRef}
      className={styles.list}>
      {countries.map((item) => {
        if (item.letter) {
          return (
            <div
              className={styles.dt}
              key={item.en}
              id={item.en}>
              {item.name}
            </div>
          );
        }
        return (
          <div
            className={styles.dd}
            key={item.en}
            onClick={() =>
              dispatch({
                areaCode: item.tel,
                country: item.name,
              })
            }
          >
            {item.name}
            <span className={styles.right}>+{item.tel}</span>
          </div>
        );
      })}
    </div>
  );
};


export default CountryList;
