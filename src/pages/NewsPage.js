import React from 'react'
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'
import { useParams } from 'react-router-dom';

function NewsPage() {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  let { category } = useParams();
  if (!category) category = 'all';
  return (
    <div>
      <Categories category={category} />
      <NewsList category={category} />
    </div>

  )
}

export default NewsPage
