let categories=[
        {
          "_id": "5d5e74800c7fb5f9d347005f",
          "picture": "http://placekitten.com/g/30/30",
          "workerNumb": 18,
          "name": "Automobiles",
          "about": "Dolore irure laborum duis consequat do nisi magna sint nostrud incididunt culpa aliquip eiusmod cupidatat.\r\n",
          "registered": "2019-04-01T07:07:13 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Changement de pneu",
              "workers":3
            },
            {
              "id": 1,
              "name": "Mécanique générale",
              "workers":7
            },
            {
              "id": 2,
              "name": "Panne électrique voiture",
              "workers":4
            },
            {
              "id": 3,
              "name": "Panne mécanique voiture",
              "workers":8
            }
          ]
        },
        {
          "_id": "5d5e748186ee75d9b1986e34",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 4,
          "name": "Electricité",
          "about": "Commodo esse cupidatat anim tempor velit reprehenderit deserunt esse sint adipisicing quis quis est duis.\r\n",
          "registered": "2014-02-03T11:45:09 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Cablages électrique maison",
              "workers":1
            },
            {
              "id": 1,
              "name": "Installation électricité batiments",
              "workers":1
            }
          ]
        },
        {
          "_id": "5d5e74814d72514c79aa0cb1",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 4,
          "name": "Electroménager",
          "about": "Deserunt anim ad proident eu et pariatur ut eiusmod officia non incididunt. Non dolore ad cillum anim esse.\r\n",
          "registered": "2016-06-09T12:34:51 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Climatisation",
              "workers":5
            },
            {
              "id": 1,
              "name": "Fours et cuisinières",
              "workers":0
            },
            {
              "id": 2,
              "name": "Machina a laver",
              "workers":2
            },
            {
              "id": 3,
              "name": "Petite électroménagers",
              "workers":0
            }
          ]
        },
        {
          "_id": "5d5e7481ff444b22f6a391f2",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 8,
          "name": "Forgeron",
          "about": "Laboris qui labore id culpa exercitation dolor eu enim nisi aute ea dolore.\r\n",
          "registered": "2015-08-18T07:02:47 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Forgeron générale",
              "workers":8
            },
            {
              "id": 1,
              "name": "Soudage",
              "workers":6
            }
          ]
        },
        {
          "_id": "5d5e74817d56213997891ac0",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 13,
          "name": "Menuisier",
          "about": "Velit commodo proident commodo culpa ex aliqua aliqua.\r\n",
          "registered": "2014-05-16T08:18:31 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Menuisier alumiinium",
              "workers":3
            },
            {
              "id": 1,
              "name": "Menuisier charpentier",
              "workers":8
            }
          ]
        },
        {
          "_id": "5d5e7481f482f3b2218a9542",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 4,
          "name": "Montre",
          "about": "Ex sunt et amet qui esse id elit dolore occaecat non.\r\n",
          "registered": "2017-03-15T02:02:13 -01:00",
          "isActive": false,
          "sous-categorie": []
        },
        {
          "_id": "5d5e74819d32abee03ed15ba",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 3,
          "name": "Moto",
          "about": "Ex velit duis culpa cupidatat nulla est mollit sint labore nisi. Pariatur aliquip ea fugiat non et esse deserunt eiusmod.\r\n",
          "registered": "2015-12-22T03:43:41 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Bicyclette",
              "workers":2
            },
            {
              "id": 1,
              "name": "Moto cross",
              "workers":2
            },
            {
              "id": 2,
              "name": "Moto quad",
              "workers":1
            },
            {
              "id": 3,
              "name": "Moto vitesse",
              "workers":2
            }
          ]
        },
        {
          "_id": "5d5e7481bceadef802d50b22",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 3,
          "name": "Peintire",
          "about": " Aliquip fugiat ipsum ea consequat sit esse anim culpa sit. Incididunt et incididunt ipsum officia non est qui sint.\r\n",
          "registered": "2016-08-23T03:21:02 -01:00",
          "isActive": false,
          "sous-categorie": []
        },
        {
          "_id": "5d5e74813b46cdd0e376aece",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 8,
          "name": "Plomberie",
          "about": "Culpa sit deserunt mollit mollit cupidatat minim reprehenderit deserunt eu.\r\n",
          "registered": "2014-03-01T03:43:00 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Chodière",
              "workers":1
            },
            {
              "id": 1,
              "name": "Chauffage",
              "workers":3
            },
            {
              "id": 2,
              "name": "Fuites d'eau ou gaz",
              "workers":3
            },
            {
              "id": 3,
              "name": "Problèmes de sanitaires",
              "workers":2
            }
          ]
        },
        {
          "_id": "5d5e748114ae9d0172dc61b8",
          // "picture": require("../../public/assets/img/find_user.png"),
          "workerNumb": 5,
          "name": "TV, Ordinateurs et Téléphones",
          "about": "Anim veniam laborum labore minim pariatur minim sint ex laborum cupidatat.\r\n",
          "registered": "2014-04-14T04:00:35 -01:00",
          "isActive": false,
          "sous-categorie": [
            {
              "id": 0,
              "name": "Tablette",
              "workers":1
            },
            {
              "id": 1,
              "name": "Téléphone portable",
              "workers":1
            },
            {
              "id": 2,
              "name": "TV",
              "workers":2
            },
            {
              "id": 3,
              "name": "Ordinateur",
              "workers":2
            }
          ]
        }
  ]
  
  const categoryReducer=(state=categories,action)=>
  {
    switch(action.type)
    {
            case 'ADD_CATEGORY' :
            return (
                state.concat(action.newcategory)
            )
      
            case 'EDIT_CATEGORY':
            return (
                state.map(el=>el._id===action.editcategory._id? el=action.editcategory:el)
            )
            case 'REMOVE_CATEGORY':
            return (
                state.filter(el=>el._id!==action._id)
            )
            case 'UPDATE_CATEGORy':
            return(
                state=action.category
            )
        default :
        return state
    }
  }
  export default categoryReducer