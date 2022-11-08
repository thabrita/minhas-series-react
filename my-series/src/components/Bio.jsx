import Card from "./Card";
import profile from "../assets/profile.jpeg"

function Bio() {
    return(
        <Card
        title="Thaís Brito"
        description="Thaís, 27 anos. Bertioga - São Paulo"
        imgPath={profile}
        />
     );
}

export default Bio