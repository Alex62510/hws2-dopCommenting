const initState = {
    themeId: 1,
}
type ChangeThemeIdAction=ReturnType<typeof changeThemeId>
export const themeReducer = (state = initState, action: ChangeThemeIdAction): any => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state,themeId:Number(action.id)}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
