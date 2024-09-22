function Article ({ number, title, main, img}) {
    return(
        <div className="article_box">
            <div className="item">
            <div className="text">
            <h1 className="number">{number}</h1>
            <p className="title">{title}</p>
            <p className="main">{main}</p>
            </div>
            <img className="img" src={img} />
            </div>
        </div>
    )
}

export default Article;