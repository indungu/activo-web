// react libraries
import * as React from 'react';

// styles
import './AssetCategoryCard.scss';

// components
import { AssetCategoryCardProps } from './interfaces';

const AssetCategoryCard = (props: AssetCategoryCardProps) => {
  return (
    <div className="grid-item">
      <p className="room-tag">{props.name}</p>
      <p className="item-value">{props.count.toLocaleString()}</p>
    </div>
  );
};

export default AssetCategoryCard;
