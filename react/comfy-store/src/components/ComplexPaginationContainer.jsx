import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
    const {meta} = useLoaderData();
    const { pageCount, page } = meta.pagination;

    const {search, pathname} = useLocation();
    const navigate = useNavigate();

    const addPageButton = ({ pageNumber, activeClass }) => {
        return <button key={pageNumber} onClick={()=> handlePageChange(pageNumber)} className={`btn btn-xs sm:btn-md border-none join-item ${activeClass && 'bg-base-300 border-base-300' }`} >{pageNumber}</button>
    };

    const renderPageButtons = () => {
        const pageButtons = [];
        //first page
        pageButtons.push(addPageButton({pageNumber: 1, activeClass:1 === page}));

        //dots
        if (page > 2) {
            pageButtons.push(
                <button key='dots1' className="join-item btn btn-xs sm:btn-md">...</button>
            );
        }

        //current page
        if(page !== 1 && page !== pageCount) pageButtons.push(addPageButton({pageNumber: page, activeClass: true}));

        //dots
        if (page < pageCount -1) {
            pageButtons.push(
                <button key='dots2' className="join-item btn btn-xs sm:btn-md">...</button>
            );
        }

        //last page
        pageButtons.push(addPageButton({pageNumber: pageCount, activeClass:pageCount === page}));
        return pageButtons;
    }

    if(pageCount < 2) return null

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`)
    };
    return(
        <div className="mt-16 flex justify-end">
            <div className="join">
                <button disabled={page === 1} className="btn btn-xs sm:btn-md join-item" onClick={() => handlePageChange(page - 1)}>
                    Anterior
                </button>

                {renderPageButtons()}

                <button disabled={page === pageCount} className="btn btn-xs sm:btn-md join-item" onClick={() => handlePageChange(page + 1)}>
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default ComplexPaginationContainer;
