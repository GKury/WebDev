import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
    const {meta} = useLoaderData();
    const { pageCount, page } = meta.pagination;

    const {search, pathname} = useLocation();
    const navigate = useNavigate();

    if(pageCount < 2) return null

    const pages = Array.from({length:pageCount}, (_,index)=> index+1);

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

                {pages.map((pageNumber)=> {
                    return <button key={pageNumber} onClick={()=> handlePageChange(pageNumber)} className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page && 'bg-base-300 border-base-300' }`} >{pageNumber}</button>
                })}

                <button disabled={page === pageCount} className="btn btn-xs sm:btn-md join-item" onClick={() => handlePageChange(page + 1)}>
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default PaginationContainer;
