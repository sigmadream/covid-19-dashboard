import React from 'react';
import { Slide } from './slide';
import { GlobalTable } from './global-table';
import { GlobalGeoChart } from './global-geo-chart';

export function GlobalSlide(props) {
  const { id, dataSource } = props;
  const { countryByCC, globalStats } = dataSource;
  return (
    <Slide id={id} title="국가별 현황">
      <GlobalGeoChart countryByCC={countryByCC} globalStats={globalStats} />
      <GlobalTable countryByCC={countryByCC} globalStats={globalStats} />
    </Slide>
  );
}
