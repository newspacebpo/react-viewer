import * as React from 'react';
import { ImageDecorator } from './ViewerProps';

export interface ViewerNavSideProps {
  prefixCls: string;
  images: ImageDecorator[];
  activeIndex: number;
  showPaginator: boolean;
  onChangeImg: (index: number) => void;
}

export default class ViewerNavSide extends React.Component<ViewerNavSideProps, any> {
  static defaultProps = {
    activeIndex: 0,
  };

  handleChangeImg = (newIndex) => {
    if (this.props.activeIndex === newIndex) {
      return;
    }
    this.props.onChangeImg(newIndex);
  }

  render() {

    let paginator = null;
    if (this.props.showPaginator) {
      paginator = (
        <div className={`${this.props.prefixCls}-navbar-paginator`}>
          Imagem {this.props.activeIndex + 1} de {this.props.images.length}
        </div>
      );
    }

    return (
      <div className={`${this.props.prefixCls}-navbarside`}>
        <ul className={`${this.props.prefixCls}-list ${this.props.prefixCls}-list-transition`} >
          {this.props.images.map((item, index) =>
            <li
            key={index}
            className={index === this.props.activeIndex ? 'active' : ''}
            onClick={() => { this.handleChangeImg(index); }}
            >
              <img src={item.src} alt={item.alt} title={item.alt} />
            </li>
            )
          }
        </ul>
        {paginator}
      </div>
    );
  }
}
