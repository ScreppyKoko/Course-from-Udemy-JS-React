import { Helmet, HelmetProvider } from 'react-helmet-async';

import AppBanner from "../appBanner/AppBanner";
import ComicsList from '../comicsList/ComicsList';

const ComicsPages = () => {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <meta
                        name="description"
                        content="Page with list of our comics"
                    />
                    <title>Comics page</title>
                </Helmet>
                <AppBanner />
                <ComicsList />
            </>
        </HelmetProvider>
    )
}

export default ComicsPages;