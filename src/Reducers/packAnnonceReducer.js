var messages=[
    {
      "id_reservation": "5d838116bfac666c73b3e79e",
      "id_user": "5d8381169963d125b1e1f5fc",
      "id_annonce": "5d8381163cbc6bb10d935162",
      "prix": "$980.51",
      "Visible": true
    },
    {
      "id_reservation": "5d838116914f20a4439dda16",
      "id_user": "5d8381167804170ce1749b29",
      "id_annonce": "5d83811669030204a16640a1",
      "prix": "$386.08",
      "Visible": false
    },
    {
      "id_reservation": "5d838116fd98e5c202d3c36d",
      "id_user": "5d8381160f90d51bf28e7c16",
      "id_annonce": "5d83811678c91f2c79bce839",
      "prix": "$922.65",
      "Visible": false
    },
    {
      "id_reservation": "5d838116a89582d613dcec5d",
      "id_user": "5d838116bd848799baf65ca5",
      "id_annonce": "5d8381167313f77c4d16bfb6",
      "prix": "$833.35",
      "Visible": false
    },
    {
      "id_reservation": "5d838116d092785553f79a18",
      "id_user": "5d838116ffb758de0a79d00f",
      "id_annonce": "5d8381163bd6f18fdce1fab3",
      "prix": "$151.91",
      "Visible": true
    },
    {
      "id_reservation": "5d83811613af20ef95a52287",
      "id_user": "5d838116586343fb07bf5800",
      "id_annonce": "5d83811630175d3deb2e5e36",
      "prix": "$656.84",
      "Visible": false
    }
  ]
  const packAnnonceReducer=(state=messages,action)=>
  {
    console.log(action);
    switch(action.type)
    {
            case 'ADD_PA' :
            return (
                state.concat(action.newpa)
            )
            case 'EDIT_PA':
            return (
                state.map(el=>el.id_reservation===action.editcategory.id_reservation? el=action.editcategory:el)
            )
            case 'REMOVE_PA':
            return (
            state.filter(el=>el.id_reservation!==action.id_reservation)
            )
        default :
        return state
    }
  }
  export default packAnnonceReducer