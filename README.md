# CountrySelector

国家手机区号选择器移动端组件，仿微信通讯录交互、支持多种语言显示。

### 效果演示

![演示gif](https://dev-cdn-common.codemao.cn/dev/596/1623221829031CleanShot%202021-06-09%20at%2014.56.28.gif)

### 代码演示
```tsx
import React,{useState} from 'react';
import { CountrySelector } from '@breezez/react-country-code-selector';

export default () => {
  const [visible, setVisible] = useState(true)
  return (
    <>
    {
      visible  
        ? <CountrySelector
          language={'hk'}
          onClose={()=> setVisible(false)} 
          dispatch={(values)=> console.log(values)}
        />
      : null
    }
    </>
  );
}
```
### API

|  属性     | 说明    | 类型                          | 默认值    |
|----------|---------|------------------------------|--------- |
| language | 国家语言 | cn、cn-hk、en                 | 默认cn简体|
| onClose  | 关闭弹窗 | ()=> void                    | 必须      |
| dispatch | 选择国家 |({areaCode, country})=> void  | 必须      |
