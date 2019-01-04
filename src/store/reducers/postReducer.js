const initState = {
    posts: [
        {id: '1', title: 'Behemoth', content: 'I Loved You At Your Darkest'},
        {id: '2', title: 'Cattle Decapitation', content: 'Circo Inhumanitas'},
        {id: '3', title: 'Vader', content: 'Hexenkessel'},
        {id: '4', title: 'Vesania', content: 'Rage Of Reason'}
    ]
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST': console.log('created post', action.post)
    }
    return state;
}

export default postReducer;