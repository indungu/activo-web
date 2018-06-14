// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// styles
import './AssetCategoryCard.scss';

// components
import { AssetCategoryCardProps } from './interfaces';

const AssetCategoryCard = (props: AssetCategoryCardProps) => {
  return (
    <Link to={`/assets/${props.id}`} className="grid-item">
      <p className="room-tag">{props.name}</p>
      <p className="item-value">{props.count.toLocaleString()}</p>
    </Link>
  );
};

export default AssetCategoryCard;
