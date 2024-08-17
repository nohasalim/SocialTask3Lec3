import './SocialComponent.css'
import SocialItemComponent from '../SocialItemComponent/SocialItemComponent'
function SocialComponent(){
    return(
        <div id='div2'>
            <SocialItemComponent SocialName='GitHub'></SocialItemComponent>
            <SocialItemComponent SocialName='Front-End Monitor'></SocialItemComponent>
            <SocialItemComponent SocialName='LinkedIN'></SocialItemComponent>
            <SocialItemComponent SocialName='Twitter'></SocialItemComponent>
            <SocialItemComponent SocialName='Instagram'></SocialItemComponent>
        </div>
    )
}export default SocialComponent