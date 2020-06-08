
export const initalState = [

    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
            switch(action.type) {
                case 'ADD':
                    console.log('it ran!')
                    return [
                            ...state,
                            
                            {
                            item: action.payload,
                            completed: false,
                            id: new Date()
                            }
                        ]
                default: 
                    return state
                }       
            }
