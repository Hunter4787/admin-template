const sousCategories=[]

const sousCategoriesReducer=(state=sousCategories,action)=>
  {
    switch(action.type)
    {
            case 'ADD_SOUSCATEGORY' :
            return (
                state.concat(action.newcategory)
            )
      
            case 'EDIT_SOUSCATEGORY':
            return (
                state.map(el=>el._id===action.editcategory._id? el=action.editcategory:el)
            )
            case 'REMOVE_SOUSCATEGORY':
            return (
              state.filter(el=>el._id!==action._id)
            )
            case 'UPDATE_SOUSCATEGORY':
            return(
                state=action.category
            )
        default :
        return state
    }
  }
  export default sousCategoriesReducer
