import { signIn } from "next-auth/react";

const SocialButtons = ({ title, Icon, singinUrl, classes }) => {
  return (
    <button className={classes} onClick={() => signIn(singinUrl)}>
      <Icon className="flex justify-start w-5 h-5" />
      <span className="font-semibold">{title}</span>
    </button>
  );
};

export default SocialButtons;
