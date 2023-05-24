import React from 'react';
import { Slide } from '../components/slide';

export default function SinglePage({ pageContext }) {
  const { dataSource } = pageContext;
  const { countryByCC, globalStats } = dataSource;
  console.log(countryByCC);
  console.log(globalStats);
  return (
    <div>
      <h1>코로나보드</h1>
      <Slide title="국가별 현황">국가별 현황을 보여줍니다</Slide>
    </div>
  )
}
