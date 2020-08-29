import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import css from './select.module.scss';

const Select = (props) => {

  const { items, defaultSelected, onSelect, title } = props;
  const selectedOption = items.find(item => item.id === defaultSelected);

  let [ opened, setOpened ] = useState(false);
  let [ selectedItem, setSelectedItem ] = useState(selectedOption);

  const clickHandler = (e) => {
    if (e.target.dataset.open) {
      setOpened(opened => !opened);
    } 
    else if (e.target.dataset.selectItem) {
      let selected = items.find(item => item.id === e.target.dataset.id);
      setSelectedItem(selected);
      setOpened(false);
      onSelect(selected);
    }
    else {
      setOpened(false);
    }
  }
 
  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    }
  }, [])

  const elements = items.map(item => {
    return (
      <li 
        className={ classNames(
          css.item, 
          { 
            [css.selectedItem] : item.id === selectedItem.id 
          }
        )} 
        key={item.id} 
        data-select-item 
        data-id={item.id}
      >
        {item.text}
      </li>
    )
  })

  return (
    <div className={ classNames(css.selectBox, { [css.opened] : opened }) } data-selectbox>
      <div className={css.head} data-open>
        {title && title}{selectedItem.text}
      </div>
      <div className={css.list}>
        <ul>
          {elements}
        </ul>
      </div>

    </div>
  )
}

export default Select;
