var images=[
    {
        "id_img": "5d8367986743db414419a64a",
        "id_exp":"",
        "titre": "2017-05-29T02:44:39 -01:00",
        "url": "http://placehold.it/32x32"
      },
      {
        "id_img": "5d8367983820ac20752a3682",
        "id_exp":"",
        "titre": "2017-08-22T06:18:36 -01:00",
        "url": "http://placehold.it/32x32"
      },
      {
        "id_img": "5d836798e1dac1b8d8ab8e17",
        "id_exp":"",
        "titre": "2015-12-24T12:44:14 -01:00",
        "url": "http://placehold.it/32x32"
      },
      {
        "id_img": "5d836798a963529d90e84c1e",
        "id_exp":"",
        "titre": "2015-12-24T12:44:14 -01:00",
        "url": "http://placehold.it/32x32"
      },
      {
        "id_img": "5d836798ec0bfc3ef9a92366",
        "id_exp":"",
        "titre": "2018-03-20T08:37:09 -01:00",
        "url": "http://placehold.it/32x32"
      }
]
const imageReducer=(state=images,action)=>
  {
    console.log(action);
    switch(action.type)
    {
            case 'ADD_IMAGE' :
            return (
                state.concat(action.newimage)
            )
            case 'EDIT_IMAGE':
            return (
                state.map(el=>el.id_img===action.editcategory.id_img? el=action.editcategory:el)
            )
            case 'REMOVE_IMAGE':
            return (
            state.filter(el=>el.id_img!==action.id_img)
            )
        default :
        return state
    }
  }
  export default imageReducer