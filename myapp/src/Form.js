

export default function Form({datasaver}) {
    
    

    return (
        <form>
            <label>Isim:
            <input type="text" name="isim" onChange={datasaver}/>
            </label>
            

            <label>E-mail:
            <input type="text" name="mail" onChange={datasaver}/>
            </label>
            

            <label>Rol:
            <input type="text" name="rol" onChange={datasaver}/>
            </label>
            
            
            <input type="submit" value="Submit" />
        </form>
    )
}