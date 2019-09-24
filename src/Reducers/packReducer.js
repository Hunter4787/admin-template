var packs=[
    {
      "id_pack": "5d836ae08e6f9d6013e4e35b",
      "id_user": "5d836ae0b97af5f52dad6348",
      "num_annonce": 0,
      "about": "Ea enim irure quis elit commodo officia incididunt mollit duis eu voluptate amet. Eu irure ullamco excepteur veniam cillum. Voluptate dolore aute qui nostrud do eu. Quis proident aliqua aute ullamco ipsum cupidatat cillum exercitation aliquip tempor do consequat enim. Non sit aute ipsum amet non incididunt id amet laboris. Aute do nostrud tempor ut cupidatat.\r\n",
      "prix": "$1,989.97",
      "date_debut": "2014-06-15T01:20:01 -01:00",
      "date_fin": "2017-09-09T09:53:48 -01:00"
    },
    {
      "id_pack": "5d836ae053c77b43c2a254c9",
      "id_user": "5d836ae0150d7ace4e3b893d",
      "num_annonce": 1,
      "about": "Laboris cillum sunt excepteur adipisicing non ullamco ad irure adipisicing irure sint amet. Occaecat ex do magna ea ullamco aliqua ea laborum nulla ullamco reprehenderit cillum. Minim labore adipisicing cupidatat veniam veniam tempor anim cupidatat consectetur do. Nostrud sit nisi eiusmod sunt voluptate exercitation consectetur ullamco excepteur. Anim est cillum ipsum ipsum commodo nostrud excepteur eiusmod excepteur mollit aliqua eu.\r\n",
      "prix": "$2,219.32",
      "date_debut": "2015-12-06T01:35:59 -01:00",
      "date_fin": "2016-12-27T10:40:32 -01:00"
    },
    {
      "id_pack": "5d836ae07df71038cb9a7956",
      "id_user": "5d836ae00f166f7af8256e5c",
      "num_annonce": 2,
      "about": "Exercitation cupidatat voluptate pariatur sint voluptate adipisicing proident dolor et dolor deserunt. Ad aliquip do consectetur ipsum do cillum tempor officia tempor adipisicing cillum. Deserunt in non aliqua minim. Amet qui tempor officia officia et ullamco aliquip tempor qui elit aute fugiat ad in. Ex quis pariatur excepteur ut.\r\n",
      "prix": "$3,304.18",
      "date_debut": "2016-06-28T06:26:46 -01:00",
      "date_fin": "2015-10-24T05:24:41 -01:00"
    }
  ]
  const packReducer=(state=packs,action)=>
  {
    console.log(action);
    switch(action.type)
    {
            case 'ADD_PACK' :
            return (
                state.concat(action.newpack)
            )
            case 'EDIT_PACK':
            return (
                state.map(el=>el.id_pack===action.editcategory.id_pack? el=action.editcategory:el)
            )
            case 'REMOVE_PACK':
            return (
            state.filter(el=>el.id_pack!==action.id_pack)
            )
        default :
        return state
    }
  }
  export default packReducer