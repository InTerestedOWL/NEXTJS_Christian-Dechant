import Link from "next/link";

export default function LinkWithIcon({ url, icon, linkAttribute, iconAttributes}) {
  return (
    <Link href={ url } className={linkAttribute}>
      <i
        className={ `bx ${ icon } text-2xl ${iconAttributes}` }
      ></i>
    </Link>
  )
}