# copy-text-to-cb

React component to copy text to clipboard on clicking with function to execute after copying.

## Installation
``` shell
npm install --save @gradeup/copy-text-to-cb
```

## Usage

### Import the module to your code
``` javascript
import CopyText from '@gradeup/copy-text-to-cb'; // React Component to be used for copying text on click
```

**usage**
```
import CopyText from '@gradeup/copy-text-to-cb';

<CopyText 
    text="Hello copy text" 
    component={props => <button {...props}>Copy</button>}
    cb={console.log}
/>
```

#### Params
Folowing are the params to be passed :

| option              | used for | required | default |
| ------------------- |----------| ---------| ------- |
| `text`              | text to be copied | true | - |
| `component`         | component on which click is to be activated | false | `props => <button type="button" {...props}>Copy</button>` |
| cb | function to execute after copying | false | `() => {}` |
| pop | pop message to show after copying or not | false | true
| popStyle | pop box style | false | `position: 'absolute', background: '#333', color: '#fff', padding: '3px', align: 'center', fontSize: '12px', transform: 'translateX(-50%)', left: '50%',transition: 'all 0.3s ease'`


`Change the text and enjoy copying on your website.`

## Links

You can visit some links for reference:

* [Github Link For Repo](https://github.com/AmanAgarwal041/copy-text-to-cb)
* [Npm Link for the module](https://www.npmjs.com/package/@gradeup/copy-text-to-cb)

## Organisation
[![Gradeup](https://gs-post-images.grdp.co/2018/10/gradeup-rocket-img1539852366965-76.png-rs-high-webp.png)](https://gradeup.co)


