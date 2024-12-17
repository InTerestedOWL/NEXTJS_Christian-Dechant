import LinkWithIcon from "./shared/linkWithIcon";

export default function Footer({ socials }) {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2024. All right reserved, Christian Dechant.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          { socials.map((item, index) => (
            <LinkWithIcon key={ index }
                          url={ item.url }
                          linkAttribute={ item.classAttribute }
                          iconAttributes={ 'text-white hover:text-yellow' }
                          icon={ item.icon }></LinkWithIcon>
          )) }
        </div>
      </div>
    </div>
  );
}