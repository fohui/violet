
/// <reference path="module.d.ts" />
import type { Dispatch} from 'react';

export type ICountryState = {
  areaCode:string;
  country:string;
}

export type ICountryListProps = {
  countries:ICountry[];
  letter:string;
  dispatch:Dispatch<ICountryState>;
}

export type ILettersProps = {
  setLetter:Dispatch<string>;
  letters:string[];
  setTipsState:Dispatch<boolean>;
}

export type ICountry = {
	short:string;
	name:string;
	en:string;
	tel:string;
	pinyin:string;
	hk:string;
	letter?:boolean;
}
