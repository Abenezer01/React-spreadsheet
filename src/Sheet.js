import React from 'react';
import Spreadsheet from 'x-data-spreadsheet';
import debounce from 'lodash/debounce';

const save = debounce(data => {
  console.log('save', data);
}, 500);

const Sheet = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const s = new Spreadsheet(el.current, {
      view: {
        height: () => document.documentElement.clientHeight,
        width: () => document.documentElement.clientWidth
      }
    })
      .loadData({
        rows: {
          1: {
            cells: {
              0: { text: 'testingtesttestetst' },
              2: { text: 'testing' }
            }
          }
        }
      })
      .change(data => {
        save(data);
        console.log(s.validate());
      });
  }, []);

  return <div ref={el} />;
};

export default Sheet;
