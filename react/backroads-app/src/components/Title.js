const Title = ({title, ndTitle}) => {
    return (
        <div className="section-title">
            <h2>{title} <span>{ndTitle}</span></h2>
        </div>
    );
};

export default Title;
