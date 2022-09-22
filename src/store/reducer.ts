import * as actionTypes from './actionTypes';

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: 'post 1',
            body: 'I love all of the stuff and all of the stuff loves me and we just keep on going on loving each other and it is all excellent and wonderful and we just cannot get enough of all of the love and wonderful and excellent stuff and we just want to keep going on forever in this wonderful and excellent and super duper way.'
        },
        {
            id: 2,
            title: 'post 2',
            body: 'I have come to know all of the people that I once did not know and I have enjoyed learning of their lives and their experiences and all of the things that interest them and some of those interests I have adopted as my own interests and I plan to persue some of these interests more deeply that others of these interests and it will be a wonderful time.'
        }
    ]
};

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            };

            return {
                ...state,
                articles: state.articles.concat(newArticle)
            };
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(article => article.id !== action.article.id);

            return {
                ...state,
                articles: updatedArticles
            };
    }

    return state;
};

export default reducer;