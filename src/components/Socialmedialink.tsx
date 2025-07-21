import { GithubLogo, LinkedinLogo, TwitterLogo } from "../ui/icons/Index";

const Socialmedialink = ({ social, link }: { social: string, link: string }) => {
    const Socialmediaicon = ({ types}:{types: string}) => { 
        if (types === "githublogo") {
            return <GithubLogo />;
        } else if (types === "linkedinlogo") {
            return <LinkedinLogo />;
        } else if (types === "twitterlogo") {
            return <TwitterLogo />;
        }
        return null;
    };

    return <a href={link}>
        <span className="text-[#92aec8]" data-icon={social} data-size="24px" data-weight="regular">
            <Socialmediaicon types={social.toLowerCase()} />
        </span>
    </a>;
};

export default Socialmedialink;

