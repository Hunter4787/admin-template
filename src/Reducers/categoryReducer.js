let categories=[
        {
          "id_categorie": "5d5e74800c7fb5f9d347005f",
          "image": "/assets/img/mechanic.jpg",
          "titre": "Automobiles",
          "description": "Dolore irure laborum duis consequat do nisi magna sint nostrud incididunt culpa aliquip eiusmod cupidatat.\r\n",
        },
        {
          "id_categorie": "5d5e748186ee75d9b1986e34",
          "image": "/assets/img/electrician.jpg",
          "titre": "Electricité",
          "description": "Commodo esse cupidatat anim tempor velit reprehenderit deserunt esse sint adipisicing quis quis est duis.\r\n",
        },
        {
          "id_categorie": "5d5e74814d72514c79aa0cb1",
          "image": "/assets/img/electro.jpg",
          "titre": "Electroménager",
          "description": "Deserunt anim ad proident eu et pariatur ut eiusmod officia non incididunt. Non dolore ad cillum anim esse.\r\n",
        },
        {
          "id_categorie": "5d5e7481ff444b22f6a391f2",
          "image": "/assets/img/forgeron.jpg",
          "titre": "Forgeron",
          "description": "Laboris qui labore id culpa exercitation dolor eu enim nisi aute ea dolore.\r\n",
        },
        {
          "id_categorie": "5d5e74817d56213997891ac0",
          "image": "/assets/img/menuisier.jpg",
          "titre": "Menuisier",
          "description": "Velit commodo proident commodo culpa ex aliqua aliqua.\r\n",
        },
        {
          "id_categorie": "5d5e7481f482f3b2218a9542",
          "image": "/assets/img/montre.jpg",
          "titre": "Montre",
          "description": "Ex sunt et amet qui esse id elit dolore occaecat non.\r\n",
        },
        {
          "id_categorie": "5d5e74819d32abee03ed15ba",
          "image": "/assets/img/moto.jpg",
          "titre": "Moto",
          "description": "Ex velit duis culpa cupidatat nulla est mollit sint labore nisi. Pariatur aliquip ea fugiat non et esse deserunt eiusmod.\r\n",
        },
        {
          "id_categorie": "5d5e7481bceadef802d50b22",
          "image": "/assets/img/peinture.jpg",
          "titre": "Peinture",
          "description": " Aliquip fugiat ipsum ea consequat sit esse anim culpa sit. Incididunt et incididunt ipsum officia non est qui sint.\r\n",
        },
        {
          "id_categorie": "5d5e74813b46cdd0e376aece",
          "image": "/assets/img/plombier.jpg",
          "titre": "Plomberie",
          "description": "Culpa sit deserunt mollit mollit cupidatat minim reprehenderit deserunt eu.\r\n",
        },
        {
          "id_categorie": "5d5e748114ae9d0172dc61b8",
          "image": "/assets/img/tv-ordinateur-et-téléphone.jpg",
          "titre": "TV, Ordinateurs et Téléphones",
          "description": "Anim veniam laborum labore minim pariatur minim sint ex laborum cupidatat.\r\n",
        }
  ]
  
  const categoryReducer=(state=categories,action)=>
  {
    console.log(action);
    switch(action.type)
    {
            case 'ADD_CATEGORY' :
            return (
                state.concat(action.newcategory)
            )
            case 'EDIT_CATEGORY':
            return (
                state.map(el=>el.id_categorie===action.editcategory.id_categorie? el=action.editcategory:el)
            )
            case 'REMOVE_CATEGORY':
            return (
            state.filter(el=>el.id_categorie!==action._id)
            )
            case 'UPDATE_CONTACTS':
              return(
                  state=action.contacts
              )
        default :
        return state
    }
  }
  export default categoryReducer