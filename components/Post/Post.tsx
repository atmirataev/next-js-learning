import React, { FC, memo } from 'react';
import Date from '../date';
import utilStyles from '../../styles/utils.module.css';
import { IPost } from './types';

type OwnProps = {
  post: IPost;
};

const Post: FC<OwnProps> = ({ post: { title, date, contentHtml } }) => {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export default memo(Post);
