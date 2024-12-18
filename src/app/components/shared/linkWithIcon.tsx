import Link from "next/link";

export default function LinkWithIcon({ url, icon, linkAttribute, iconAttributes }: {
  url: string,
  icon: string,
  linkAttribute: string,
  iconAttributes: string
}) {
  return (
    <Link href={ url } className={ linkAttribute }>
      <i
        className={ `bx ${ icon } text-2xl ${ iconAttributes }` }
      ></i>
    </Link>
  )
}