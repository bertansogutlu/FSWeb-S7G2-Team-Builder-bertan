

export default function Form({datasaver, submit}) {
    

    return (
        <form onSubmit={submit}>

            <label>Isim:
            <input type="text" name="isim" onChange={datasaver} required/>
            </label>
            

            <label>E-mail:
            <input type="text" name="mail" onChange={datasaver} required/>
            </label>
            

            <label>Rol:
            <input type="text" name="rol" onChange={datasaver} required/>
            </label>
            
            <button type="submit">KAYDET</button>
        </form>
    )
}