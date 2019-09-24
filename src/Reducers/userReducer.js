var users=[
    {
      "id_user": "5d5e5fe762427a3b0c47cb6f",
      "id_sousCategorie":"",
      "id_pack":"",
      "isActive": false,
      "photo_profile": "http://placehold.it/32x32",
      "age": 30,
      "nom": "Deana",
      "prenom": "Meyers",
      "sexe": "femme",
      "email": "deanomyers@eplode.com",
      "tel": "+216 54 954 687",
      "login":"",
      "password":"",
      "adresse": "806 Livonia Avenue, Escondida, Northern Mariana Islands, 5968",
      "code":"",
      "role":"",
      "disponibilite":"",
      "annee_exp":"",
      "description": "Incididunt laborum officia aliquip enim. Incididunt pariatur do consequat esse ea eiusmod do aliqua sit. Pariatur fugiat veniam duis velit fugiat tempor excepteur aliqua amet exercitation. Elit incididunt duis id incididunt nulla ullamco minim mollit velit cupidatat minim excepteur. Dolor reprehenderit dolor voluptate ut sit.\r\n",
      "registered": "2017-05-29T02:44:39 -01:00",
      "latitude": -30.743767,
      "longitude": -96.142152
    },
    {
      "id_user": "5d5e5fe7d8e294957811632c",
      "id_sousCategorie":"",
      "id_pack":"",
      "isActive": true,
      "photo_profile": "http://placehold.it/32x32",
      "age": 49,
      "nom": "Sanchez",
      "prenom":"Owens",
      "sexe": "male",
      "email": "sanchezowens@eplode.com",
      "tel": "+216 25 321 123",
      "login":"",
      "password":"",
      "adresse": "446 Sands Street, Ilchester, Palau, 6358",
      "code":"",
      "role":"",
      "disponibilite":"",
      "annee_exp":"",
      "Description": "Qui est consectetur adipisicing commodo dolore sunt esse ad in ullamco consectetur. Enim sint laborum nostrud ad do fugiat et nisi culpa laborum. Officia adipisicing culpa reprehenderit mollit culpa laborum esse commodo. In mollit sit ut nulla Lorem.\r\n",
      "latitude": 86.815933,
      "longitude": 4.988857
    },
    {
      "id_user": "5d5e5fe7bb8f7473b95627c4",
      "id_sousCategorie":"",
      "id_pack":"",
      "isActive": false,
      "photo_profile": "http://placehold.it/32x32",
      "age": 42,
      "nom": "Meyer",
      "prenom":"Davenport",
      "sexe": "male",
      "email": "meyerdavenport@eplode.com",
      "tel": "+216 36 247 753",
      "login":"",
      "password":"",
      "adresse": "431 Bancroft Place, Johnsonburg, Arkansas, 1477",
      "code":"",
      "role":"",
      "disponibilite":"",
      "annee_exp":"",
      "Description": "Proident qui voluptate labore cupidatat aute occaecat est elit. Mollit id cupidatat Lorem quis ut non proident amet incididunt minim ut est. Laborum amet et esse sunt aliquip do irure cillum excepteur incididunt irure ad eu. Ea consectetur dolor nostrud amet anim. Non nostrud cillum nisi esse veniam incididunt magna voluptate. Veniam deserunt do culpa ad exercitation. Duis culpa ut cupidatat veniam eiusmod.\r\n",
      "registered": "2015-12-24T12:44:14 -01:00",
      "latitude": -29.236155,
      "longitude": -20.095863
    },
    {
      "id_user": "5d5e5fe751263e7dcb16ff99",
      "id_sousCategorie":"",
      "id_pack":"",
      "isActive": true,
      "photo_profile": "http://placehold.it/32x32",
      "age": 39,
      "nom": "Coffey",
      "prenom":"Patterson",
      "sexe": "male",
      "email": "coffeypatterson@eplode.com",
      "tel": "+216 23 654 951",
      "login":"",
      "password":"",
      "adresse": "272 Richardson Street, Sparkill, New Mexico, 1138",
      "code":"",
      "role":"",
      "disponibilite":"",
      "annee_exp":"",
      "Description": "Consectetur aliquip laborum laboris duis nisi sunt. Fugiat amet qui tempor aliqua. Esse ad nulla aute veniam. Sit incididunt nulla veniam consectetur nisi ex ea enim velit non aliquip ullamco.\r\n",
      "registered": "2017-07-02T12:57:05 -01:00",
      "latitude": 54.713784,
      "longitude": 125.457288
    },
    {
      "id_user": "5d5e5fe78f9881a666c4824e",
      "id_sousCategorie":"",
      "id_pack":"",
      "isActive": false,
      "photo_profile": "http://placehold.it/32x32",
      "age": 53,
      "nom": "Shaffer",
      "prenom":"Savage",
      "sexe": "homme",
      "email": "shaffersavage@eplode.com",
      "tel": "+216 98 325 698",
      "login":"",
      "password":"",
      "adresse": "520 Marconi Place, Sunriver, Ohio, 9401",
      "code":"",
      "role":"",
      "disponibilite":"",
      "annee_exp":"",
      "Description": "Id labore in culpa non ex sint tempor nisi. Consectetur elit adipisicing culpa quis cillum labore ea ad exercitation aliquip in irure aliquip. Id fugiat dolore deserunt duis est officia consequat. Tempor esse nulla mollit amet enim nostrud duis anim. Elit consectetur magna proident esse aliqua cupidatat quis deserunt quis fugiat sit magna aliquip. Est Lorem consectetur ea sit laboris labore tempor elit adipisicing non cupidatat minim ut.\r\n",
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
            state.map(el=>el.id_user===action.blockuser.id_user? el=action.blockuser:el)
        )
        case 'UNBLOCK_USER':
        return (
          state.map(el=>el.id_user===action.blockuser.id_user? el=action.blockuser:el)
        )
        default :
        return state
    }
  }
  export default userReducer