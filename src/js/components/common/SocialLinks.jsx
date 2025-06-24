import SocialLink from "./SocialLink";

export default function SocialLinks({
    className = '',
}) {
    const socialLinks = [
        {
            icon: 'images/icons/telegram.svg',
            link: 'https://t.me/+iCtcV4CG7UphMWYy'
        },
        {
            icon: 'images/icons/pinterest.svg',
            link: 'https://ru.pinterest.com/velmoscow'
        },
    ]

    return (
        <div className={`M_Social ${className}`}>
            {socialLinks.map(
                (socialLink) => (
                    <SocialLink
                        key={socialLink.link}
                        icon={socialLink.icon}
                        link={socialLink.link}
                    />
                )
            )}
        </div>
    )
}