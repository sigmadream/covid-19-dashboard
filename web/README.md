# Gatsby 관련 정보

## CSS 프레임워크

- [tailwindcss](https://tailwindcss.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [mui](https://mui.com/)
- [Ant Design](https://ant.design/)
- [chakra](https://chakra-ui.com/)

## Charts

- [React Google Charts](https://www.react-google-charts.com/)
- [ECharts](https://echarts.apache.org/en/index.html)
- [react-chartjs-2](https://react-chartjs-2.js.org/)

## Gatsby의 WARN 해결

Gatsby는 현재(`v5.8.x`) `react-server-dom-webpack`의 실험적 버전을 사용하고 있습니다. 이것은 React의 experimental version을 종속성으로 정의되어 있습니다. 해당 종속성을 React의 `v18.x`로 새롭게 정의하는 방법으로 WARN을 해결하였습니다. `Gatsby`의 버전 업데이트를 통해서 해결된다면 `package.json`을 수정하도록 하겠습니다. 관련 자료는 아래 링크를 참고하세요.

- [Fresh Gatsby 5.2 install, throwing NPM WARN flags for react-server-dom-webpack #37242](https://github.com/gatsbyjs/gatsby/issues/37242)
