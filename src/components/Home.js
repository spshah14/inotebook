import { Notes } from "./Notes"


export const Home = (props) => {

    return (
        <>

            <Notes showAlert={props.showAlert} />
        </>
    )
}
