import { useCatImage } from "../services/hooks/useCatImage.js";



export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'lazy' })
    console.log(imageUrl);
    
    return (
        <>
            {imageUrl && 
                <div>
                    <h1>Fact: lazy</h1>
                    <img src={`${imageUrl}`} alt={`Image extracted using the first three worlds for lazy`} />
                </div>
            }
        </>
    )
}