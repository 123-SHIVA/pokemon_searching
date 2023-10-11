function Pokemon({name,image}){


    console.log(name)
    console.log(image)
    return (

        <div>
            <div>{name}</div>
            <img src={image}/>
        </div>
    )
}

export default Pokemon;