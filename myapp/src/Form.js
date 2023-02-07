

export default function Form({datasaver, submit}) {
    

    return (
        <form onSubmit={submit}>
            
            <label>Isim:
            <input type="text" name="isim" onChange={datasaver}/>
            </label>
            

            <label>E-mail:
            <input type="text" name="mail" onChange={datasaver}/>
            </label>
            

            <label>Rol:
            <input type="text" name="rol" onChange={datasaver}/>
            </label>
            
            <button type="submit">KAYDET</button>
        </form>
    )
}