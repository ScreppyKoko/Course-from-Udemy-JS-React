import AppBanner from "../appBanner/AppBanner";
import ComicsList from '../comicsList/ComicsList';
import { useParams } from 'react-router-dom'

const ComicsPages = () => {
    return (
        <>
                <AppBanner />
                <ComicsList />
        </>
    )
}

export default ComicsPages;