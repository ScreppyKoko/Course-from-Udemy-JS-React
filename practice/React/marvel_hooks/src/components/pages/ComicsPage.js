import AppBanner from "../appBanner/AppBanner";
import ComicsList from '../comicsList/ComicsList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const ComicsPages = () => {

    return (
        <>
            <ErrorBoundary>
                <AppBanner />
                <ComicsList />
            </ErrorBoundary>
        </>
    )
}

export default ComicsPages;