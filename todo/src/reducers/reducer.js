
export let initalState = [

    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
            switch(action.type) {
                case 'ADD':
                    return [
                            ...state,

                            {
                                item: action.payload,
                                completed: false,
                                id: new Date()
                            }
                        ]

                    case 'TOGGLE':
                        return state.map((item) => {
                            if (item.id === action.payload) {
                                       return {
                                            ...item, 
                                            completed: !item.completed
                                        }
                                    } else {
                                            return item;
                                        } 
                                    })
                    case 'CLEAR_COMPLETED':
                        return state.filter(item => {
                            return !item.completed
                        })

                                
                default: 
                    return state
                }       
            }
