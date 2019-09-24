var exp=[
  {
    "id_exp": "5d5e5fe762427a3b0c47cb6f",
    "id_user":"",
    "titre": "2017-05-29T02:44:39 -01:00",
    "description": "Incididunt laborum officia aliquip enim. Incididunt pariatur do consequat esse ea eiusmod do aliqua sit. Pariatur fugiat veniam duis velit fugiat tempor excepteur aliqua amet exercitation. Elit incididunt duis id incididunt nulla ullamco minim mollit velit cupidatat minim excepteur. Dolor reprehenderit dolor voluptate ut sit.\r\n",
  },
  {
    "id_exp": "5d5e5fe7d8e294957811632c",
    "id_user":"",
    "titre": "2017-08-22T06:18:36 -01:00",
    "description": "Qui est consectetur adipisicing commodo dolore sunt esse ad in ullamco consectetur. Enim sint laborum nostrud ad do fugiat et nisi culpa laborum. Officia adipisicing culpa reprehenderit mollit culpa laborum esse commodo. In mollit sit ut nulla Lorem.\r\n",
  },
  {
    "id_exp": "5d5e5fe7bb8f7473b95627c4",
    "id_user":"",
    "titre": "2015-12-24T12:44:14 -01:00",
    "description": "Proident qui voluptate labore cupidatat aute occaecat est elit. Mollit id cupidatat Lorem quis ut non proident amet incididunt minim ut est. Laborum amet et esse sunt aliquip do irure cillum excepteur incididunt irure ad eu. Ea consectetur dolor nostrud amet anim. Non nostrud cillum nisi esse veniam incididunt magna voluptate. Veniam deserunt do culpa ad exercitation. Duis culpa ut cupidatat veniam eiusmod.\r\n",
  },
  {
    "id_exp": "5d5e5fe751263e7dcb16ff99",
    "id_user":"",
    "titre": "2015-12-24T12:44:14 -01:00",
    "description": "Consectetur aliquip laborum laboris duis nisi sunt. Fugiat amet qui tempor aliqua. Esse ad nulla aute veniam. Sit incididunt nulla veniam consectetur nisi ex ea enim velit non aliquip ullamco.\r\n",
  },
  {
    "id_exp": "5d5e5fe78f9881a666c4824e",
    "id_user":"",
    "titre": "2018-03-20T08:37:09 -01:00",
    "description": "Id labore in culpa non ex sint tempor nisi. Consectetur elit adipisicing culpa quis cillum labore ea ad exercitation aliquip in irure aliquip. Id fugiat dolore deserunt duis est officia consequat. Tempor esse nulla mollit amet enim nostrud duis anim. Elit consectetur magna proident esse aliqua cupidatat quis deserunt quis fugiat sit magna aliquip. Est Lorem consectetur ea sit laboris labore tempor elit adipisicing non cupidatat minim ut.\r\n",
  }
]

const expReducer=(state=exp,action)=>
  {
    console.log(action);
    switch(action.type)
    {
            case 'ADD_EXP' :
            return (
                state.concat(action.newexp)
            )
            case 'EDIT_EXP':
            return (
                state.map(el=>el.id_exp===action.editcategory.id_exp? el=action.editcategory:el)
            )
            case 'REMOVE_EXP':
            return (
            state.filter(el=>el.id_exp!==action.id_exp)
            )
        default :
        return state
    }
  }
  export default expReducer