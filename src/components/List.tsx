import React from 'react'
import {BiLike } from 'react-icons/bi';
import { Iposts } from './type';


const List = ({listPosts}:Iposts[]) => {
  return (
    <div className='section-center'>
      {listPosts.map((post:Iposts)=>{

      const {id, title,img,body, tags,reactions} = post;
      return (
        <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
          <div className='item-info'>
            <header>
              <h4 className='list-title'>{title}</h4>
              <h4 className='reaction'>{reactions}<BiLike /></h4>
            </header>
            <p className='item-text'>{body}</p>
            <li className='posts-tag'> {tags.map((tag:String)=>{return <h5>{tag}</h5>})} </li>
          </div>
        </article>
      );
    })}
  </div>
);
};

export default List;