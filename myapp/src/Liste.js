

export default function Liste({data}) {


    return (
        <div>
        {data.map(element => (
            <div>
                <span>{element.isim}</span>
                <span>{element.mail}</span>
                <span>{element.rol}</span>
            </div>
        ))}
        </div>
    )

}