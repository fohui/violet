# CountrySelector

国家手机区号选择器移动端组件，仿微信通讯录交互、支持多种语言显示。

### 代码演示
```tsx
/**
  * desc: 使用时，外部组件需要通过visible来控制显示
*/
import React,{useState} from 'react';
import { CountrySelector } from '@breezez/react-country-code-selector';

export default () => {
  const [language, setLanguage] = useState<'en'|'cn-hk'|'cn'>('cn-hk')
  const [visible, setVisible] = useState(false)
  return (
    <>
    <div className="demo">
      <p style={{fontSize: '14px'}}>Country Selector demo: </p>
       <button className="button" onClick={()=>{
        setLanguage('cn')
        setVisible(true)
      }}>
        cn
      </button>
      <button className="button" onClick={()=>{
        setLanguage('en')
        setVisible(true)
      }}>
        en
      </button>
      <button className="button" onClick={()=>{
        setLanguage('cn-hk')
        setVisible(true)
      }}>
        cn-hk
      </button>
    </div>
    {
      visible && 
      <CountrySelector
        language={language}
        onClose={()=> setVisible(false)} 
        dispatch={(values)=> alert(JSON.stringify(values))}
      />
    }
    </>
  );
}
```

### API

|  属性     | 说明    | 类型                          | 默认值    |
|----------|---------|------------------------------|--------- |
| language | 国家语言 | cn、cn-hk、en                 | cn       |
| onClose  | 关闭弹窗 | ()=> void                    | 必须      |
| dispatch | 选择国家 |({areaCode, country})=> void  | 必须      |

<Alert type="info">
  注意：表格的`|`需要在英文键盘下，中文键盘下的`|`markdown渲染会失败
</Alert>