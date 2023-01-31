type Itab = {
  tab: number;
};

export default function DetailTab(props: Itab) {
  return [<div>detail0</div>, <div>detail1</div>, <div>detail2</div>][
    props.tab
  ];
}
