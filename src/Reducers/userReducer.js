var users=[
    {
      "_id": "5d5e5fe762427a3b0c47cb6f",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Deana Meyers",
      "gender": "female",
      "email": "deanameyers@eplode.com",
      "phone": "+216 54 954 687",
      "address": "806 Livonia Avenue, Escondida, Northern Mariana Islands, 5968",
      "about": "Incididunt laborum officia aliquip enim. Incididunt pariatur do consequat esse ea eiusmod do aliqua sit. Pariatur fugiat veniam duis velit fugiat tempor excepteur aliqua amet exercitation. Elit incididunt duis id incididunt nulla ullamco minim mollit velit cupidatat minim excepteur. Dolor reprehenderit dolor voluptate ut sit.\r\n",
      "registered": "2017-05-29T02:44:39 -01:00",
      "latitude": -30.743767,
      "longitude": -96.142152
    },
    {
      "_id": "5d5e5fe7d8e294957811632c",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "age": 49,
      "name": "Sanchez Owens",
      "gender": "male",
      "email": "sanchezowens@eplode.com",
      "phone": "+216 25 321 123",
      "address": "446 Sands Street, Ilchester, Palau, 6358",
      "about": "Qui est consectetur adipisicing commodo dolore sunt esse ad in ullamco consectetur. Enim sint laborum nostrud ad do fugiat et nisi culpa laborum. Officia adipisicing culpa reprehenderit mollit culpa laborum esse commodo. In mollit sit ut nulla Lorem.\r\n",
      "registered": "2017-08-22T06:18:36 -01:00",
      "latitude": 86.815933,
      "longitude": 4.988857
    },
    {
      "_id": "5d5e5fe7bb8f7473b95627c4",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 42,
      "name": "Meyer Davenport",
      "gender": "male",
      "email": "meyerdavenport@eplode.com",
      "phone": "+216 36 247 753",
      "address": "431 Bancroft Place, Johnsonburg, Arkansas, 1477",
      "about": "Proident qui voluptate labore cupidatat aute occaecat est elit. Mollit id cupidatat Lorem quis ut non proident amet incididunt minim ut est. Laborum amet et esse sunt aliquip do irure cillum excepteur incididunt irure ad eu. Ea consectetur dolor nostrud amet anim. Non nostrud cillum nisi esse veniam incididunt magna voluptate. Veniam deserunt do culpa ad exercitation. Duis culpa ut cupidatat veniam eiusmod.\r\n",
      "registered": "2015-12-24T12:44:14 -01:00",
      "latitude": -29.236155,
      "longitude": -20.095863
    },
    {
      "_id": "5d5e5fe751263e7dcb16ff99",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Coffey Patterson",
      "gender": "male",
      "email": "coffeypatterson@eplode.com",
      "phone": "+216 23 654 951",
      "address": "272 Richardson Street, Sparkill, New Mexico, 1138",
      "about": "Consectetur aliquip laborum laboris duis nisi sunt. Fugiat amet qui tempor aliqua. Esse ad nulla aute veniam. Sit incididunt nulla veniam consectetur nisi ex ea enim velit non aliquip ullamco.\r\n",
      "registered": "2017-07-02T12:57:05 -01:00",
      "latitude": 54.713784,
      "longitude": 125.457288
    },
    {
      "_id": "5d5e5fe78f9881a666c4824e",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "age": 53,
      "name": "Shaffer Savage",
      "gender": "male",
      "email": "shaffersavage@eplode.com",
      "phone": "+216 98 325 698",
      "address": "520 Marconi Place, Sunriver, Ohio, 9401",
      "about": "Id labore in culpa non ex sint tempor nisi. Consectetur elit adipisicing culpa quis cillum labore ea ad exercitation aliquip in irure aliquip. Id fugiat dolore deserunt duis est officia consequat. Tempor esse nulla mollit amet enim nostrud duis anim. Elit consectetur magna proident esse aliqua cupidatat quis deserunt quis fugiat sit magna aliquip. Est Lorem consectetur ea sit laboris labore tempor elit adipisicing non cupidatat minim ut.\r\n",
      "registered": "2018-03-20T08:37:09 -01:00",
      "latitude": -68.063122,
      "longitude": 25.696862
    }
  ]
  
  const userReducer=(state=users,action)=>
  {
    switch(action.type)
    {
        case 'ADD_USER' :
        return (
            state.concat(action.newuser)
        )
        case 'BLOCK_USER':
        return (
            state.map(el=>el._id===action.blockuser._id? el=action.blockuser:el)
        )
        case 'UNBLOCK_USER':
        return (
          state.map(el=>el._id===action.blockuser._id? el=action.blockuser:el)
        )
        default :
        return state
    }
  }
  export default userReducer