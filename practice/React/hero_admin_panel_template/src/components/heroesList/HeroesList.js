import { useHttp } from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { heroesFetching, heroesFetched, heroesFetchingError, heroDeleted } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import './heroesList.scss';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const { filteredHeroes, heroesLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .then(data => console.log(data))
            .catch(() => dispatch(heroesFetchingError()))
        // eslint-disable-next-line
    }, []);

    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(dispatch(heroDeleted(id)))
            .then(data => console.log(data, 'Удаление успешно'))
            .catch(error => console.log(error));
        // eslint-disable-next-line
    }, [request]);

    if (heroesLoadingStatus === "loading") {
        return <Spinner />;
    }
    if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition classNames="hero" timeout={0}>
                    <h5 className="text-center mt-5">Героев пока нет</h5>
                </CSSTransition>
            )
        }

        // return arr.map(({ id, ...props }) => {
        //     return (
        //         <CSSTransition
        //             classNames="hero"
        //             key={id}
        //             timeout={500}>
        //             <HeroesListItem {...props} onDelete={() => onDelete(id)} />
        //         </CSSTransition>
        //     )
        // })

        return arr.map(({ id, ...props }) => {
            return <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        // <TransitionGroup component={'ul'}>
        //     {elements}
        // </TransitionGroup>

        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;