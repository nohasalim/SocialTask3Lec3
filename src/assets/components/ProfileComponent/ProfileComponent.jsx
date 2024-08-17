import ProfileImg from '../../../assets/images/avatar-jessica.jpeg'
import './ProfileComponent.css'
function ProfileComponent(){
    return(<div id='div1'>
        <img src={ProfileImg}></img>
        <h3>Jessica Randall</h3>
        <span>London,United Kingdom</span>
        <p> &quot;Front-end developer and avid reader.&quot;</p>
    </div> )
} export default ProfileComponent