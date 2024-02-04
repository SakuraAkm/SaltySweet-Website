import { useParams } from "react-router-dom"

export default function SingleRecipe() {
    const param = useParams()
    console.log(param)
    return (
        <div>
            {param.id}
        </div>
    )
}