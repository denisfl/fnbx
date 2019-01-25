import React, { Component, Fragment }  from 'react';
import styles from './styles.scss';

const Icon = () => (
  <svg className={styles.itemDecor} viewBox="0 0 320 480" >
    <use className={styles.itemDecorBg} fill="#F2F2F2" xlinkHref="#symbol-mask"/>
    <image xlinkHref="images/cat.png" alt="cat" width="368" height="360" x="-24" y="208"/>
    <use className={styles.itemDecorBorder} xlinkHref="#symbol-mask"/>
  </svg>
)

class Item extends Component {
  constructor(props) {
    super(props);

    this.toggleSelected = this.toggleSelected.bind(this)
    this.state = {
        selected: false
    };
  }

  toggleSelected () {
    const currentSelectedState = this.state.selected
    this.setState({ selected: !currentSelectedState })
  }

  pluralismOfMouses () {
    const count = this.props.item.gift

    // Работает для частного случая. В идеале надо считать остаток от деления на 10
    switch (true) {
      case (count === 1):
        return 'мышь'
      case (count < 5):
        return 'мыши'
      case (count >= 5):
        return 'мышей'
    }
  }

  render() {
    const { item } = this.props;

    return (
      <div className={[
        styles.item,
        this.state.selected ? styles.itemSelected : null,
        item.count === 0 ? styles.itemDisabled : null
      ].join(' ')}>
        <div className={styles.itemInner} onClick={ this.toggleSelected }>
          <Icon />
          <div className={styles.itemHeader}>
            <div className={styles.itemSubTitle} data-default="Сказочное заморское явство" data-hover="Котэ не одобряет?">
              <span></span>
            </div>
            <div className={styles.itemTitle}>Нямушка</div>
            <div className={styles.itemTaste}>{item.taste}</div>

            <div className={styles.itemInfo}>
              <div>{item.portions} порций</div>
              <div><b>{item.gift}</b> {this.pluralismOfMouses()}</div>
              { item.additionalText ? <div>{item.additionalText}</div> : '' }
            </div>
          </div>
          <div className={styles.itemWeight}>
            <div className={styles.itemWeightNumber}>{item.weight}</div>
            <div className={styles.itemWeightMeasure}>кг</div>
          </div>
        </div>
        <div className={styles.itemFooter}>
          {(this.state.selected) && (item.details)}
          {(item.count === 0) && (`Печалька, ${item.taste} закончился.`)}
          {(item.count > 0) && !this.state.selected && (
            <Fragment>
              Чего сидишь? Порадуй котэ, <button className={styles.itemFooterAction}
                                                onClick={ this.toggleSelected }
                                                type="button">купи</button>.
            </Fragment>
          )}
        </div>
      </div>
    )
  };
};

export default Item;
