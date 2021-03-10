import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  // constructor() {
  //   super(props);
  // }
  render() {
    const authorName = 'yuya';
    return (
      <>
        <Article title={'Reactの使い方'}/>
        <Article title={'JSXの使い方'}/>
        <Article title={'環境構築をしてみよう'}/>
      </>
    )
  }
}

export default Blog;
