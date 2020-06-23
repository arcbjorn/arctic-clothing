/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/zQHD5Wq/caps.png',
          id: 1,
          link: 'caps',
        },
        {
          title: 'hoodies',
          imageUrl: 'https://i.ibb.co/NxG6FjD/hoodies.jpg',
          id: 2,
          link: '',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/4FMs3Gz/sneakers.png',
          id: 3,
          link: '',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/KVfsQQF/women.jpg',
          size: 'large',
          id: 4,
          link: '',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/j4sdyfs/men.jpg',
          size: 'large',
          id: 5,
          link: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Directory;
