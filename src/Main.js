const Main = ({activeNote}) => {
    return  (
        <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" value ={activeNote.title} autoFocus />
            <textarea id="body" placeholder="write your note here" value ={activeNote.body} />
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <div className="markdown-preview">
                    {activeNote.body}
                </div>

            </div>
            </div>

    </div>
    )


};

export default Main; 