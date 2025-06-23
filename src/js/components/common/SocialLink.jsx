export default function SocialLink({ icon, link }) {
    return (
        <div className="A_SocialLink">
            <a href={link}>
                <img src={icon} alt=""/>
            </a>
        </div>
    );
}