import React, { useEffect, useRef } from 'react';
import { ILettersProps} from '../_type'
import styles from './index.scss';

const Letters = function(props:ILettersProps):JSX.Element {
  const { letters, setLetter, setTipsState } = props;
  const boxRef = useRef<HTMLUListElement | null>(null);
  useEffect(function() {
    // 右侧字母触摸判断逻辑
    let touchmoveHandler:any;
    let touchendHandler:any;
    if (boxRef && boxRef.current) {
      const elem = boxRef.current;
      touchmoveHandler = function touchmove(
        e:React.TouchEvent<HTMLUListElement>,
      ) {
        e.preventDefault();
        // 坐标（获取当前触控点的坐标）
        const y = e.touches[0].clientY;
        const x = e.touches[0].clientX;
        // 根据当前纵向坐标控制内容的位置
        const MaxL = elem.getBoundingClientRect().left;
        const MaxR = elem.getBoundingClientRect().right;
        const MaxT = elem.getBoundingClientRect().top;
        const MaxB =
          elem.getBoundingClientRect().top +
          elem.getBoundingClientRect().height;
        // 判断是否从一个字母到另一个字母
        if (x >= MaxL && x <= MaxR && y >= MaxT && y <= MaxB && x && y) {
          const ele = document.elementFromPoint(x, y);
          if (ele?.tagName.toUpperCase() === 'LI') {
            const eleContent = ele! && ele.innerHTML;
            setLetter(eleContent);
            setTipsState(true);
          }
        }
      };
      touchendHandler = () => {
        setTipsState(false);
      };
      elem.addEventListener('touchmove', touchmoveHandler);
      elem.addEventListener('touchend', touchendHandler);
    }
    return function() {
      if (boxRef && boxRef.current) {
        const elem = boxRef.current;
        elem.removeEventListener('touchmove', touchmoveHandler);
        elem.removeEventListener('touchend', touchendHandler);
      }
    };
  }, []);
  const clickHandler = (e:React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const ele = e.currentTarget;
    if (ele?.tagName.toUpperCase() === 'LI') {
      const eleContent = ele! && ele.innerHTML;
      setLetter(eleContent);
      setTipsState(true);
      setTimeout(() => setTipsState(false), 300);
    }
  };
  return (
    <ul
      className={styles.letter}
      ref={boxRef}>
      {letters.map((item, index) => (
        <li
          className={styles.item}
          key={index}
          onClick={clickHandler}>
          {item}
        </li>
      ))}
    </ul>
  );
};


export default Letters;
